import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultHero } from './Hero.stories'

const testID = "Hero-" + Math.floor(Math.random()*90000) + 10000

describe("Hero", () => {

    it("Can render Hero", () => {
        render(<DefaultHero testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})