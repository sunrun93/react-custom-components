import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './search-box/SearchBox';
import ToggleBtn from './toggle-btn/ToggleBtn';
import Calendar from './calendar/Calendar';


function toggleEvent(checked) {
  alert(checked);
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
    
    return (
      <div className="App">
        <SearchBox options={options}/>
        <hr/>
        <ToggleBtn isChecked={isChecked} onClick={toggleEvent}/>{`初始化状态：${isChecked}`}
        <br/>
        <hr/>
        <Calendar/>
      </div>
    );
  }
}


export default App;
