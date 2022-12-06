import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultHamburgerMenu } from './HamburgerMenu.stories'

const testID = "HamburgerMenu-" + Math.floor(Math.random()*90000) + 10000

describe("HamburgerMenu", () => {

    it("Can render HamburgerMenu", () => {
        render(<DefaultHamburgerMenu testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})