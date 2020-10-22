import React from 'react';
import Card from 'react-bootstrap/Card';

export class MovieItem extends React.Component {


    render() {
        return (
            <div>
                {/* <h3>{this.props.mymovie.Title}</h3>
                <p>{this.props.mymovie.Year}</p>
                <img src={this.props.mymovie.Poster} width="200" height="200"/> */}

                {/* <h3>Hello from Movie Item</h3>
                {console.log(this.props.mymovies)}
                <MovieItem></MovieItem> */}

                <Card>
                    <Card.Header>{this.props.mymovie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.mymovie.Poster} width="200" height="200" alt="Poster"></img>
                            <footer className="blockquote-footer">
                                {this.props.mymovie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}