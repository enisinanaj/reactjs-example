import React, {Component} from 'react';

class Actors extends Component {

    constructor(props) {
        super(props);

        this.state = {
            actors: []
        }
    }

    async componentDidMount() {
        var responseFromServer = await fetch("https://api.themoviedb.org/3/actors");
        var actorsAsJson = await responseFromServer.json();

        this.setState({
            actors: actorsAsJson.slice(0, this.props.size)
        });
    }

    render() {

        if (this.state.actors.length == 0) {
            return <span>loading...</span>
        }

        return (
            <ul>
                {this.state.actors.map(
                    actor => <li>{actor.name}</li>
                )}
            </ul>
        )
    }
}

export default Actors;