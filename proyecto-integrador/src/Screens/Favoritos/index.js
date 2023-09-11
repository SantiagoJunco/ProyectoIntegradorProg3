import React, { Component } from 'react'
import FavoritosContainer from '../../Components/FavoritosContainer'
class Favoritos extends Component {

  constructor(props){
    super(props)
    this.state = {
      favoritos: []
    }
  }

  componentDidMount(){
    let storageFavs = localStorage.getItem('Favoritos')

    if(storageFavs !== null){
      let favsParseados = JSON.parse(storageFavs)
      Promise.all(
        favsParseados.map( id => 
            fetch(`https://api.themoviedb.org/3/movie/${id}?include_adult=false&language=en-US&page=1`)
            .then( resp => resp.json())
          )
      )
      .then( data => this.setState({favoritos: data}, ()=> console.log('esto son los favoritos',this.state)))
      .catch(err => console.log(err))
    }
  }

  actualizarState(id){
    let stateActualizado = this.state.favoritos.filter(elm => elm.id !== id)
    this.setState({
      favoritos: stateActualizado
    })
  }

  render() {
    return (
      <div>
        <h1 className='titulos'>PELICULAS FAVORITAS</h1>
        <FavoritosContainer actualizarState ={(id)=> this.actualizarState(id)} peliculas={this.state.favoritos} />
      </div>
    )
  }
}

export default Favoritos
