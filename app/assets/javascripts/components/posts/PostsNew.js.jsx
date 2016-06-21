class PostsNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user_id: this.props.user_id, title: '', content: '' };

  }

  render() {
    var errorMessage = this.renderErrors();

    return (
      <div>
        <h2> Add new Post </h2>

        { errorMessage }

        <form onSubmit={this.submitPost.bind(this)}>
          <div className="form-group">
            <textarea className="form-control"
                      placeholder="Title"
                      value={this.state.title}
                      onChange={(event) => this.handleChange(event, 'title')}/>
          </div>


          <div className="form-group">
            <textarea className="form-control"
                      placeholder="Content"
                      value={this.state.content}
                      onChange={(event) => this.handleChange(event, 'content')}/>
          </div>

          <div className="form-group">
            <button type="submit"
                    ref="submit"
                    className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }

  renderErrors() {
    if (this.state.errors) {
      var errors = this.state.errors;
      return (
        <div className="alert alert-danger">
          <ul>
            {errors.map((error, idx) => {
               return(
                 <li key={idx}>
                   {error}
                 </li>
               )
             })}
          </ul>
        </div>
      );
    }
  }

  handleChange(event, attribute) {
    var newState = this.state;
    newState[attribute] = event.target.value;
    newState.errors = null;
    this.setState(newState);
    console.log(this.state);
  }


  setPosts(posts) {
    if (posts.errors) {
      this.setState({errors: posts.errors})
    } else {
      this.props.setPosts(posts);
    }
  }

  parseJSON(response) {
    return response.json()
  }

  submitPost(event) {
    event.preventDefault();

    $.ajax({
      type: 'POST',
      url: this.props.create_post_url,
      data: { post: this.state },
      success: function(data) {
        if (data.errors) {
          this.setState({ errors: data.errors });
        } else {
          window.location = data.redirect_url
        }
      }.bind(this)
    });
  }
}
