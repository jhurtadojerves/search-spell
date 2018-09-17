/**Dependencies */
import React from 'react'

/**Assets */
import '../styles/spell-item.css'

const Spell = props => {
  const { spell, handleSelect } = props
  return (
    <article className="Spell-item">
      <h4 className="Spell-item-name">
        <a
          href={ spell.url }
          target="_blank"
          onClick={ event => { handleSelect(event, spell) } }
        >
          { spell.name }
        </a>
      </h4>
    </article>
  )
}

export default Spell
