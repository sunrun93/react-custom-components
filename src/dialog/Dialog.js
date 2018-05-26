import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Dialog.css';

class Dialog extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className={styles.dialogDiv} style={{width:this.props.options.width+'px',height:this.props.options.height+'px'}}>
                <div className={styles.dialogTitle}>  {this.props.options.title}
                    <span className={styles.closeBtn} onClick={this.props.options.closeFun}>x</span>
                </div>
                
            </div>
        ) 
    }
}
export default Dialog;

