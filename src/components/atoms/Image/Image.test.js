import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultImage } from './Image.stories'

const testID = "Image-" + Math.floor(Math.random()*90000) + 10000

describe("Image", () => {

    it("Can render Image", () => {
        render(<DefaultImage testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})