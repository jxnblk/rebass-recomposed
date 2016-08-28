
import React from 'react'
import { Flex } from 'reflexbox'
import {
  Heading,
  Input,
  Checkbox,
  Radio,
  Button,
  Space,
} from 'rebass'
import withForm from './withForm'

const SignUpForm = ({
  email,
  password,
  remember,
  animal,
  onChange,
  onSubmit
}) => (
  <form onSubmit={onSubmit}>
    <Heading>Form Example</Heading>
    <Input
      type='email'
      name='email'
      label='Email Address'
      value={email}
      onChange={onChange} />
    <Input
      type='password'
      name='password'
      label='Password'
      value={password}
      onChange={onChange} />
    <Checkbox
      name='remember'
      label='Remember me on this device'
      mb={2}
      checked={remember}
      onChange={onChange} />
    <Flex mb={3}>
      <Radio
        name='animal'
        label='Cats'
        value='cats'
        mr={2}
        checked={animal === 'cats'}
        onChange={onChange} />
      <Radio
        name='animal'
        label='Dogs'
        value='dogs'
        mr={2}
        checked={animal === 'cats'}
        checked={animal === 'dogs'}
        onChange={onChange} />
      <Radio
        name='animal'
        label='Goats'
        value='goats'
        checked={animal === 'goats'}
        onChange={onChange} />
    </Flex>
    <Button type='submit'>
      Sign Up
    </Button>
  </form>
)

export default withForm(SignUpForm)

