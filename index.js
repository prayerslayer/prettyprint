function repeat(string, n) {
  if (n <= 0) {
    return ""
  }
  let result = ""
  for (let i = 0; i < n; i++) {
    result += string
  }
  return result
}

function getOpts(opts) {
  opts = opts || {}
  return {
    level: opts.level || 0,
    indentation: opts.indentation || 2
  }
}

function pad(string, numWhitespace) {
  return repeat(" ", numWhitespace || 0) + string
}

function prettyString(value) {
  return `"${value}"`
}

function prettySymbol(value) {
  return value.toString()
}

function prettyNumber(value) {
  return value.toString()
}

function prettyBoolean(value) {
  return value.toString()
}

function prettyNull(value) {
  return value === null ?
    "null" :
    "undefined"
}

function prettyArray(value, opts) {
  opts = getOpts(opts)
  const level = opts.level
  const indentation = opts.indentation
  let result = "[\n"
  for (let i = 0; i < value.length; i++) {
    result += pad(prettyPrint(value[i], {
        level,
        indentation
      }), level * indentation) + ",\n"
  }
  result = result.substring(0, result.length - 2)
  result += '\n' + pad("]", (level - 1) * indentation)
  return result
}

function prettyObject(value, opts) {
  opts = getOpts(opts)
  const level = opts.level
  const indentation = opts.indentation
  let result = "{\n"
  for (key of Object.keys(value)) {
    result += pad(prettyPrint(key), level * indentation)
    result += ": "
    result += prettyPrint(value[key], {
      level,
      indentation
    })
    result += ",\n"
  }
  result = result.substring(0, result.length - 2)
  result += '\n' + pad("}", (level - 1) * indentation)
  return result
}

function prettyPrint(value, opts) {
  const {level, indentation, result} = getOpts(opts)
  switch (typeof value) {
    case "string":
      return prettyString(value)
    case "undefined":
      return prettyNull(value)
    case "symbol":
      return prettySymbol(value)
    case "boolean":
      return prettyBoolean(value)
    case "number":
      return prettyNumber(value)
    case "object":
      const nextOpts = {
        level: level + 1,
        indentation
      }
      return Array.isArray(value) ?
        prettyArray(value, nextOpts) :
        value != null ?
          prettyObject(value, nextOpts) :
          prettyNull(value)
  }
}

module.exports = prettyPrint
