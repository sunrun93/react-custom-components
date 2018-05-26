import React, { Component } from 'react';
import styles from './App.css';
import SearchBox from './search-box/SearchBox';
import ToggleBtn from './toggle-btn/ToggleBtn';
import Calendar from './calendar/Calendar';
import Dialog from './dialog/Dialog';
import Layer from './dialog/Layer';


function toggleEvent(checked) {
  alert(checked);
}


class App extends Component {
  constructor(){
    super()
    this.state={
      showDialog:false
    }
  }
  showDialog(){
    this.setState({
      showDialog:true
    })
  }
  closeDialog(){
    //close the dialog, add some validations
    this.setState({
      showDialog:false
    })
  }
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
      height:300,
      title:'Log in',
      closeFun:this.closeDialog.bind(this)
    }

    return (
      <div>
        <SearchBox options={options}/>
        <hr/>
        <ToggleBtn isChecked={isChecked} onClick={toggleEvent}/>{`初始化状态：${isChecked}`}
        <br/>
        <hr/>
        <Calendar/>
        <hr/>
        <button onClick={this.showDialog.bind(this)}>Open dialog</button>
        <Layer className={styles.layer} open={this.state.showDialog}>
          <Dialog options={dialogOptions}/>
        </Layer>
       
      </div>
    );
  }
}


export default App;
