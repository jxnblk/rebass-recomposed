
import {
  compose,
  mapProps,
  withState
} from 'recompose'

const withCount = withState('count', 'setCount', 0)
const withCounters = mapProps(({
  setCount,
  ...rest
}) => ({
  decrement: e => setCount(n => n - 1),
  increment: e => setCount(n => n + 1),
  reset: e => setCount(0),
  setCount,
  ...rest
}))

export default compose(withCount, withCounters)

