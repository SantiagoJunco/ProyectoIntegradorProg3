import React, { Component } from 'react'
import { options } from '../../Utils/Constants';
import ResultsContainer from '../../Components/ResultsContainer';
import './styles.css'


class SearchResults extends Component {
    constructor(props) {
        super(props)
        this.state = {
            busqueda: []
        }
    }

    componentDidMount() {
        console.log(this.props);
        this.resultadosBusqueda()
    }

    resultadosBusqueda() {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.busqueda}&include_adult=false&language=en-US&page=1`, options)
            .then(resp => resp.json())
            .then(data => {
                console.log('log del fetch', data)
                this.setState({
                    busqueda: data.results
                }
                )
            })
            .catch(err => console.log(err))
    }

    componentDidUpdate() {
        this.resultadosBusqueda()
    }


    render() {
        return ( 
            this.state.busqueda.length !== 0 ? (
            <main>
              <h2 className="titulos">Resultados de búsqueda</h2>
              <ResultsContainer busqueda={this.state.busqueda} />
            </main>
          ) : (
            <main>
              <h2 className="titulos">No hay resultados para tu búsqueda</h2>
              <section className="listado_detalle_generos-Favoritos-home-search"></section>
            </main>
          )
          )
}}
export default SearchResults