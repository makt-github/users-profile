import React, { useState } from 'react';
import fakeInfo from '../../fakeInfo';
import './Profile.css';
import Person from '../Person/Person';
import Status from '../Status/Status';

const Profile = () => {

    const first10 = fakeInfo.slice(0,12);
    const [person, setPerson] = useState(first10);

    const [request, setRequest] = useState([]);

    const addFriend = friend =>{
        const newRequest = [...request,friend];

        setRequest(newRequest);
        
        

    }

    return (
        <div className="profile-container">
            <div className="person-container">
            {
                person.map(ps =><Person 
                    addFriend ={addFriend}
                    person={ps}
                    
                    >

                    </Person>)
            }
            
            </div>

            <div className="status-container">
            <Status status={request}></Status>
                

            </div>
        </div>
    );
};

export default Profile;