class PostsNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user_id: this.props.user_id, title: '', content: '' };
  }

  render() {
    var errorMessage = this.renderErrors();

    return (
      <div className="container">
        <h1> Add new Post </h1>

        { errorMessage }

        <form onSubmit={this.submitPost.bind(this)}>
          <div className="form-group">
            <label>Title</label>
            <input className="form-control"
                   type="text"
                   placeholder="Title"
                   value={this.state.title}
                   onChange={(event) => this.handleChange(event, 'title')} />
          </div>


          <div className="form-group">
            <label>Content</label>
            <textarea className="form-control"
                      placeholder="Content"
                      value={this.state.content}
                      rows="50"
                      onChange={(event) => this.handleChange(event, 'content')}
            />
          </div>

          <div className="form-group">
            <button type="submit"
                    ref="submit"
                    className="btn btn-success">
              Submit
            </button>
          </div>
        </form>

        <p>
          <a className="btn btn-lg btn-success" href="/">Back</a>
        </p>
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
          $("html, body").animate({ scrollTop: 0 }, "slow");
        } else {
          window.location = data.redirect_url;
        }
      }.bind(this)
    });
  }
}
