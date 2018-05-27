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

class RenderDialogContent extends Component{
 
  render(){
    return (
      <div>
        <div className={styles.dialogContentLine}> 
          <span className={styles.label}>User Name</span>
          <input className={styles.userInput}
            type='text' 
            placeholder="Please input user name"
            ref='userInput'/>
        </div>
        <div className={styles.dialogContentLine}>
          <span className={styles.label}>Password</span>
          <input className={styles.userInput}
            type='password' 
            placeholder="Please input your passwords"
            ref='userPassword'/>
        </div>
      </div>
    )
  }
}


class App extends Component {
  constructor(){
    super()
    this.state={
      showDialog:false,
      userName:''
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

  okEvent(){
    let userName=this.refs.customerContent.refs.userInput.value;
    alert(userName);
    this.closeDialog();
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
      width:400,
      height:300,
      title:'Log in',
      closeFun:this.closeDialog.bind(this),
      hasOkBtn:true,
      okEvent:this.okEvent.bind(this),
      hasCancelBtn:true,
      cancelEvent:this.closeDialog.bind(this)
    }

    return (
      <div>
        <SearchBox options={options}/>
        <hr/>
        <ToggleBtn isChecked={isChecked} onClick={toggleEvent}/>{`初始化状态：${isChecked}`}
        <br/>
        <hr/>

        <button onClick={this.showDialog.bind(this)}>Open dialog</button>
        <Layer className={styles.layer} open={this.state.showDialog}>
          <Dialog options={dialogOptions}> 
            <RenderDialogContent ref='customerContent' userName={this.state.userName}/>
          </Dialog>
        </Layer>
       
      </div>
    );
  }
}


export default App;
