
import React from 'react'
import { Flex, Reflex } from 'reflexbox'
import {
  Heading,
  Donut,
  Button,
  Slider,
  Space
} from 'rebass'
import withCounter from './withCounter'

const FlexButton = Reflex(Button)

const Meter = ({
  count,
  setCount,
  increment,
  decrement
}) => (
  <div>
    <Heading>Meter withCounter</Heading>
    <Flex mb={2} justify='center'>
      <Donut
        size={256}
        strokeWidth={32}
        value={(count % 100) / 100}
      />
    </Flex>
    <Flex>
      <FlexButton
        auto
        rounded='left'
        backgroundColor='secondary'
        onClick={decrement}
        children='-' />
      <FlexButton
        auto
        rounded='right'
        onClick={increment}
        children='+' />
    </Flex>
    <Slider
      mt={2}
      max={100}
      name='count'
      label='Count'
      hideLabel
      color='primary'
      onChange={({ target: { value } }) => setCount(n => parseInt(value))}
      value={count % 100}
    />
  </div>
)

export default withCounter(Meter)

