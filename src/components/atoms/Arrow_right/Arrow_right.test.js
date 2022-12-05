import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultArrow_right } from './Arrow_right.stories'

const testID = "Arrow_right-" + Math.floor(Math.random()*90000) + 10000

describe("Arrow_right", () => {

    it("Can render Arrow_right", () => {
        render(<DefaultArrow_right testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})