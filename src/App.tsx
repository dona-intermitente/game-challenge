import React, { MouseEvent } from 'react';
import './App.css';
import Letters from './test-board.json'
import Dictionary from './dictionary.json'

class App extends React.Component {
  selectTile(event: MouseEvent) {
    event.preventDefault();
    const size = 60;
    const selectItem = event.currentTarget as HTMLButtonElement;
    const selectAxes = selectItem.getBoundingClientRect();
    const tableItem = document.getElementById("table");
    const words = Dictionary.words;
    const inputText = document.getElementById("text");
    const inputValue = inputText as HTMLInputElement;
    const valid = document.getElementById("validate")
    const validItem = valid as HTMLElement;

    inputValue.value += selectItem?.childNodes[0].nodeValue;
    if ( words.includes(inputValue.value.toLowerCase()) ) {
      validItem.innerHTML = "valid";
      validItem.style.opacity = "100%";
    }

    tableItem?.childNodes.forEach(e => {
      const element = e as HTMLButtonElement;
      const { x, y } = element.getBoundingClientRect();
      if( x > selectAxes.x + size || x < selectAxes.x - size ) {
        element.disabled = true;
      } else if ( y > selectAxes.y + size || y < selectAxes.y - size ) {
        element.disabled = true;
      } else {
        element.disabled = false;
        selectItem.classList.add("select");
      }
    });
  }
  render() {
    const characters = Letters.board;
    let result:string[] = [];
    let ch ;
    while (result.length < characters.length){
        ch = characters[Math.floor(Math.random() * characters.length)];
        result.push(ch);
    }
    return (
      <>
        <a href="location.reload()">x</a>
        <div id="table">
          {result.map((l, index) => (
            <button key={index} onClick={this.selectTile}>{l}</button>
          ))}
        </div>
        <input id="text" type="text" disabled></input>
        <div id="validate">invalid</div>
      </>
    );
  }
}

export default App;