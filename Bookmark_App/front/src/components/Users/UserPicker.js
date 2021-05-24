import React, {useEffect, useState} from "react";
import Spinner from "../UI/Spinner";
import getData from "../../utils/api";

export default function UserPicker() {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState(null);

    useEffect(() => {
        getData("http://localhost:3001/users")
            .then(data => {
                setUsers(data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error);
                setIsLoading(false);
                console.log(error);
            })
    }, []);

    // UI on error catch
    if (error) {
        return <p>{error.message}</p>
    }

    // UI while loading
    if (isLoading) {
        return <p><Spinner/></p>
    }

    return (
        <select>
            {users.map(u => (
                <option key={u.id}>{u.name}</option>
            ))}
        </select>
    );
}
