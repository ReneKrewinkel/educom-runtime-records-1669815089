import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultAlbum_artist } from './Album_artist.stories'

const testID = "Album_artist-" + Math.floor(Math.random()*90000) + 10000

describe("Album_artist", () => {

    it("Can render Album_artist", () => {
        render(<DefaultAlbum_artist testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})