class PostsShow extends React.Component {
  constructor(props){
    super(props);
    var { post } = props;
    console.log(post);

    this.state = { post: post, comments: post.comments }
  }

  render() {
    let {post, comments} = this.state;
    let commentsToDisplay = comments.map((comment) => {
      return this.renderComment(comment)
    });


    return (
      <div>
        <h1>{post.title}</h1>
        <well>
          {post.content}
        </well>
        <br/>
        <br/>
        <h3>Comments: </h3><br/>
        <ul>{commentsToDisplay}</ul>
      </div>
    );
  }

  renderComment(comment) {
    return (
      <li>
        {comment.user_name} - {comment.content}
      </li>
    )
  }
}
