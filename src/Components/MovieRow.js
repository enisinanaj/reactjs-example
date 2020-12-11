import React, { Component } from 'react'

class MovieRow extends Component {

    render() {
        var movie = this.props.movie;

        return (<tr>
            <td>
                <img src={"https://image.tmdb.org/t/p/original" + movie.poster_path} style={{width: "100px"}} />
            </td>
            <td> {movie.original_title} </td>
            <td> {movie.overview} </td>
            <td> {movie.popularity} </td>
        </tr>)
    }
}

export default MovieRow;