import { Component } from "react"
import { Link } from 'react-router-dom';

class Resultado extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clase: 'Ocultar',
            ver: 'Ver más'
        }
    }

    validacion(){
        if (this.state.clase === 'Ocultar') {
            this.setState({
                clase: "Mostrar",
                ver: "Ver menos"
            })
        } else {
            this.setState({
                clase: "Ocultar",
                ver: "Ver más"
            })
        }
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
                </article>
        )
    }
}

export default Resultado