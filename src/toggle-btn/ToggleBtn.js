import React from 'react';
import styles from './ToggleBtn.css';

class ToggleBtn extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            isCheck:false
        };
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(){
        this.setState({
            isCheck:this.state.isCheck?false:true
        });
        console.log(!this.state.isCheck);
    }
    render(){
        return(
            <div className={styles.toggleBtn} onClick={this.clickHandler}>
                <input type="checkbox" checked={this.state.isCheck}
                    className={this.state.isCheck?styles.greenDotRight:styles.greenDotLeft}/>
                <label></label>
            </div>
        )
    }
}
export default ToggleBtn;