/**Dependencies */
import React from 'react'

/**Components */
import Spell from './Spell-item'

/**Assets */
import '../styles/spell-list.css'


const Spells = props => {
  const { spells, handleReset, handleSelect } = props
  return (
    <section className="Spell-list">
      <button className="Spell-list-button" onClick={ handleReset }>Reset</button>
      {
        spells.map(spell => {
          return (
            <Spell
              spell={ spell }
              key={ spell.id }
              handleSelect={ handleSelect }
            />
          )
        })
      }
    </section>
  )
}

export default Spells
