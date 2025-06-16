"use client"

import Notespage from '@/components/notes/NotePage'
import { Boxes } from '@/components/ui/background-boxes'
import NotesProvider from '@/context/NoteContext'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen' id='app'>
      <NotesProvider>
        <Boxes />
        <Notespage />
      </NotesProvider>
    </div>
  )
}

export default page