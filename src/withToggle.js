
import {
  compose,
  mapProps,
  withState
} from 'recompose'

const withOpen = withState('open', 'setOpen', false)
const withToggle = mapProps(p => ({
  ...p,
  toggle: e => p.setOpen(o => !o)
}))

export default compose(withOpen, withToggle)

