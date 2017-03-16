
class Tooltip extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            opacity: 0
        }
    }

    toggle(e) {

        var tooltipNode = e.target;
        this.setState({
            opacity: (this.state.opacity == 0) ? 1 : 0,
            top: tooltipNode.offsetTop,
            left: tooltipNode.offsetLeft
        })
    }

    render() {

        var styling = {
            zIndex: (this.state.opacity) ? 1000 : -1000,
            opacity: this.state.opacity,
            top: (this.state.top||0) +20,
            left: (this.state.left || 0) -3,
            
        }


        return (
            <div style={{ display: "inline" }}>
               
                <span style={{ color: 'blue' }} onMouseEnter={this.toggle.bind(this)} onMouseOut={this.toggle.bind(this)}>
                    {this.props.children}
                </span>

                <div style={styling} role="tooltip" className="tooltip bottom">
                    <div className="tooltip-arrow"></div>                    
                    <div className="tooltip-inner">{this.props.text}</div>
                </div>
                 <br/><br/>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        React provides a way for developers to control and customize component's
        behavior based on its lifecycle events.They belong to the following categories<br /><br />

        <h2>Mounting Events:</h2>
        <Tooltip text="Happens before mounting to the DOM">componentWillMount()</Tooltip>
        <Tooltip text="Happens after mounting and rendering">componentDidMount()</Tooltip>

        <h2>UPDATING Events:</h2>
        <Tooltip text="Happens when component is about to receive properties">componentWillReceiveProps(nextProps)</Tooltip>
        <Tooltip text=" Allows to optimize component's re-rendering by determining when to update and when to not">shouldComponentUpdate(nextProps, nextState)</Tooltip>
        <Tooltip text="Happens right before component will update">componentWillUpdate(nextProps, nextState)</Tooltip>
        <Tooltip text="Happens right after component updated">componentDidUpdate(prevProps, prevState)</Tooltip>

        <h2>Unmounting Events:</h2>
        <Tooltip text="Allows to unbind and detach any event listeners or do other clean up work before component is unmounted">componentWillUnmount function()</Tooltip>

    </div>,
    document.getElementById("content"));



