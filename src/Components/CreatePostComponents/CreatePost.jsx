import React, { Component,Fragment } from 'react';
import './CreatePost.css';
class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'',
            content:'',
         }
         this.createHandleMethod=this.createHandleMethod.bind(this);
         this.formSubmitMethod=this.formSubmitMethod.bind(this);
         this.publishedNotification=this.publishedNotification.bind(this);
    }
    createHandleMethod(e){
        this.setState({[e.target.name]:e.target.value});
    }
    formSubmitMethod(e){
        e.preventDefault();
        this.setState({title:'',content:''});
        let myData={
            title:this.state.title,
            content:this.state.content
        };
        window.fetch("http://localhost:4000/api/posts/addpost",{
            method:'POST',
            headers:{
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(myData),
        }).then(result =>{
            result.json().then((res) =>{
                console.log(res)
            }).catch(err=>console.log(err))
        }).catch(err=>console.log(err));
    }
    publishedNotification(){
        alert("Post Published Successfully Please refresh the page!!!")
    }
    render() { 
        return ( 
            <Fragment>
                <div className="container">
                <h1>Create Your Post!!!</h1>
                <h5>Feel Free To Write..</h5>
                <form onSubmit={this.formSubmitMethod}>
                    <div className="title">
                        <label htmlFor="title">Title</label>
                        <input type="text" placeholder="Enter Your  Title.." autoComplete="off"
                        name="title" value={this.state.title} onChange={this.createHandleMethod}
                        required/>
                    </div>
                    <div className="content">
                    <label htmlFor="Content">Content</label>
                         <textarea name="content" id="content" cols="30" rows="10"  placeholder="Enter Your Content.." 
                         value={this.state.content} onChange={this.createHandleMethod}
                         required>
                         </textarea>
                    </div>
                    <div className="btn">
                        <button onClick={this.publishedNotification}>Publish</button>
                    </div>
                </form>
                </div> 
            </Fragment>
         );
    }
}
 
export default CreatePost;
