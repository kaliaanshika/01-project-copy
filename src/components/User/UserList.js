import React from 'react'
import Card from '../UI/Card'
import Classes from './UserList.module.css'

const UserList = (props) => {
    return (
        <Card className={Classes.users}>
            <ol>
                <div className={Classes.heading}>
                    <h3>User-Name</h3>
                    <h3>User-Age</h3>


                </div>

                {props.users.map((user) => (
                    <li>

                        <p>{user.name}</p>
                        <p>({user.age} years old)</p>
                    </li>
                ))}
            </ol>
        </Card>
    )
}

export default UserList
