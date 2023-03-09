import React from "react";

class D2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick()}>
                    {this.state.isToggleOn ? 'On' : 'OFF'}
                </button>
            </div>
        )
    }
}

export default D2;