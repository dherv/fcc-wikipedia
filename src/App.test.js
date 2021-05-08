import React from 'react'
import {render, screen} from "@testing-library/react"
import userEvent from '@testing-library/user-event'

import App from './App'

describe("App component", () => {
  test("should handle search input", async () => {
    render(<App/>)
    userEvent.clear(screen.getByLabelText("search"))
    userEvent.type(screen.getByLabelText("search"), "meaning")
    expect(screen.getByDisplayValue("meaning")).toBeDefined()
    expect(await screen.findByText("Meaning")).toBeDefined()
  })
  test("should search the query text", async () => {
    render(<App/>)
    userEvent.clear(screen.getByLabelText("search"))
    userEvent.type(screen.getByLabelText("search"), "movie")
    expect(await screen.findByText("Movie theater")).toBeDefined()
  })
  test("should handle error and display the previous list searched", async () => {
    render(<App/>)
    userEvent.clear(screen.getByLabelText("search"))
    expect(screen.queryByText("Meaning")).toBeDefined()
  })
})