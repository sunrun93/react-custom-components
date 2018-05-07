import React from 'react';
import styles from './SearchBox.css';
import ReactDOM from 'react-dom';



class SearchBox extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isShow:false,
            showValue:''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleOptionClick = this.handleOptionClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleClick() {
        let isShow = this.refs.menulist.props.isShow;
        this.setState({
            isShow: isShow ? false : true
        })
    }
    handleOptionClick(id){
        let selectedItem = this.props.options.filter(item=>{return item.id===id})[0];
        this.setState({
            showValue:selectedItem.label,
            isShow:false
        })
    }
    handleInputChange(e){
        let inputValue = e.target.value;
        this.setState({
            showValue:inputValue
        })
    }
    
    render() {
        return (
            <div style={{ width: '300px'}} >
                <div className={styles.searchBox} onClick={this.handleClick}>
                    <SearchInput showValue={this.state.showValue} handleInputChange={this.handleInputChange}/>
                    <span className={styles.searchIcon}></span>
                </div>
                <DropdownMenu ref="menulist" 
                    options={this.props.options} 
                    showMenu={false} 
                    searchLabel={this.state.showValue}
                    isShow={this.state.isShow} 
                    handleOptionClick={this.handleOptionClick}/>
            </div>
        )
    }
}

class SearchInput extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <input type="text" value={this.props.showValue}  onChange={this.props.handleInputChange} className={styles.searchInput} placeholder="please enter to search..."/>
        )
    }
}


class DropdownMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu:props.isShow
        };
        
    }
    componentWillReceiveProps(props){
        this.setState({
            showMenu:props.isShow
        })
    }
    render(){
        return(
             <MenuList options={this.props.options} searchLabel={this.props.searchLabel} showMenu={this.state.showMenu} optionClick={this.props.handleOptionClick}/>
        )
    }
        
}

function MenuList(props){
    let searchLabel = props.searchLabel.toLowerCase();
    let options = props.options.filter((option)=>{return option.label.toLowerCase().indexOf(searchLabel)!==-1});
    
    const menuItem = options.map((item)=>
        <li className={styles.menuItem} key={item.id} onClick={props.optionClick.bind(item,item.id)}>{item.label}</li>
    );
    return (
    <ul className={props.showMenu?styles.menuList:styles.hiddenMenuList}>{menuItem}</ul>
    )
}


export default SearchBox;