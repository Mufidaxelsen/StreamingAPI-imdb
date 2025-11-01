import React from "react"

class Footer extends React.Component{
    /*pemanggilan PROPS di class component*/
    constructor(props) {
    super(props);

    }
    render() {
        return (
        <div>
            <h1>MY FOOTER BRO</h1>
            {this.props.panggilan4()}
        </div>
        );
    };
};

export default Footer;