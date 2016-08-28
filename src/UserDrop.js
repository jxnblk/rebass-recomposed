
import React from 'react'
import {
  Dropdown,
  DropdownMenu,
  Avatar,
  Space,
  NavItem
} from 'rebass'
import { Chevron } from 'reline'
import withToggle from './withToggle'

const UserDrop = ({
  open,
  toggle
}) => (
  <Dropdown>
    <NavItem onClick={toggle}>
      <Avatar
        size={32}
        mr={1}
        src='http://jxnblk.com/avatar/avatar-640.png' />
      Dropdown
      <Space />
      <Chevron size={12} down />
    </NavItem>
    <DropdownMenu
      onDismiss={toggle}
      open={open}>
      <NavItem href='#' children='NavItem' />
      <NavItem href='#' children='NavItem' />
      <NavItem href='#' children='NavItem' />
      <NavItem href='#' children='NavItem' />
    </DropdownMenu>
  </Dropdown>
)

export default withToggle(UserDrop)

