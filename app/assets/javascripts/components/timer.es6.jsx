class Timer extends React.Component {
  constructor(props) {
    super(props)
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    this.state = { hour: hour, minute: minute, second: second };
  }

  clockTick() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    this.setState({ hour: hour, minute: minute, second: second });
  }

  componentDidMount() {
    setInterval(this.clockTick.bind(this), 1000);
  }

  render() {
    return(
      <div>
        <h2>Timer</h2>
        <h1>
          {this.state.hour}:
          {this.state.minute}:
          {this.state.second}
        </h1>

        <p>
          <a className="btn btn-lg btn-success" href="/">Back</a>
        </p>
      </div>
    );
  }
}
