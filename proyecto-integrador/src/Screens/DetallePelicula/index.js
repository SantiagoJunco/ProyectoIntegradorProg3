import React, { Component } from 'react'
import PeliculaID from "../../Components/PeliculaID"
import { options } from '../../Utils/Constants'

export default class DetallePelicula extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataPelicula: []
        }
    }

    componentDidMount() {
      this.traerDetallePelicula()
    }
    traerDetallePelicula() { 
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?include_adult=false&language=en-US&page=1`, options)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.setState({
                   dataPelicula: data
                })
            })
            .catch(err => console.log(err))
    }

  render() {
    if (this.state.dataPelicula.length !== 0) {
        return (
            <PeliculaID Pelicula={this.state.dataPelicula} />
           )
    }
  }
}
