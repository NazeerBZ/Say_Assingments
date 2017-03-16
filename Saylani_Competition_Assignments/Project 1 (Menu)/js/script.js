
class Menu extends React.Component {

    render() {

        var menuList = ["Homepage", "About", "Services", "Portfolio", "Contact us"];
        return (
            <div className="main">
                {menuList.map((v, i) => {
                    return <div key={i}><Link label={v} index={i}/></div>
                })}
            </div>
        )
    }
}

class Link extends React.Component {

    render() {

        var URL = this.props.label.replace(' ', '-') + ".html";

        return (
            
                <a href={URL} className={"line"+this.props.index}>{this.props.label}</a>                
            
        )
    }
}

ReactDOM.render(<Menu />, document.getElementById("menu"));




