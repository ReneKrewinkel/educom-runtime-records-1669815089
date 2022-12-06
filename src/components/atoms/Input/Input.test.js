import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultInput } from './Input.stories'

const testID = "Input-" + Math.floor(Math.random()*90000) + 10000

describe("Input", () => {

    it("Can render Input", () => {
        render(<DefaultInput testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})