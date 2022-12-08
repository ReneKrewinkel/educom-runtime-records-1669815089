import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultSearchBar } from './SearchBar.stories'

const testID = "SearchBar-" + Math.floor(Math.random()*90000) + 10000

describe("SearchBar", () => {

    it("Can render SearchBar", () => {
        render(<DefaultSearchBar testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})