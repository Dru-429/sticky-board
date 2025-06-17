"use client"
import React, { useContext } from 'react'
import NoteCard from './NoteCard'
import { NoteContext } from '@/context/NoteContext'
import Controls from './Controls'


const Notespage = () => {

    const { notes } = useContext(NoteContext)
    
    return (
        <div>
            {notes.map((note) => (
                <NoteCard note={note} key={note.$id} />
            ))}

            <Controls />
        </div>
    )
}

export default Notespage