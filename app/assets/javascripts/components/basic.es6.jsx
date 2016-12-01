class Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Vishnu V V' };
  }

  render() {
    return (
      <div>
        <h1>Hi {this.props.name}</h1>
        <h1>My name is {this.state.name}</h1>
        <h3>Im {this.props.age} years old</h3>

        <p>
          <a className="btn btn-lg btn-success" href="/">Back</a>
        </p>
      </div>
    )
  }
}
