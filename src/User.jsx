import { use } from "react";
import Users from "./Users";

export default function User({fetchUsers}) {
    const users = use(fetchUsers);
    return (
        <div className="card">
            <h3>Users: {users.length}</h3>
            {
                users.map(users => <Users key={users.id} users={users}></Users>)
            }
        </div>
    )
}