import React from 'react';
import './Person.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const Person = (props) => {

    //const {name,url//username,email,url//thumbnailUrl,address,phone,website,company} = props.person ;
    const {name,url,salary,phone,website,company} = props.person ;

    return (
        <div className="main-content">

<div className="profile-bar">
            <div className="img-container">
                <img src={url} alt=""/>
            </div>
            <div className="details-container">
                <h3>{name}</h3>
                <h5>{company.position}</h5>
                <br/>
                <p>Website: {website}</p>
                <p>Company: {company.name}</p>
                <p>Salary: ${salary}</p>
                <p>Phone: {phone}</p>
                <button className="contact-me" onClick={() =>props.addFriend(props.person)} > <FontAwesomeIcon icon={faPlus}/> Connect</button>
                 
                 
                 
            </div>
        </div>

        </div>
        
        
    );
};

export default Person;