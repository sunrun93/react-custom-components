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
                <div className={styles.dialogContent}>
                {/* for customer defined  */}
                    {this.props.children}
                </div>
                <div className={styles.dialogAction}>
                    {this.props.options.hasOkBtn && <button onClick={this.props.options.okEvent}>OK</button>}
                    {this.props.options.hasCancelBtn && <button onClick={this.props.options.cancelEvent}>Cancel</button>}
                </div>
            </div>
        ) 
    }
}
export default Dialog;

