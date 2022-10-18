import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contactComponent';

const ContactList = () => {

    const defaultContact = new Contact("Juan", "Moreno", "juan.moreno@blueconchtech.com", false);

    return (
        <div>
            <ContactComponent contact = { defaultContact }></ContactComponent>
        </div>
    );
};





export default ContactList;
