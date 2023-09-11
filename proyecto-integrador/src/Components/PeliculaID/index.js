import React, { Component } from 'react'

export default class PeliculaID extends Component {

  render() {
    let generos = this.props.Pelicula.genres 
    console.log(generos);
    return (
        <article class="detalles" id="detalles1">
            <img class="img_detalle peliculaImg" src={'https://image.tmdb.org/t/p/w500' + this.props.Pelicula.poster_path} alt="imagen pelicula"/>
                <h3 class="descripcion_detalle nombre">Título: {this.props.Pelicula.title}</h3>
                <p class="descripcion_detalle rating">Rating: {this.props.Pelicula.vote_average}</p>
                <p class="descripcion_detalle fecha">Fecha de estreno: {this.props.Pelicula.release_date}</p>
                <p class="descripcion_detalle duracion">Duración(minutos): {this.props.Pelicula.runtime}</p>
                <p class="descripcion_detalle sinopsis">Sinopsis: {this.props.Pelicula.overview}</p>
                <p class="descripcion_detalle genero"> Géneros: <ul>{generos.map((genero) =><li> {genero.name}</li>)}</ul></p>
                <form class="descripcion" action="favorites.html" name="Favoritos" method="GET">
                    <button class="boton" type="submit">Añadir a Favoritos</button>
                </form>
        </article>
    )
  }
}