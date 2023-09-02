import { Component } from "react"

class Popular extends Component {

    render() {
        return (
                <article className="fotos">
                    <img className="img_tarjeta" src={this.props.imagen} alt='imagen'/>
                        <p className="descripcion">{this.props.titulo}</p>
                        <p className="descripcion">{this.props.descripcion}</p>
                </article>
        )
    }
}

export default Popular