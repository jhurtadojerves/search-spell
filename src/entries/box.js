import React from 'react'
import ReactDOM from 'react-dom'
import Box from '../containers/Box'

const app = document.createElement('div')
app.id = 'float-blox'
document.body.prepend(app)

//const app = document.getElementById('app')

ReactDOM.render(<Box />, app)
