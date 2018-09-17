/**Dependencies */
import React from 'react'

/**Components */
import Range from './Spell-ranges'

/**Assets */
import '../styles/spell.css'

const Spell = props => {
  const { description, method, name, object, range, type } = props
  return (
    <div className="Spell">
      <h3 className="Spell-title">{ name } <span>{ type }</span> <span>{ method }</span> <span>{ object }</span></h3>
      <p className="Spell-content">{ description }</p>
      <section className="Spell-ranges">
        <h3 className="Spell-ranges-title">Rangos: </h3>
        {
          range.map(r => <Range { ...r } key={ r.name } />)
        }
      </section>
    </div>
  )
}

export default Spell
