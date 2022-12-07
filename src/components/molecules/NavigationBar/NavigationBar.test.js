import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultNavigationBar } from './NavigationBar.stories'

const testID = "NavigationBar-" + Math.floor(Math.random()*90000) + 10000

describe("NavigationBar", () => {

    it("Can render NavigationBar", () => {
        render(<DefaultNavigationBar testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})