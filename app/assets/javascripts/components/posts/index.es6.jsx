class PostsIndex extends React.Component {
  render() {
    let posts = this.props.posts.map((post) => {
      return this.renderPost(post)
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
          <a className="btn btn-lg btn-success" href="/">Back</a>
        </p>
      </div>
    );
  }

  renderPost(post) {
    return (
      <div>
        <h2><a href={post.url}>{post.title}</a></h2>
        <p className="blog-content">
          {post.content}
        </p>
      </div>
    )
  }
}
