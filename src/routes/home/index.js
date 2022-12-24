import { useState } from "react";
import { search } from '../../api/auth'
import { follow, unfollow } from '../../api/friends'

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

function Home() {
    const [searchValue, setSearch] = useState('');
    const [filteredContacts, setFilteredContacts] = useState([]);

    const handleSearch = async () => {
        const { data } = await search({ email: searchValue });
        setFilteredContacts(data.payload);
    };

    const handleFollow = async ({ following_id }) => {
        await follow({ following_id });
        handleSearch();
    };
    const handleUnfollow = async ({ following_id }) => {
        await unfollow({ following_id });
        handleSearch();
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
                <div className="flex flex-wrap justify-center pt-4 gap-4 mb-4">
                    {filteredContacts.map((contact) => (
                        <ContactCard
                            image={contact.img_url}
                            email={contact.email}
                            followed={contact.is_follow}
                            onFollow={() => handleFollow({
                                following_id: contact.id,
                            })}
                            onUnfollow={() => handleUnfollow({
                                following_id: contact.id,
                            })}
                        /> 
                    ))}
                </div>
            ):(
                <div className="h-full flex justify-center items-center">
                    Kosong...
                </div>
            )}
        </div>
    );
}

export default Home;
