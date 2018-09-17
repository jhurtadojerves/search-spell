import React from 'react'
import ReactDOM from 'react-dom'
import Box from '../containers/Box'

const app = document.createElement('div')
const modal = document.createElement('div')
app.id = 'float-box'
modal.id = 'float-box-modal'
document.body.prepend(app)
document.body.prepend(modal)


//const app = document.getElementById('app')

ReactDOM.render(<Box />, app)
