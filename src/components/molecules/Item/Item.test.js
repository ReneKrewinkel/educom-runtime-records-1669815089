import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultItem } from './Item.stories'

const testID = "Item-" + Math.floor(Math.random()*90000) + 10000

describe("Item", () => {

    it("Can render Item", () => {
        render(<DefaultItem testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})