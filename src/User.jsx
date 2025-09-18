import { use } from "react";

export default function User({fetchUsers}) {
    const users = use(fetchUsers);
    return (
        <div className="card">
            <h3>Users: {users.length}</h3>
        </div>
    )
}