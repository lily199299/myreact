import React, { Component } from 'react';
import PropTypes from 'prop-types';
class XiaojiejieItem  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.handleClick = this.handleClick.bind(this)
    }
    render() { 
        return ( 
            <li onClick={this.handleClick.bind(this)}>
                {this.props.avname}为你点单{this.props.content}
            </li>
        );
    }
    handleClick(){
        console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
}
XiaojiejieItem.propTypes={
    avname:PropTypes.string.isRequired,
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}
XiaojiejieItem.defaultProps = {
    avname:'松岛枫'
}
 
export default XiaojiejieItem;