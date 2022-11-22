import { createContext, useState } from "react";


const ScrollContext = createContext("newest");
export function ScrollProvider({children}){
    const [filter, setFilter] = useState("newest");

    return (
        <ScrollContext.Provider value={{filter, setFilter}}>
            {children}
        </ScrollContext.Provider>
    );
}

export default ScrollContext;