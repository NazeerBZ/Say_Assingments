
var stopTimer;

class TimeWrapper extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            timer: null
        }
    }

    five() {

        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;

        this.setState({
            timer: 5
        })
         stopTimer = setInterval(() => {
            this.setState({
                timer: --this.state.timer
            })

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
        })
         stopTimer = setInterval(() => {
            this.setState({
                timer: --this.state.timer
            })

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
        })
        stopTimer = setInterval(() => {
            this.setState({
                timer: --this.state.timer
            })

            if (this.state.timer == 0) {
                clearInterval(stopTimer);
                document.getElementById("btn1").disabled = false;
                document.getElementById("btn2").disabled = false;
                document.getElementById("btn3").disabled = false;
            }
        }, 1000);
    }

    res(){

        this.setState({
            timer: null
        })
        clearInterval(stopTimer);
        
        document.getElementById("btn1").disabled = false;
        document.getElementById("btn2").disabled = false;
        document.getElementById("btn3").disabled = false;
    }

    render() {

        return (
            <div style={{ marginLeft: '15px', marginTop: '15px', backgroundColor: 'rgba(0,0,0,0.9)', padding: '1px 1px 15px 15px', width: '450px' }}>
                <div>
                    <h1 style={{ color: 'white' }}>Timer</h1>
                    <button id="btn1" onClick={this.five.bind(this)}>5 Seconds</button>
                    <button id="btn2" onClick={this.ten.bind(this)} style={{ marginLeft: '7px' }}>10 Seconds</button>
                    <button id="btn3" onClick={this.fifteen.bind(this)} style={{ marginLeft: '7px' }}>15 Seconds</button>
                </div><br />
                <h2 style={{ color: 'white' }}>Time Left: {this.state.timer}</h2>
                <button onClick={this.res.bind(this)}>Reset</button>
            </div>
        )

    }
}

ReactDOM.render(<TimeWrapper />, document.getElementById("Timer-Pro"));