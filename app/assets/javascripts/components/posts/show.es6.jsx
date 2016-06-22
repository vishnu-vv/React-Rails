class PostsShow extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.post.title}</h2>
        <p className="blog-content">
          {this.props.post.content}
        </p>
        <p>
          <a className="btn btn-lg btn-success" href="/posts">Back</a>
        </p>
      </div>
    );
  }

}
