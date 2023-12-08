import React, {Component} from "react";

class R017_Props extends Component {
    props_value = ''
    constructor(props) {
        super(props);
        this.props_value = props.props_val
    }

    render() {
        // let props_value = this.props.props_val;
        this.props_value += ' from App.js'
        return <div>{this.props_value}</div>
    }
}

export default R017_Props