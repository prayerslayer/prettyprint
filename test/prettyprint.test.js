const {expect} = require('chai')
const pp = require('../')

describe("prettyprint", () => {
  it("prints strings", () => {
    expect(pp("foo")).to.equal("foo")
  })

  it("prints symbols", () => {
    expect(pp(Symbol("foo"))).to.equal("Symbol(foo)")
  })

  it("prints numbers", () => {
    expect(pp(3), "int").to.equal("3")
    expect(pp(3.14), "float").to.equal("3.14")
    expect(pp(Infinity), "infinity").to.equal("Infinity")
  })

  it("prints arrays", () => {
    console.log(pp([Symbol("foo"), [Symbol("bar")]]))
    expect(pp([Symbol("foo"), [Symbol("bar")]])).to.equal(`[
  "Symbol(foo)",
  [
    "Symbol(bar)"
  ]
]`)
  })

  it("prints objects", () => {
    console.log(pp({
      foo: {
        baz: "qux",
        bar: Symbol("bar"),
        foo: Infinity
      }
    }))
    expect(pp({
      foo: {
        baz: "qux",
        bar: Symbol("bar"),
        foo: Infinity
      }
    })).to.equal(`{
  "foo": {
    "baz": "qux",
    "bar": "Symbol(bar)",
    "foo": "Infinity"
  }
}`)
  })
})
