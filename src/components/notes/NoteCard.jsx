"use client"

import React, { useContext, useEffect, useRef, useState } from 'react';
import { autoGrow, bodyParser, setNewOffset, setZIndex } from '../utils/utils';
import { db } from '@/appwrite/database';
import Spinner from '../icons/Spinner';
import DeleteButton from './DeleteButton';
import { NoteContext } from '@/context/NoteContext';

const NoteCard = ({ note }) => {
    const textAreaRef = useRef(null);
    const cardRef = useRef(null);
    const { setSelectedNote } = useContext(NoteContext)

    useEffect(() => {
        if (textAreaRef.current) {
            autoGrow(textAreaRef);
            setZIndex(cardRef.current)
        }
    }, []);

    try {
        const [position, setPosition] = useState(JSON.parse(note.position))
        const colors = bodyParser(note.colors);
        const body = bodyParser(note.body);
        const [saving, setSaving] = useState(false)
        const keyUpTimer = useRef(null)

        let mouseStartPos = { x: 0, y: 0 };

        const saveData = async (key, value) => {
            const payload = { [key]: JSON.stringify(value) };
            try {
                await db.notes.update(note.$id, payload);
            } catch (error) {
                console.error(error);
            }

            setSaving(false)
        };

        const handleKeyUp = async () => {
            //1 - Initiate "saving" state
            setSaving(true);

            //2 - If we have a timer id, clear it so we can add another two seconds
            if (keyUpTimer.current) {
                clearTimeout(keyUpTimer.current);
            }

            //3 - Set timer to trigger save in 2 seconds
            keyUpTimer.current = setTimeout(() => {
                saveData("body", textAreaRef.current.value);
            }, 2000);
        };

        const mouseDown = (e) => {

            if (e.target.className === "card-header") { 
                mouseStartPos.x = e.clientX;
                mouseStartPos.y = e.clientY;
    
                document.addEventListener("mousemove", mouseMove);
                document.addEventListener("mouseup", mouseUp)
    
                setZIndex(cardRef.current)
                setSelectedNote(note)
            }
        };

        const mouseMove = (e) => {
            //1 - Calculate move direction
            let mouseMoveDir = {
                x: mouseStartPos.x - e.clientX,
                y: mouseStartPos.y - e.clientY,
            };

            //2 - Update start position for next move.
            mouseStartPos.x = e.clientX;
            mouseStartPos.y = e.clientY;        

            const newPosition = setNewOffset(cardRef.current, mouseMoveDir)

            //3 - Update card top and left position.
            setPosition(newPosition);
            setTimeout(() => {
                saveData("position", newPosition)
            }, 1000)
        };

        const mouseUp = () => {
            document.removeEventListener("mousemove", mouseMove);
            document.removeEventListener("mouseup", mouseUp);
        };

        return (
            <div
                ref={cardRef}
                className="card absolute"
                style={{
                    backgroundColor: colors.colorBody,
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
                onMouseDown={mouseDown}
                onFocus={() => {
                    setZIndex(cardRef.current)
                    setSelectedNote(note)
                    // console.log( "focusing :" , cardRef)
                }}
            >
                <div
                    className="card-header"
                    style={{ backgroundColor: colors.colorHeader }}
                >
                    <DeleteButton  noteId={note.$id} />

                    {
                        saving && (
                            <div className="card-saving">
                                <Spinner color={colors.colorText} /> 
                                <span style={{ color: colors.colorText }}>Saving...</span>
                            </div>
                        )
                    }
                </div>

                <div className="card-body">
                    <textarea
                        onKeyUp={handleKeyUp}
                        ref={textAreaRef}
                        style={{ color: colors.colorText }}
                        defaultValue={body}
                        onInput={() => {
                            autoGrow(textAreaRef)
                        }}
                    ></textarea>
                </div>

            </div>
        );

    }
    catch (error) {
        console.error('Error parsing note body:', error);
        return <div>Error loading note</div>;
    }
};

export default NoteCard;