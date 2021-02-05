import React                       /**/ from 'react'
import _                                from 'lodash'

export const useToggler = (initial = false) => {
  const [state, setState] = React.useState(initial)
  const toggler = React.useCallback(() => (setState((val) => (! val))))
  return [state, toggler, setState]
}

// usage:
//   const [val, updateVal, setVal] = useCounter(initial, { min = 0, max = 10, initFunc: () => (23) })
//
export const useCounter = (initial = 0, { min = -Infinity, max = Infinity, initFunc = (_.identity) } = {}) => {
  const counter = React.useCallback((ct = 0, { action = 'inc', val = 1 } = {}) => {
    let  count = ct
    switch (action) {
    case 'inc':   count += 1;                 break
    case 'dec':   count -= 1;                 break
    case 'add':   count += val;               break
    case 'set':   count  = val;               break
    case 'reset': count  = initFunc(initial); break
    default:
      throw new Error(`Unexpected action '${action}' in counter reducer`)
    }
    return _.clamp(count, min, max)
  })
  return React.useReducer(counter, initial, initFunc)
}

export default {
  useToggler,
  useCounter,
}
