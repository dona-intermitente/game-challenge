import React, { MouseEvent } from 'react';
import './App.css';

class App extends React.Component {
  prueba(event: MouseEvent) {
    event.preventDefault();
    const size = 60;
    const selectItem = event.currentTarget as HTMLButtonElement;
    const selectAxes = selectItem.getBoundingClientRect();
    const tableItem = document.getElementById("table");

    tableItem?.childNodes.forEach(e => {
      const element = e as HTMLButtonElement;
      const { x, y } = element.getBoundingClientRect();
      if( x > selectAxes.x + size || x < selectAxes.x - size ) {
        element.disabled = true;
      } else if ( y > selectAxes.y + size || y < selectAxes.y - size ) {
        element.disabled = true;
      } else {
        element.disabled = false;
        selectItem.classList.add('select')
      }
    });
  }
  render() {
    return (
      <div id='table'>
        <button id='0' onClick={this.prueba}></button>
        <button id="1" onClick={this.prueba}></button>
        <button id="2" onClick={this.prueba}></button>
        <button id="3" onClick={this.prueba}></button>
        <button id='4' onClick={this.prueba}></button>
        <button id="5" onClick={this.prueba}></button>
        <button id="6" onClick={this.prueba}></button>
        <button id="7" onClick={this.prueba}></button>
        <button id='8' onClick={this.prueba}></button>
        <button id="9" onClick={this.prueba}></button>
        <button id="10" onClick={this.prueba}></button>
        <button id="11" onClick={this.prueba}></button>
        <button id='12' onClick={this.prueba}></button>
        <button id="13" onClick={this.prueba}></button>
        <button id="14" onClick={this.prueba}></button>
        <button id="15" onClick={this.prueba}></button>
      </div>
    );
  }
}

export default App;