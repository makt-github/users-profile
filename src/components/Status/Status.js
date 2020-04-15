import React from 'react';
import './Status.css';


const Status = (props) => {

     const status = props.status ;

    // const status = props.status ;
     console.log(status);

     const pic = status.map(img => img.url);
     const name = status.map(n => n.name);
     const pos = status.map(p => p.company.position);

    return (
        <div>
            <h4>Status Bar & Notification</h4>
            <h5>Total Request Sent: {status.length}</h5>
            <img src={pic} alt=""/>
            <p>{name}</p>
            <p>{pos}</p>

        </div>
    );
};

export default Status;