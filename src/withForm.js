
import {
  compose,
  withState,
  mapProps
} from 'recompose'

const withForm = withState('form', 'setForm', {})
const withHandlers = mapProps(({
  onSubmit,
  form,
  setForm,
  ...rest
}) => ({
  onChange: e => {
    const { type, name, value, checked } = e.target
    const val =
      /number|range/.test(type)
      ? parseFloat(value)
      : /checkbox/.test(type)
      ? checked
      : /radio/.test(type) // is this needed?
      ? value
      : value
    setForm({
      ...form,
      [name]: val
    })
  },
  onSubmit: e => {
    e.preventDefault()
    onSubmit(form)
  },
  setForm,
  ...rest,
  ...form
}))

export default compose(withForm, withHandlers)

