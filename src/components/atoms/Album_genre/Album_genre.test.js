import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
///
import { DefaultAlbum_genre } from './Album_genre.stories'

const testID = "Album_genre-" + Math.floor(Math.random()*90000) + 10000

describe("Album_genre", () => {

    it("Can render Album_genre", () => {
        render(<DefaultAlbum_genre testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})