import { useEffect, useState } from "react";
import { friends } from "../../api/friends";

function ContactCard({ email, image }) {
    return (
        <div className="p-4 bg-gray-300 rounded-lg flex flex-col items-center">
            <img src={image} alt={email} className="rounded-full w-48 h-48 mb-4" />
            <h3>{email}</h3>
        </div>
    );
}

export default function Contacts() {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        async function fetch() {
            const { data } = await friends();

            setContacts(data.payload);
        }
        fetch();
    }, []);
    return (
        <div className="flex">
            {contacts.map((contact) => (
                <ContactCard
                    image={contact.img_url}
                    email="admin@gmail.com"
                /> 
            ))}
        </div>
    );
}
