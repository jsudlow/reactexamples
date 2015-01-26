
var data = [
  {author: "Pete Hunt", text: "This is a comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
  ];
var converter = new Showdown.converter();
var Comment = React.createClass({
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.children.toString())
    return (

      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
       <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});
// tutorial2.js
var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
          <Comment author={comment.author}>
            {comment.text}
          </Comment>
        )
    })
    return (
      <div className="commentList">
        Hello, world! I am a CommentList.
         {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

// tutorial1.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hi Im just a little black rain cloud
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});
React.render(
  <CommentBox url="comments.json" />,
  document.getElementById('content')
);