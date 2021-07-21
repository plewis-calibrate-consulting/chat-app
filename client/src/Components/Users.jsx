import React from 'react';

const Users = ({ users, userName }) => {

  return (
    <div className="user-container">
      <h3>Active users:</h3>
      <ul className="users">
        {users &&
          users.map(name => {
            return <li key={users.userId} className="user-list-item">{name.userName === userName ? 'Me: ' : 'User: '} {name.userName}</li>
          })
        }
      </ul>
    </div>
  )
}

export default Users;