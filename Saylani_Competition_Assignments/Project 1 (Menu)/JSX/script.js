
class Menu extends React.Component {

    render() {

        var menuList = ["Homepage", "About", "Services", "Portfolio", "Contact us"];
        return React.createElement(
            "div",
            { className: "main" },
            menuList.map((v, i) => {
                return React.createElement(
                    "div",
                    { key: i },
                    React.createElement(Link, { label: v, index: i })
                );
            })
        );
    }
}

class Link extends React.Component {

    render() {

        var URL = this.props.label.replace(' ', '-') + ".html";

        return React.createElement(
            "a",
            { href: URL, className: "line" + this.props.index },
            this.props.label
        );
    }
}

ReactDOM.render(React.createElement(Menu, null), document.getElementById("menu"));