import React, { useEffect, useState } from 'react'


const Api = () => {
    const [users, setUsers] = useState([]);
    const [time, setTime] = useState();
    // const [hour, setHour] = useState(new Date().getHours());
    // const [min, setmin] = useState(new Date().getMinutes());
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then((Response) => Response.json())
    //         .then((data) => { setUsers(data) })
    //         .catch((err) => { console.log(err.message) })
    // }, []);
    useEffect(() => {
        setInterval(() => {
            const timer = new Date();
            const hour = timer.getHours();
            const min = timer.getMinutes();
            const sec = timer.getSeconds();
            const formatedTime = `${hour}:${min}:${sec} `
            setTime(formatedTime)
        }, 1000)
    }, []);

    return (
        <div>
            {time}
            <table >
                <thead>
                    <tr>
                        <th>name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>phone</th>
                        <th>website</th>
                        <th>company_name</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map(user => <tr key={user.id}><td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td>{user.company.name}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default Api