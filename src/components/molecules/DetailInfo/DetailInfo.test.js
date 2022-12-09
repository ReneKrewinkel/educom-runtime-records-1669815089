import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultDetailInfo } from './DetailInfo.stories'

const testID = "DetailInfo-" + Math.floor(Math.random()*90000) + 10000

describe("DetailInfo", () => {

    it("Can render DetailInfo", () => {
        render(<DefaultDetailInfo testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})