
import React, { Component } from 'react'
import { Flex, Box } from 'reflexbox'
import {
  Base,
  Heading,
  Space,
  Toolbar,
  Text
} from 'rebass'
import BurgerMenu from './BurgerMenu'
import UserDrop from './UserDrop'
import Grid from './Grid'
import Meter from './Meter'
import Modal from './Modal'

class App extends Component {
  render() {
    return (
      <div>
        <Toolbar>
          <BurgerMenu />
          <Space auto />
          <UserDrop />
        </Toolbar>
        <Base mt={4} px={2} tag='header'>
            <Heading level={1}>Rebass Recomposed</Heading>
          <Text>
            A demo of using Rebass and Recompose
          </Text>
        </Base>
        <Base tag='main' py={3} px={2}>
          <Text
            mb={3}>
            The BurgerMenu, UserDrop, and Modal components all use the same `withToggle` higher-order component.
          </Text>
          <Grid>
            <Meter />
            <Modal />
          </Grid>
        </Base>
      </div>
    )
  }
}

export default App

