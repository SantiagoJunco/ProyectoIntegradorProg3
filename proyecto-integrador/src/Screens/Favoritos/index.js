import React, { Component } from 'react'
import FavoritosContainer from '../../Components/FavoritosContainer'
import { options } from '../../Utils/Constants'
import './styles.css'

class Favoritos extends Component {

  constructor(props) {
    super(props)
    this.state = {
      favoritos: [],
      hayFavoritos: false
    }
  }

  componentDidMount() {
    let storageFavs = localStorage.getItem('Favoritos')

    if (storageFavs !== null) {
      let favsParseados = JSON.parse(storageFavs)
      Promise.all(
        favsParseados.map(id =>
          fetch(`https://api.themoviedb.org/3/movie/${id}?include_adult=false&language=en-US&page=1`, options)
            .then(resp => resp.json())
        )
      )
        .then(data =>
          this.setState({
            favoritos: data,
            hayFavoritos: true
          }, () => console.log('esto son los favoritos', this.state)))
        .catch(err => console.log(err))
    }
  }

  actualizarState(id) {
    let stateActualizado = this.state.favoritos.filter(elm => elm.id !== id)
    this.setState({
      favoritos: stateActualizado
    })
  }

  render() {
    return (
      <>
        {
          this.state.hayFavoritos
            ? (
              this.state.favoritos.length === 0 ?
                <main>
                  <h1 className='titulos'>No tienes favoritos </h1>
                  <section className='listado_detalle_generos-Favoritos-home-search'></section>
                </main>
                :
                <div>
                  <h1 className='titulos'>PELICULAS FAVORITAS</h1>
                  <FavoritosContainer actualizarState={(id) => this.actualizarState(id)} peliculas={this.state.favoritos} />
                </div>
            )
            :
            <h1 className='titulos'>Cargando...</h1>
        }
      </>)
  }
}
export default Favoritos
