
import React from 'react'
import {
  Button,
  Heading,
  Text,
  Overlay,
  Panel,
  PanelHeader,
  Space,
} from 'rebass'
import { X } from 'reline'
import withToggle from './withToggle'

const Modal = ({
  open,
  toggle,
}) => (
  <div>
    <Heading>Modal</Heading>
    <Text mb={2}>
      Click the button to launch a modal overlay.
    </Text>
    <Button
      big
      onClick={toggle}
      children='Open Modal' />
    <Overlay
      open={open}
      onDismiss={toggle}>
      <Panel theme='primary'>
        <PanelHeader>
          Modal
          <Space auto />
          <X
            size={12}
            onClick={toggle} />
        </PanelHeader>
        Hello
      </Panel>
    </Overlay>
  </div>
)

export default withToggle(Modal)

