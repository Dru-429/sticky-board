"use client"

import { db } from "@/appwrite/database";
import { NoteContext } from "@/context/NoteContext";
import { Terminal } from "lucide-react";
import React, { useContext } from "react";
import { toast } from "sonner";
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'


const ColorPallet = ({ color }) => {
    const { selectedNote, notes, setNotes } = useContext(NoteContext)

    const changeColor = () => {
        // console.log("Selected Note:", selectedNote);
        // console.log("CHange color clicked:", color);
        try {
            const currentNoteIndex = notes.findIndex(
                (note) => note.$id === selectedNote?.$id
            );

            if (currentNoteIndex === -1) {
                <Alert>
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Oh No!</AlertTitle>
                    <AlertDescription>
                        You must select a note before changing colors
                    </AlertDescription>
                </Alert>

                toast(`>_< Uh-oh! `, {
                    description: "Select a note before changing colors"
                })
                return;
            }

            const updatedNote = {
                ...notes[currentNoteIndex],
                colors: JSON.stringify(color),
            };

            const newNotes = [...notes];
            newNotes[currentNoteIndex] = updatedNote;
            setNotes(newNotes);

            // console.log("Updated Notes:", newNotes);

            // Optional: update in database if needed
            db.notes.update(selectedNote.$id, {
                colors: JSON.stringify(color),
            });

        } catch (error) {
            console.log(error);
            <Alert>
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    An error occurred while changing the color.
                </AlertDescription>
            </Alert>

        }
    };

    return (
        <div
            className="color"
            onClick={changeColor}
            style={{ backgroundColor: color.colorHeader, cursor: 'pointer' }}
        ></div>
    );
}

export default ColorPallet