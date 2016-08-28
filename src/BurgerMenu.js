
import React from 'react'
import {
  withState
} from 'recompose'
import {
  Heading,
  Fixed,
  Drawer
} from 'rebass'
import { Burger, X } from 'reline'
import withToggle from './withToggle'

const BurgerMenu = ({
  open,
  toggle,
  setOpen
}) => (
  <div>
    <Burger onClick={toggle} />
    <Drawer
      open={open}
      onClick={toggle}
      onDismiss={toggle}>
      <X />
      <Heading>BurgerMenu</Heading>
    </Drawer>
  </div>
)

export default withToggle(BurgerMenu)

