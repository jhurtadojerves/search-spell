/**Dependencies */
import React, { Component, Fragment } from 'react'
import ExpiredStorage from 'expired-storage'

/**Components */
import SearchLayout from '../components/Search'
import Spells from '../components/Spell-list'
import Modal from '../components/Modal'
import Spell from '../components/Spell'

/**Assets */

class Search extends Component {

  state = {
    spells: [],
    selectedSpells: [],
    showList: false,
    spell: {},
    showSpell: false
  }

  handleSubmit = event => {
    event.preventDefault()
    let searchData = new FormData(event.target)
    let searchTerm = searchData.get('search').toString().toLowerCase()
    let selectedSpells = this.state.spells.filter(spell => spell.name.toLowerCase().includes(searchTerm))
    this.setState({
      selectedSpells,
      showList: true
    })
    event.target.parentNode.style = "max-height:500px;"
  }

  handleChange = event => {
    let searchTerm = event.target.value.toString().toLowerCase()
    let selectedSpells = this.state.spells.filter(spell => spell.name.toLowerCase().includes(searchTerm))
    this.setState({
      selectedSpells,
      showList: true
    })
    event.target.form.parentNode.style = "max-height:500px;"
  }

  handleReset = event => {
    event.target.parentNode.parentNode.style = "max-height:80px;"
    const form = event.target.parentNode.previousElementSibling
    setTimeout(() => {
      this.setState({
        showList: false,
        showSpell: false,
        selectedSpells: []
      })
      form.reset()
    }, 700)
  }

  handleClosed = event => {
    event.preventDefault()
    this.setState({
      spell: {},
      showSpell: false
    })
  }

  handleSelect = (event, spell) => {
    event.preventDefault()
    this.setState({
      spell,
      showSpell: true,
    })
  }

  async componentDidMount() {
    const expiredStorage = new ExpiredStorage()
    let localdata = expiredStorage.getItem('spells')
    if (!localdata)
    {
      let response = await fetch('http://hechizos.herokuapp.com/api/spells/all/')
      let data = await response.json()
      expiredStorage.setItem('spells', JSON.stringify(data), 2592000)
    }
    this.setState({
      spells: JSON.parse(expiredStorage.getItem('spells'))
    })
    expiredStorage.clearExpired()
  }
  render() {
    const { state: {
      selectedSpells,
      showList,
      spell,
      showSpell
    }, handleSubmit, handleReset, handleSelect, handleClosed, handleChange } = this

    return (
      <Fragment>
        <SearchLayout
          handleSubmit={ handleSubmit }
          handleChange={ handleChange }
        />
        {
          showList &&
          <Spells
            spells={ selectedSpells }
            handleReset={ handleReset }
            handleSelect={ handleSelect }
          />
        }
        {
          showSpell &&
          <Modal
            handleClosed={ handleClosed }
          >
            <Spell
              { ...spell }
            />
          </Modal>
        }
      </Fragment>
    )
  }
}

export default Search
