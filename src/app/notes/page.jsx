"use client"

import Controls from '@/components/notes/Controls'
import NoteCard from '@/components/notes/NoteCard'
import { NoteContext } from '@/context/NoteContext'
import React, { useContext } from 'react'

const Notespage = () => {

    const { notes } = useContext(NoteContext)
    
    return (
        <div>
            console.log( notes )
        {
            notes.map( (note) => (
                <NoteCard note={note} key={note.$id} />
            ))
        }
            {/* {notes.map((note) => (
                <NoteCard note={note} key={note.$id} />
            ))} */}

            <Controls />
        </div>
    )
}

export default Notespage