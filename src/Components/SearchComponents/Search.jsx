import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Search.css';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
                value:"",
                search:"",
                title:"",
                content:"",
          }
          this.searchChangeMethod = this.searchChangeMethod.bind(this);
          this.onCancleClick = this.onCancleClick.bind(this);
    }
    searchChangeMethod(e){
        this.setState({[e.target.name]:e.target.value});
    }
    searchSubmitMethod(e){
        e.preventDefault(e);
        this.setState({search:e.target.value})
    }
    onCancleClick(){
        this.setState({value:''});
    }
    searchHandler(search){
        return function(x){
            return x.title.toLowerCase().includes(search.toLowerCase()) || !search; 
        }
    }
    render() { 
        return ( 
            <Fragment>
                <div className="searchbar">
                    <span className="searchicon">
                        <FontAwesomeIcon icon={faSearch}  className="round"/>
                    </span>
                    <form onChange={this.searchChangeMethod}>
                    <input type="text" placeholder="Search Your Post...." className="searchinput" autocomplete="off" name="value" value={this.state.value} onChange={this.searchChangeMethod}/>
                    </form>
                    <span className="cancleicon">
                        <FontAwesomeIcon icon={faTimes} className="wrong" onClick={this.onCancleClick}/>
                    </span>
                </div>
            </Fragment>
         );
    }
}
 
export default Search;