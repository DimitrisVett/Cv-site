import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [about, setAbout] = useState(false);
 

  

  return (
    <UserContext.Provider
      value={{ about,setAbout }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
