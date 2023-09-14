import { Component } from "react"
import { Link } from 'react-router-dom';

class Cartel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clase: 'Ocultar',
            ver: 'Ver más',
            esFavorito: false
        }
    }

    validacion(){
        this.setState({
            clase: this.state.clase === 'Ocultar' ? 'Mostrar' : 'Ocultar',
            ver: this.state.clase === 'Ocultar' ? 'Ver menos' : 'Ver más',
          })
    }
    componentDidMount(){
        let storageFav = localStorage.getItem('Favoritos')
        let arrParseado = JSON.parse(storageFav)
        if(arrParseado !== null){
            let estaMiPersonaje = arrParseado.includes(this.props.id)
            if (estaMiPersonaje) {
                this.setState({
                    esFavorito: true
                })
            }
        }
    }

    agregarFavoritos(idPersonaje){
        let storageFav = localStorage.getItem('Favoritos')
        if (storageFav === null){
            let arrIds = [idPersonaje]
            let arrStringificado = JSON.stringify(arrIds)
            localStorage.setItem('Favoritos', arrStringificado)
        } else {
            let arrParseado = JSON.parse(storageFav)
            arrParseado.push(idPersonaje)
            let arrStringificado = JSON.stringify(arrParseado)
            localStorage.setItem('Favoritos', arrStringificado )
        }
        this.setState({
            esFavorito: true
        })
    }

    SacarFavoritos(idPersonaje){
        let storageFav = localStorage.getItem('Favoritos')
        let arrParseado = JSON.parse(storageFav)
        let favsFiltrados = arrParseado.filter((id)=> id !== idPersonaje)
        let arrStringificado = JSON.stringify(favsFiltrados)
        localStorage.setItem('Favoritos', arrStringificado)
        this.setState({
            esFavorito: false
        })
    }

    render() {
        return (
                <article className="fotos">
                    <img className="img_tarjeta" src={this.props.imagen} alt='imagen'/>
                        <p className="descripcion">{this.props.titulo}</p>
                        <p className={`descripcion ${this.state.clase}`}>{this.props.descripcion}</p>
                        <button onClick={() => this.validacion()}>{this.state.ver}</button>
                        <Link to={`/detalle/id/${this.props.id}`} >
                         Ir a detalle
                            </Link>
                            {
                        this.state.esFavorito ?
                         <button onClick={()=> this.SacarFavoritos(this.props.id)}> Sacar de favoritos</button> 
                        : 
                        <button onClick={()=> this.agregarFavoritos(this.props.id)}> Agregar a favoritos </button>}
                    
                </article>
        )
    }
}

export default Cartel