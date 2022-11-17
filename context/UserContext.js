import { createContext, useState } from "react";

const userID = 4;
const UserContext = createContext(-1);
export function UserProvider({children}){
    const [userInstance, setUser] = useState(userID);

    return (
        <UserContext.Provider value={{userInstance,setUser}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;