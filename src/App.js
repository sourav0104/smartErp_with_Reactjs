import React, { Component, Fragment } from 'react';
import Search from './Components/SearchComponents/Search';
import './App.css';
import CreatePost from './Components/CreatePostComponents/CreatePost';
import PublishedPost from './Components/PublishedComponents/PublishedPost';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <Fragment>
               <header>
                   <Search />
               </header>
               <main>
                   <div className="firstpart">
                        <img src="../images/14571-search-loading-animation.gif" className="image"></img>
                   </div>
                   <div className="secondpart">
                        <CreatePost />
                   </div>
                   <div className="thirdpart">
                    <PublishedPost />
                   </div>
               </main>
            </Fragment>
        );
    }
}
 
export default App;