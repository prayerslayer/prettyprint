const {expect} = require('chai')
const pp = require('../')

describe("prettyprint", () => {
  it("prints strings", () => {
    expect(pp("foo")).to.equal("\"foo\"")
  })

  it("prints symbols", () => {
    expect(pp(Symbol("foo"))).to.equal("Symbol(foo)")
  })

  it("prints booleans", () => {
    expect(pp(true)).to.equal("true")
    expect(pp(false)).to.equal("false")
  })

  it("prints nil", () => {
    expect(pp(null)).to.equal("null")
    expect(pp(undefined)).to.equal("undefined")
  })

  it("prints numbers", () => {
    expect(pp(-23), "negative int").to.equal("-23")
    expect(pp(3), "int").to.equal("3")
    expect(pp(3.14), "float").to.equal("3.14")
    expect(pp(-1 / 2), "negative float").to.equal("-0.5")
    expect(pp(NaN), "nan").to.equal("NaN")
    expect(pp(Infinity), "infinity").to.equal("Infinity")
    expect(pp(-Infinity), "negative infinity").to.equal("-Infinity")
  })

  it("prints arrays", () => {

    expect(pp([Symbol("foo"), [Symbol("bar")]])).to.equal(`[
  Symbol(foo),
  [
    Symbol(bar)
  ]
]`)
    expect(pp([1, [2, [3, [4], 5], 6]])).to.equal(`[
  1,
  [
    2,
    [
      3,
      [
        4
      ],
      5
    ],
    6
  ]
]`)
  })

  it("prints objects", () => {
    expect(pp({
      foo: {
        bar: {
          baz: {
            qux: 42
          }
        }
      }
    })).to.equal(`{
  "foo": {
    "bar": {
      "baz": {
        "qux": 42
      }
    }
  }
}`)
    expect(pp({
      foo: {
        baz: "qux",
        bar: Symbol("bar"),
        foo: Infinity
      }
    })).to.equal(`{
  "foo": {
    "baz": "qux",
    "bar": Symbol(bar),
    "foo": Infinity
  }
}`)
  })

  it("prints the good stuff", () => {
    expect(pp({
      foo: [{
        bar: [1]
      }]
    })).to.equal(`{
  "foo": [
    {
      "bar": [
        1
      ]
    }
  ]
}`)
  })
})
