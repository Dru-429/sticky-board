import { db } from "@/appwrite/database";
import Spinner from "@/components/icons/Spinner";
import { createContext } from "react";
import { useState, useEffect } from "react";
 
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
                    className="w-screen h-screen flex flex-col items-center justify-center relative"  
                >
                    <Spinner size="100" />
                    <div className="absolute bottom-4 right-0">
                        <h1 className="text-2xl font-bold text-zinc-200 mt-4">
                            Loading Notes...
                        </h1>
                        {/* <p className="text-gray-500">Please wait while we fetch your notes.</p> */}
                    </div>
                </div>
            ) : (
                children
            )}
        </NoteContext.Provider>
    );
};
export default NotesProvider;