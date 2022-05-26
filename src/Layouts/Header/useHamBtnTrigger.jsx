import { useState } from "react";

export default function useHamBtnTrigger() {

    let [isButtonTriggered, setIsButtonTriggered] = 
    useState(false);
   
    let enableMenu = () => {
        setIsButtonTriggered(!isButtonTriggered);
    };

    return {isButtonTriggered, 
            setIsButtonTriggered,
            enableMenu}
}
