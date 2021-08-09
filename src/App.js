import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("hello");
    }

    state = {
        count : 0
    };

    add = () => {
        this.setState({count: this.state.count + 1});
    }

    minus = () => {
        this.setState({count: this.state.count - 1});
    }

    componentDidMount() {
        console.log("component rendered");
    }

    componentDidUpdate() {
        console.log("component update");
    }

    componentWillUnmount() {
        console.log("component Unmounted");
    }

    render() {
        console.log("I'm rendering");
        return (
            <div>
                <h1>this is number : {this.state.count}</h1>
                <button onClick={this.add}>add</button>
                <button onClick={this.minus}>minus</button>
            </div>
	);
    }
}

export default App;
