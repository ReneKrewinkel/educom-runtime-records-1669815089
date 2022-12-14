import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultNavigation } from './Navigation.stories'

const testID = "Navigation-" + Math.floor(Math.random()*90000) + 10000

describe("Navigation", () => {

    it("Can render Navigation", () => {
        render(<DefaultNavigation testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})