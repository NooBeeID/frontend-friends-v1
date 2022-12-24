import { useEffect, useState } from "react";
import { friends } from "../../api/friends";

function ContactCard({ email, image, onFollow, onUnfollow, followed }) {
    return (
        <div className="p-4 rounded-lg flex flex-col border border-gray-400 items-center">
            <img src={image} alt={email} className="rounded-full w-48 h-48 mb-4" />
            <h3 className="mb-4">{email}</h3>
            {!followed ? (
                <button className="p-2 w-full bg-yellow-400 rounded-lg" onClick={onFollow}>Follow</button>
            ) : (
                <button className="p-2 w-full bg-gray-400 rounded-lg" onClick={onUnfollow}>Unfollow</button>
            )}
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
        <div className="flex gap-4">
            {contacts.map((contact) => (
                <ContactCard
                    image={contact.img_url}
                    email={contact.email}
                    followed
                /> 
            ))}
        </div>
    );
}
