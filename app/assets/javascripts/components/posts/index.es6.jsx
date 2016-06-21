class PostsIndex extends React.Component {
  constructor(props) {
    super(props);
    var { posts } = this.props;
    this.state = { posts: posts };
  }

  render() {
    let posts = this.state.posts.map((post) => {
      return this.renderPost(post)
    });

    return (
      <div>
        <h1>All Posts</h1>
        <ul>
          {posts}
        </ul>
        <br/>
      </div>
    );
  }

  renderPost(post) {
    return (
      <li key={post.id}>
        <a href={post.url}>{post.title}: {post.content}</a>
      </li>
    )
  }
}
