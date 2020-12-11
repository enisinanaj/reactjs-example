import React, {Component} from 'react'
import moment from 'moment'

class Title extends Component {

    render() {
        var creationDate = new Date().getTime() - (60 * 60 * 1000 * 30 * 24)

        return (<h1>
            <strong>{ this.props.content }</strong>
        </h1>);
    }

}

export default Title;

// <div style="font-style: italic">  </div>