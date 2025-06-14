import { createContext } from "react";
import { useState, useEffect } from "react";
import { db } from "../appwrite/databases";
import Spinner from "@/app/components/icons/Spinner";
 
export const NoteContext = createContext();
 
const NotesProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [notes, setNotes] = useState();
    const [selectedNote, setSelectedNote] = useState(0);
 
    useEffect(() => {
        init();
    }, []);
 
    const init = async () => {
        const response = await db.notes.list();
        setNotes(response.documents);
        setLoading(false);
    };
 
    const contextData = { notes, setNotes, selectedNote, setSelectedNote };
 
    return (
        <NoteContext.Provider value={contextData}>
            {loading ? (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100vh",
                    }}
                >
                    <Spinner size="100" />
                </div>
            ) : (
                children
            )}
        </NoteContext.Provider>
    );
};
export default NotesProvider;