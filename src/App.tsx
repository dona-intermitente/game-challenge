import React, { MouseEvent } from 'react';
import './App.css';
import Letters from './test-board.json'

class App extends React.Component {
  selectTile(event: MouseEvent) {
    event.preventDefault();
    const size = 60;
    const selectItem = event.currentTarget as HTMLButtonElement;
    const selectAxes = selectItem.getBoundingClientRect();
    const tableItem = document.getElementById("table");
    const inputText = document.getElementById("text");
    (inputText as HTMLInputElement).value += selectItem?.childNodes[0].nodeValue;
    console.log(selectItem?.childNodes[0].nodeValue)

    tableItem?.childNodes.forEach(e => {
      const element = e as HTMLButtonElement;
      const { x, y } = element.getBoundingClientRect();
      if( x > selectAxes.x + size || x < selectAxes.x - size ) {
        element.disabled = true;
      } else if ( y > selectAxes.y + size || y < selectAxes.y - size ) {
        element.disabled = true;
      } else {
        element.disabled = false;
        selectItem.classList.add('select');
      }
    });
  }
  render() {
    const characters = Letters.board;
    let result:string[] = [];
    let ch ;
    while (result.length < characters.length){
        ch = characters[Math.floor(Math.random() * characters.length)];
        if (!result.includes(ch)){
            result.push(ch);
        }
    }
    return (
      <>
        <div id='table'>
          {result.map((l, index) => (
            <button key={index} onClick={this.selectTile}>{l}</button>
          ))}
        </div>
        <input id="text" type="text" disabled></input>
      </>
    );
  }
}

export default App;