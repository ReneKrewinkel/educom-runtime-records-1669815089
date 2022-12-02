import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultShoppingcart } from './Shoppingcart.stories'

const testID = "Shoppingcart-" + Math.floor(Math.random()*90000) + 10000

describe("Shoppingcart", () => {

    it("Can render Shoppingcart", () => {
        render(<DefaultShoppingcart testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})