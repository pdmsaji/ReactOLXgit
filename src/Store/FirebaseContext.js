import { createContext, useState } from "react";

export const FirebaseContext = createContext(null);


// to display name of user at login part after loginned

const AuthContext = createContext(null); // initial value is null
export {AuthContext};


export default function Context ({children}) {

    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={user}> 
            {children}

        </AuthContext.Provider>
    )
    
}

