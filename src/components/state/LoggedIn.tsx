import { useState } from "react";

type AuthUser = {
    name: string,
    email: string
}

export const LoggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState<AuthUser | null>(null)

    const handleLogin = () => {
        setIsLoggedIn(true);
        setUser({
            name: 'Gullu',
            email: 'gullu@example.com'
        })
    }
    const handleLogout = () => {
        setIsLoggedIn(false);
        setUser(null);
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>
                User is {isLoggedIn
                    ? `
                        Logged In
                        Name: ${user?.name} Email: ${user?.email}
                    `
                    : 'Logged Out'
                }
            </div>
        </div>
    )
}