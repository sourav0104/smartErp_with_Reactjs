import React, { Component,Fragment } from 'react';
import './PublishedPost.css';

class PublishedPost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            answer:[],
         }
    }
    componentDidMount(){
        window.fetch("http://localhost:4000/api/posts/getpost").then(result=>{
            result.json().then(res=>{
                this.setState({answer: res.post})
            }).catch(err=>console.log(err))
        })
        .catch(err=>console.log(err));

    }
    render() { 
        let content = this.state.answer.map(item=>(
            <Fragment>
                <ul key={item.id}>
                    <li><h2>{item.title}</h2></li>
                    <li><p>{item.content}</p></li>
                </ul>
            </Fragment>
        ))

        return ( 
            <Fragment>
                <div className="container1">
                <h1>Published Post!!!</h1>
                <ul>{content}</ul>
                </div>
            </Fragment>
         );
    }
}
 
export default PublishedPost;