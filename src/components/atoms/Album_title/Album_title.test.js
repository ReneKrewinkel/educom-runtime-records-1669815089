import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultAlbum_title } from './Album_title.stories'

const testID = "Album_title-" + Math.floor(Math.random()*90000) + 10000

describe("Album_title", () => {

    it("Can render Album_title", () => {
        render(<DefaultAlbum_title testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})