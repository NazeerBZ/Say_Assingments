
var stopTimer;

class TimeWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timer: null
        };
    }

    five() {

        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;

        this.setState({
            timer: 5
        });
        stopTimer = setInterval(() => {
            this.setState({
                timer: --this.state.timer
            });

            if (this.state.timer == 0) {
                clearInterval(stopTimer);
                document.getElementById("btn1").disabled = false;
                document.getElementById("btn2").disabled = false;
                document.getElementById("btn3").disabled = false;
            }
        }, 1000);
    }

    ten() {

        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;

        this.setState({
            timer: 10
        });
        stopTimer = setInterval(() => {
            this.setState({
                timer: --this.state.timer
            });

            if (this.state.timer == 0) {
                clearInterval(stopTimer);
                document.getElementById("btn1").disabled = false;
                document.getElementById("btn2").disabled = false;
                document.getElementById("btn3").disabled = false;
            }
        }, 1000);
    }

    fifteen() {

        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;

        this.setState({
            timer: 15
        });
        stopTimer = setInterval(() => {
            this.setState({
                timer: --this.state.timer
            });

            if (this.state.timer == 0) {
                clearInterval(stopTimer);
                document.getElementById("btn1").disabled = false;
                document.getElementById("btn2").disabled = false;
                document.getElementById("btn3").disabled = false;
            }
        }, 1000);
    }

    res() {

        this.setState({
            timer: null
        });
        clearInterval(stopTimer);

        document.getElementById("btn1").disabled = false;
        document.getElementById("btn2").disabled = false;
        document.getElementById("btn3").disabled = false;
    }

    render() {

        return React.createElement(
            "div",
            { style: { marginLeft: '15px', marginTop: '15px', backgroundColor: 'rgba(0,0,0,0.9)', padding: '1px 1px 15px 15px', width: '450px' } },
            React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    { style: { color: 'white' } },
                    "Timer"
                ),
                React.createElement(
                    "button",
                    { id: "btn1", onClick: this.five.bind(this) },
                    "5 Seconds"
                ),
                React.createElement(
                    "button",
                    { id: "btn2", onClick: this.ten.bind(this), style: { marginLeft: '7px' } },
                    "10 Seconds"
                ),
                React.createElement(
                    "button",
                    { id: "btn3", onClick: this.fifteen.bind(this), style: { marginLeft: '7px' } },
                    "15 Seconds"
                )
            ),
            React.createElement("br", null),
            React.createElement(
                "h2",
                { style: { color: 'white' } },
                "Time Left: ",
                this.state.timer
            ),
            React.createElement(
                "button",
                { onClick: this.res.bind(this) },
                "Reset"
            )
        );
    }
}

ReactDOM.render(React.createElement(TimeWrapper, null), document.getElementById("Timer-Pro"));