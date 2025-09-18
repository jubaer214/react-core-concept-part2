export default function Users({ users }) {
    // console.log(users)
    const {name, email, phone} = users;
    return (
        <div className="card">
            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
            <h4>Phone: {phone}</h4>
        </div>
    )
}