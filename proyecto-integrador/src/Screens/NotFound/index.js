import React from 'react'
import './styles.css'

export default function NotFound() {
    return (
        <article className="detalles" id="detalles1">
            <img className='img_error' src='https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg?w=2000' alt="imagen error" />
            <h2 className="descripcion_detalle">ERROR 404</h2>
            <h2 className="descripcion_detalle">Has ingresado una url inexistente :(</h2>
        </article>
    )
}