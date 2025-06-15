import { useContext, useRef } from "react";
import Plus from "../icons/Plus";
import colors from "../../assets/colors.json";
import { db } from "@/appwrite/database";
import { NoteContext } from "@/context/NoteContext";


const AddButton = () => {

    const startingPos = useRef(10)
    const { setNotes } = useContext(NoteContext)

    const addNote = async () => {

        const payload = {
            position: JSON.stringify({
                x: startingPos.current,
                y: startingPos.current,   
            }),
            colors: JSON.stringify( colors[0] )
        }

        startingPos.current += 15

        const response = await db.notes.create(payload)
        setNotes( (prev) => [response, ...prev])
    }

    return (
        <div 
            id="add-btn" 
            onClick={addNote}
        >
            <Plus />
        </div>
    );
};

export default AddButton