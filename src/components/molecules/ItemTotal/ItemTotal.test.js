import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultItemTotal } from './ItemTotal.stories'

const testID = "ItemTotal-" + Math.floor(Math.random()*90000) + 10000

describe("ItemTotal", () => {

    it("Can render ItemTotal", () => {
        render(<DefaultItemTotal testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})