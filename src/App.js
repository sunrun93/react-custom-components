import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './search-box/SearchBox';
import ToggleBtn from './toggle-btn/ToggleBtn';
import Calendar from './calendar/Calendar';
import Dialog from './dialog/Dialog';


function toggleEvent(checked) {
  alert(checked);
}
function showDialog(){

}

class App extends Component {
  render() {
    let options = [
      { id: '1', label: 'Option-A', value: 'Option-A' },
      { id: '2', label: 'Option-B', value: 'Option-B' },
      { id: '3', label: 'Option-C', value: 'Option-C' },
      { id: '4', label: 'Option-D', value: 'Option-D' }
    ];
    let isChecked = false;
    let dialogOptions = {
      width:300,
      height:300
    }

    return (
      <div className="App">
        <SearchBox options={options}/>
        <hr/>
        <ToggleBtn isChecked={isChecked} onClick={toggleEvent}/>{`初始化状态：${isChecked}`}
        <br/>
        <hr/>
        <Calendar/>
        <hr/>
        <button onclick={showDialog}>Open dialog</button>
        <Dialog options={dialogOptions}/>
      </div>
    );
  }
}


export default App;
