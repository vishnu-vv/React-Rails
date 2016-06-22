class Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Prathamesh' };
  }

  render() {
    return (
      <div>
        <h1>Hi {this.props.name}</h1>
        <h1>My name is {this.state.name}</h1>

        <p>
          <a className="btn btn-lg btn-success" href="/">Back</a>
        </p>
      </div>
    )
  }
}
