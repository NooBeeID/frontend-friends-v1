import { useState } from "react";
import { search } from '../../api/auth'

function ContactCard({ email, image, onFollow, onUnfollow, followed }) {
    return (
        <div className="p-4 bg-gray-300 rounded-lg flex flex-col items-center mx-4">
            <img src={image} alt={email} className="rounded-full w-48 h-48 mb-4" />
            <h3>{email}</h3>
            {!followed ? (
                <button onClick={onFollow}>Follow</button>
            ) : (
                <button onClick={onUnfollow}>Unfollow</button>
            )}
        </div>
    );
}

function Home() {
    const [searchValue, setSearch] = useState('');
    const [filteredContacts, setFilteredContacts] = useState([]);

    const handleSearch = async () => {
        const { data } = await search({ email: searchValue });
        setFilteredContacts(data.payload);
    };
    return (
        <div className="h-full">
            <div>
                <input
                    className="p-2 border border-stone-400 rounded-lg w-full"
                    onChange={({ target }) => setSearch(target.value)}
                    onKeyDown={({ key }) => {
                        if(key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
            </div>
            {filteredContacts.length > 0 ?(
                <div className="flex flex-wrap flex pt-4">
                    {filteredContacts.map((contact) => (
                        <ContactCard
                            image={contact.img_url}
                            email={contact.email}
                        /> 
                    ))}
                </div>
            ):(
                <div className="h-full flex justify-center items-center">
                    Silahkan coba cari teman anda menggunakan search bar diatas
                </div>
            )}
        </div>
    );
}

export default Home;
