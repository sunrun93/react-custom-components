import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Dialog.css';

class Dialog extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className={styles.dialogDiv} style={{width:this.props.options.width+'px',height:this.props.options.height+'px'}}></div>
        ) 
    }
}
export default Dialog;

