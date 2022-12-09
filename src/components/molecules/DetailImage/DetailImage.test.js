import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultDetailImage } from './DetailImage.stories'

const testID = "DetailImage-" + Math.floor(Math.random()*90000) + 10000

describe("DetailImage", () => {

    it("Can render DetailImage", () => {
        render(<DefaultDetailImage testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})