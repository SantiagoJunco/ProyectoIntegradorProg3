import React, { Component } from 'react'
import { options } from '../../Utils/Constants';
import ResultsContainer from '../../Components/ResultsContainer';


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
                console.log('log del fetch',data)
                this.setState({
                    busqueda: data.results
                }
                )
            })
            .catch(err => console.log(err))
    }

    componentDidUpdate(){
        this.resultadosBusqueda()
    }


    render() {
        return (
            <main>
                <h2 className="titulos">Resultados de búsqueda </h2>
                <ResultsContainer busqueda={this.state.busqueda}/>
            </main>
        )
    }
}

export default SearchResults