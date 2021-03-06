import React from "react";
import './comment.css'

class CommentBox extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        showComments: false,
        comments: [
          {id: 1, author: "landiggity", body: "Wow that is so cool!"},
          {id: 2, author: "scarlett-jo", body: "That's a mighty fine comment you've got there my good looking fellow..."},
          {id: 3, author: "rosco", body: "Yeet"}
        ]
      };
    }
    
    render () {
      const comments = this._getComments();
      let commentNodes;
      let buttonText = 'Show Comments';
      
      if (this.state.showComments) {
        buttonText = 'Hide Comments';
        commentNodes = <div className="comment-list">{comments}</div>;
      }
      
      return(
        <div className="comment-box">
          <h3>Add Comment</h3>
          <CommentForm addComment={this._addComment.bind(this)}/>
          <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
            {buttonText}
          </button>
          <h3>Comments</h3>
          <h4 className="comment-count">
            {this._getCommentsTitle(comments.length)}
          </h4>
          {commentNodes}
        </div>  
      );
    } // end render
    
    _addComment(author, body) {
      const comment = {
        id: this.state.comments.length + 1,
        author,
        body
      };
      this.props.addPoints();
      this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
    }
    
    _handleClick() {
      this.setState({
        showComments: !this.state.showComments
      });
    }
    
    _getComments() {    
      return this.state.comments.map((comment) => { 
        return (
          <Comment 
            author={comment.author} 
            body={comment.body} 
            key={comment.id} />
        ); 
      });
    }
    
    _getCommentsTitle(commentCount) {
      if (commentCount === 0) {
        return 'No comments yet';
      } else if (commentCount === 1) {
        return "1 comment";
      } else {
        return `${commentCount} comments`;
      }
    }
} // end CommentBox component
  
class CommentForm extends React.Component {
    render() {
      return (
        <form className="comment-form" id="commentForm" onSubmit={this._handleSubmit.bind(this)}>
          <div className="comment-form-fields">
            {/* <input placeholder="Name" required ref={(input) => this._author = input}></input><br /> */}
            <h4 style={{ color: 'black', display: 'flex'}}>Aryan</h4>
            <textarea placeholder="Comment" rows="2" required ref={(textarea) => this._body = textarea}></textarea>
          </div>
          <div className="comment-form-actions">
            <button type="submit">Post Comment</button>
          </div>
        </form>
      );
    } // end render
    
    _handleSubmit(event) { 
      event.preventDefault();   // prevents page from reloading on submit
      // let author = this._author;
      let author = "Aryan"
      let body = this._body;
      // this.props.addComment(author.value, body.value);
      this.props.addComment("Aryan", body.value);
      document.getElementById('commentForm').reset();
    }
} // end CommentForm component
  
class Comment extends React.Component {
    render () {
      return(
        <div className="comment">
          <p className="comment-header">{this.props.author}</p>
          <p className="comment-body">- {this.props.body}</p>
          <div className="comment-footer">
            <a href="/" className="comment-footer-delete" onClick={this._deleteComment}>Delete Comment</a>
          </div>
        </div>
      );
    }
    _deleteComment() {
      alert("-- DELETE Comment Functionality COMMING SOON...");
    }
}
  
  
export { Comment, CommentForm, CommentBox }