import React, { Component } from 'react'
import Title from './Title'

class Section extends Component {

    render() {
        return (<div>
            <Title content={this.props.title} />

            <p>
                { this.props.children }
            </p>
        </div>)
    }

}

export default Section;