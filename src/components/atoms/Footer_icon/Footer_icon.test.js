import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultFooter_icon } from './Footer_icon.stories'

const testID = "Footer_icon-" + Math.floor(Math.random()*90000) + 10000

describe("Footer_icon", () => {

    it("Can render Footer_icon", () => {
        render(<DefaultFooter_icon testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})