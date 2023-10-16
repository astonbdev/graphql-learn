

function Users({ users }) {
    console.log("Users Component", users);
    if (!users) {
        return <p>NOT LOADED</p>
    }
    return (
        <>
            {users.map((user) => {
                return <p>{user.username}</p>
            })}
        </>
    )
}

export default Users