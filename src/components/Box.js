/** Dependecies */
import React from 'react'

/**Assets */
import '../styles/box.css'

const Box = props => (
  <div className="Box">
    <h3 className="Box-title">Buscador de Hechizos</h3>
    { props.children }
  </div>
)

export default Box
