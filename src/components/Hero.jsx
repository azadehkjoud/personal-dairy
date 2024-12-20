import {useEffect, useState} from 'react';
import axios from 'axios';

const Hero = ({entries}) => {
    const [quote, setQuote] = useState(null);

    useEffect(() => {

        const url = '/api/random';

        axios(url)
            .then((response) => {
                setQuote(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    return (
        <section
            id="hero"
            className="hero min-h-screen max-w-screen border-b-4 border-accent mb-4"
            style={{
                backgroundImage: "url(https://picsum.photos/1200/800)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center flex-col">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold mb-4">One line a day might light you the way</h1>{quote && (
                    <div className="chat chat-start absolute right-4 max-w-64 bottom-10">
                        <div className="chat-header">
                            {quote[0].a}
                        </div>
                        <div className="chat-bubble chat-bubble-accent">{quote[0].q}</div>
                    </div>
                )}
                </div>
                {entries && (
                    <div className="stats bg-transparent">
                        <div className="stat text-primary">
                            <div className="stat-title text-white">You wrote</div>
                            <div className="stat-value">{entries.length}</div>
                            <div className="stat-title text-white">lines already</div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Hero;