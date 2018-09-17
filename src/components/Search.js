/**Dependencies */
import React from 'react'

/**Assets */
import '../styles/search.css'

const Search = props => (
  <form className="Search-form"
    onSubmit={ props.handleSubmit }
    autoComplete="off"
  >
    <input type="text" name="search" id="search" className="Search-form-input" onChange={ (event) => { props.handleChange(event) } } />
  </form>
)

export default Search
