import { createContext, useState } from "react";
export const UserContext = createContext;

export const MyContext=(props)=>{
    const[about,setAbout]=useState(false);
    console.log(UserContext);

    return (
        <UserContext.Provider value={{about, setAbout }}>
          {props.children}
        </UserContext.Provider>
      );
    
}