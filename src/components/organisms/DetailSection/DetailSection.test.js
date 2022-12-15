import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultDetailSection } from './DetailSection.stories'

const testID = "DetailSection-" + Math.floor(Math.random()*90000) + 10000

describe("DetailSection", () => {

    it("Can render DetailSection", () => {
        render(<DefaultDetailSection testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})