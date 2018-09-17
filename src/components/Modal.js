/**Dependencies */
import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

/**Components */
import Container from '../containers/Modal'

/**Assets */
import '../styles/modal.css'

const Modal = props => {
  const { handleClosed } = props
  return (
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={ true }
      transitionAppearTimeout={ 500 }
      transitionEnter={ false }
      transitionLeaveTimeout={ 300 }
    >
      <Container>
        <div className="Modal">
          <div className="Modal-content">
            <span className="Modal-close">
              <a
                href=""
                onClick={ handleClosed }
              >
                &times;
          </a>
            </span>
            { props.children }
          </div>
        </div>
      </Container>
    </ReactCSSTransitionGroup>
  )
}

export default Modal
