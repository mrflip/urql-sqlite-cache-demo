import React from "react"
import renderer from "react-test-renderer"

import MainContainer from "../../src/navigation/MainContainer"

describe("<MainContainer />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<MainContainer />).toJSON()
    expect(tree.children.length).toBe(1)
  })
})
