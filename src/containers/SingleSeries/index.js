import React, { Component } from "react";

class SingleSeries extends Component
{

    render() {


        console.log(this.props);
        return(<div>Single series {this.props.match.params.id}</div>)
    }

}

export default SingleSeries;