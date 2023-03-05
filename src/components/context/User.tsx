import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
	const userContext = useContext(UserContext);
    const handleLogin = () => {
		userContext.setUser({
			name: 'Gulshan',
			email: 'gullu@gmail.com'
		})
    }
    const handleLogout = () => {
		userContext.setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>
                User is {userContext.user?.name
                    ? `
                        Logged In
                        Name: ${userContext.user?.name} Email: ${userContext.user?.email}
                    `
                    : 'Logged Out'
                }
            </div>
        </div>
    )
}