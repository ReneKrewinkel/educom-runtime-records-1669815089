import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultHeroTextContent } from './HeroTextContent.stories'

const testID = "HeroTextContent-" + Math.floor(Math.random()*90000) + 10000

describe("HeroTextContent", () => {

    it("Can render HeroTextContent", () => {
        render(<DefaultHeroTextContent testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})