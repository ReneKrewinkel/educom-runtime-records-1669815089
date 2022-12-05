import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultCheckout_count } from './Checkout_count.stories'

const testID = "Checkout_count-" + Math.floor(Math.random()*90000) + 10000

describe("Checkout_count", () => {

    it("Can render Checkout_count", () => {
        render(<DefaultCheckout_count testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})