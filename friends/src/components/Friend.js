import React from "react";

const Friend = (props) => {
    return (
        <div className='friend-list'>
            <h1>Friends</h1>
            {props.friends.map((friends) => (
                <div className='friend' key={friends.id}>
                    <p>Name: {friends.name}</p>
                    <p>Age: {friends.age}</p>
                    <p>Email: {friends.email}</p>
                </div>
            ))}
        </div>
    );
};

export default Friend;