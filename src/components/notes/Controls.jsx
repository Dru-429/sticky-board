"use client"

import AddButton from "./Addbutton";
import colors from "../../assets/colors.json";
import ColorPallet from "./ColorPallet";

const Controls = () => {    
    return (
        <div id="controls" className="controls flex flex-col items-center justify-center">
            <AddButton />

            {
                colors.map( (color) => (
                    <ColorPallet key={color.id} color={color} /> 
                ))
            }
        </div>
    );
};
 
export default Controls;