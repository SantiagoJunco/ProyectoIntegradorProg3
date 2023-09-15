import React, { Component } from 'react'
import './styles.css'

export default class PeliculaID extends Component {
    constructor(props) {
        super(props)
        this.state = {
            esFavorito: false
        }
    }
    componentDidMount() {
        let storageFav = localStorage.getItem('Favoritos')
        let arrParseado = JSON.parse(storageFav)
        if (arrParseado !== null) {
            let estaMiPersonaje = arrParseado.includes(this.props.Pelicula.id)
            if (estaMiPersonaje) {
                this.setState({
                    esFavorito: true
                })
            }
        }
    }

    agregarFavoritos(idPersonaje) {
        let storageFav = localStorage.getItem('Favoritos')
        if (storageFav === null) {
            let arrIds = [idPersonaje]
            let arrStringificado = JSON.stringify(arrIds)
            localStorage.setItem('Favoritos', arrStringificado)
        } else {
            let arrParseado = JSON.parse(storageFav)
            arrParseado.push(idPersonaje)
            let arrStringificado = JSON.stringify(arrParseado)
            localStorage.setItem('Favoritos', arrStringificado)
        }
        this.setState({
            esFavorito: true
        })
    }

    SacarFavoritos(idPersonaje) {
        let storageFav = localStorage.getItem('Favoritos')
        let arrParseado = JSON.parse(storageFav)
        let favsFiltrados = arrParseado.filter((id) => id !== idPersonaje)
        let arrStringificado = JSON.stringify(favsFiltrados)
        localStorage.setItem('Favoritos', arrStringificado)
        this.setState({
            esFavorito: false
        })
    }

    render() {
        let generos = this.props.Pelicula.genres
        console.log(generos);
        return (
            <article className="detalles" id="detalles1">
                <img className="img_detalle peliculaImg" src={'https://image.tmdb.org/t/p/w500' + this.props.Pelicula.poster_path} alt="imagen pelicula" />
                <h3 className="descripcion_detalle nombre">Título: {this.props.Pelicula.title}</h3>
                <p className="descripcion_detalle rating">Rating: {this.props.Pelicula.vote_average}</p>
                <p className="descripcion_detalle fecha">Fecha de estreno: {this.props.Pelicula.release_date}</p>
                <p className="descripcion_detalle duracion">Duración(minutos): {this.props.Pelicula.runtime}</p>
                <p className="descripcion_detalle sinopsis">Sinopsis: {this.props.Pelicula.overview}</p>
                <ul className="descripcion_detalle genero"> Géneros: {generos.map((genero) => <li> {genero.name}</li>)}</ul>
                {
                    this.state.esFavorito ?
                        <button onClick={() => this.SacarFavoritos(this.props.Pelicula.id)}> Sacar de favoritos</button>
                        :
                        <button onClick={() => this.agregarFavoritos(this.props.Pelicula.id)}> Agregar a favoritos </button>}
            </article>
        )
    }
}