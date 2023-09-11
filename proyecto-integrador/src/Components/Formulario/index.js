import React, { Component } from 'react'
import { Link } from 'react-router-dom'; 

export default class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {valor: ''};
      }
    evitarSubmit(evento){
        evento.preventDefault()
        
      }

    controlarCambios(evento) {
        this.setState({valor: evento.target.value}); 
      }

    render() {
        return (
            <form className="formulario" onSubmit={(evento)=> this.evitarSubmit(evento)}>
                <input
                    className="busqueda"
                    placeholder="Búsqueda"
                    name="busqueda"
                    type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} 
                />
                <Link to={`/busqueda/${this.state.valor}`}>
                <button type="submit">Buscar</button>
                </Link>
            </form>
        )
    }
}