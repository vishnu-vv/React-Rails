class ComponentLifeCycle extends React.Component {

  constructor(props) {
    super(props);
    this.state = { status: true};
  }

  componentWillMount () {
    console.log('componentWillMount');
  }

  componentDidMount () {
    console.log('componentDidMount');
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate () {
    console.log('componentWillUpdate');
  }

  render () {
    console.log("render");

    return <h1 onClick={this.toggleState.bind(this)}>
             {this.state.status.toString()}
    </h1>
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

  toggleState () {
    this.setState({status: !this.state.status})
  }

}

// componentWillMount
// componentDidMount
// componentWillReceiveProps(object nextProps)
// boolean shouldComponentUpdate(object nextProps, object nextState)
// componentWillUpdate(object nextProps, object nextState)
// componentDidUpdate(object prevProps, object prevState)
// componentWillUnmount()
// React.unmountComponentAtNode(document.body)
