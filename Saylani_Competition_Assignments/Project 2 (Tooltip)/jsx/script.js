
class Tooltip extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            opacity: 0
        };
    }

    toggle(e) {

        var tooltipNode = e.target;
        this.setState({
            opacity: this.state.opacity == 0 ? 1 : 0,
            top: tooltipNode.offsetTop,
            left: tooltipNode.offsetLeft
        });
    }

    render() {

        var styling = {
            zIndex: this.state.opacity ? 1000 : -1000,
            opacity: this.state.opacity,
            top: (this.state.top || 0) + 20,
            left: (this.state.left || 0) - 3

        };

        return React.createElement(
            "div",
            { style: { display: "inline" } },
            React.createElement(
                "span",
                { style: { color: 'blue' }, onMouseEnter: this.toggle.bind(this), onMouseOut: this.toggle.bind(this) },
                this.props.children
            ),
            React.createElement(
                "div",
                { style: styling, role: "tooltip", className: "tooltip bottom" },
                React.createElement("div", { className: "tooltip-arrow" }),
                React.createElement(
                    "div",
                    { className: "tooltip-inner" },
                    this.props.text
                )
            ),
            React.createElement("br", null),
            React.createElement("br", null)
        );
    }
}

ReactDOM.render(React.createElement(
    "div",
    null,
    "React provides a way for developers to control and customize component's behavior based on its lifecycle events.They belong to the following categories",
    React.createElement("br", null),
    React.createElement("br", null),
    React.createElement(
        "h2",
        null,
        "Mounting Events:"
    ),
    React.createElement(
        Tooltip,
        { text: "Happens before mounting to the DOM" },
        "componentWillMount()"
    ),
    React.createElement(
        Tooltip,
        { text: "Happens after mounting and rendering" },
        "componentDidMount()"
    ),
    React.createElement(
        "h2",
        null,
        "UPDATING Events:"
    ),
    React.createElement(
        Tooltip,
        { text: "Happens when component is about to receive properties" },
        "componentWillReceiveProps(nextProps)"
    ),
    React.createElement(
        Tooltip,
        { text: " Allows to optimize component's re-rendering by determining when to update and when to not" },
        "shouldComponentUpdate(nextProps, nextState)"
    ),
    React.createElement(
        Tooltip,
        { text: "Happens right before component will update" },
        "componentWillUpdate(nextProps, nextState)"
    ),
    React.createElement(
        Tooltip,
        { text: "Happens right after component updated" },
        "componentDidUpdate(prevProps, prevState)"
    ),
    React.createElement(
        "h2",
        null,
        "Unmounting Events:"
    ),
    React.createElement(
        Tooltip,
        { text: "Allows to unbind and detach any event listeners or do other clean up work before component is unmounted" },
        "componentWillUnmount function()"
    )
), document.getElementById("content"));