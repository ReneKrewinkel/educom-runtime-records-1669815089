import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultShoppingCart } from './ShoppingCart.stories'

const testID = "ShoppingCart-" + Math.floor(Math.random()*90000) + 10000

describe("ShoppingCart", () => {

    it("Can render ShoppingCart", () => {
        render(<DefaultShoppingCart testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})