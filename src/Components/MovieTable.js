import React, { Component } from 'react';
import MovieRow from './MovieRow';

class MovieTable extends Component {
    render() {
        return (<table style={{borderWidth: "2px", borderColor: '#f0f0f0', marginTop: '20px'}}>
        <thead>
          <td>Poster</td>
          <td>Title</td>
          <td>Overview</td>
          <td>Popularity</td>
        </thead>
        <tbody>
          {
            this.props.movies.map(movie => {
              return (<MovieRow movie={movie}></MovieRow>)
            })
          }
        </tbody>
      </table>)
    }
}

export default MovieTable;