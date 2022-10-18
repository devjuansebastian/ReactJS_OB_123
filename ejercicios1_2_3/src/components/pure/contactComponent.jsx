import {React, useState} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({contact}) => {

    const [online, setonline] = useState(false);

    const switchStatus = () =>{
        setonline(!online);
        contact.online = !contact.online;
    }
    
    return (
        <div>
            <h1> { contact.name + " " + contact.last_name} </h1>
            <ul>
                <li>email: { contact.email } </li>
                <li>status: { contact.online ? 'Online' : 'Offline' } </li>
            </ul>
            <button onClick={switchStatus}> { contact.online ? 'Log out' : 'Log in' } </button>
        </div>
    );

  
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
