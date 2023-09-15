import React, { Component } from 'react'
import PeliculaID from "../../Components/PeliculaID"
import { options } from '../../Utils/Constants'
import "./styles.css"

export default class DetallePelicula extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataPelicula: null
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
        return this.state.dataPelicula !== null ? (
            <PeliculaID Pelicula={this.state.dataPelicula} />
        )
            :
            (
                <section className="listado_detalle_generos-Favoritos-home-search" id="section">
                    <h2 className='titulos'>Cargando...</h2>
                </section>
            )
    }
}
