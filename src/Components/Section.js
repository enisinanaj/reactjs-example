import React, { Component } from 'react'
import Title from './Title'

class Section extends Component {

    render() {
        return (<div style={this.props.style}>
            <Title content={this.props.title} />

            <p style={{}}>
                { this.props.children }
            </p>
        </div>)
    }

}

export default Section;