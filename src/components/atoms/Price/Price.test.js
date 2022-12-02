import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultPrice } from './Price.stories'

const testID = "Price-" + Math.floor(Math.random()*90000) + 10000

describe("Price", () => {

    it("Can render Price", () => {
        render(<DefaultPrice testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})