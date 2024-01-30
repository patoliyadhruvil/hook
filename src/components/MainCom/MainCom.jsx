import React, { createContext } from "react";
import ChildA from "../ChildA/ChildA";

export const userContext = createContext();

const MainCom = () =>{

    const user = {name : 'Ravi Patel' , age : 18 , Email : "RP@gmail.com"}  

    return(
        <>
            <h2>
                I'm Main Com;
            </h2>
            <userContext.Provider value={user}>
                <ChildA/>
            </userContext.Provider>
        </>
    )

}
export default MainCom;