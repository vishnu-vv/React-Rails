class PostsIndex extends React.Component {
  constructor(props){
  super(props);
  this.state = {posts: props.posts};
  }
  render() {
    let posts = this.props.posts.map((post) => {
      return <PostRow key={post.id} post={post}/>
    });

    return (
      <div className="container">
        <div className="jumbotron">
           <h1>Book reviews by Derek Sivers</h1>
        </div>

        <section>
          {posts}
        </section>
        <p>
          <a className="btn btn-lg btn-success" onClick={this.removePosts.bind(this)}>Remove Last Review</a>
        </p>
        <p>
          <a className="btn btn-lg btn-success"  href="/">Back</a>
        </p>
      </div>
    );
  }
  removePosts() {
    let newState = { posts: this.state.posts};
    newState.posts.pop();
    this.setState(newState);
  }
}

class PostRow extends React.Component {
  render() {
    const post = this.props.post;
    return (
      <div>
        <h2><a href={post.url}>{post.title}</a></h2>
        <p className="blog-content">
          {post.content}
        </p>
      </div>
    )
  }

  componentWillUnmount() {
    console.log("PostRow was unmounted")
  }
}
