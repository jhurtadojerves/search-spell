/**Dependencies */
import React, { Component } from 'react'

/**Components */
import Layout from '../components/Box'
import Search from '../containers/Search'

class Box extends Component {
  render() {
    return (
      <Layout>
        <Search />
      </Layout>
    )
  }
}

export default Box
