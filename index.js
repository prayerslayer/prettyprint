function ppSymbol(value) {
  return value.toString()
}

function ppString(value) {
  return value
}

function ppNumber(value) {
  return value.toString()
}

function ppArray(value, opts) {
  return value.map(v => prettyPrint(v, opts))
}

function ppObject(value, opts) {
  return Object.keys(value).reduce((agg, key) => {
    agg[key] = prettyPrint(value[key], opts)
    return agg
  }, {})
}

function prettyPrint(value, opts = {}) {
  const {indent = true, indentation = 2, shallow = false} = opts
  switch (typeof value) {
    case "string":
      return ppString(value, opts)
    case "number":
      return ppNumber(value, opts)
    case "symbol":
      return ppSymbol(value, opts)
    case "object":
      const complexOpts = Object.assign({}, opts, {
        shallow: true
      })
      const parsed = Array.isArray(value) ? ppArray(value, complexOpts) : ppObject(value, complexOpts)
      if (shallow) {
        return parsed
      }
      return JSON.stringify(parsed, null, indentation)
  }
}

module.exports = prettyPrint
