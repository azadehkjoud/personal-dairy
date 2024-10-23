import {useEffect, useState} from 'react';
import axios from 'axios';

const Hero = () => {
    const [quote, setQuote] = useState(null);

    useEffect(() => {

        const url = "https://api.paperquotes.com/apiv1/qod/?lang=en";
        const proxy = "https://cors-anywhere.herokuapp.com/";

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
            className="hero min-h-screen w-screen border-b-4 border-accent mb-4"
            style={{
                backgroundImage: "url(https://picsum.photos/1200/800)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold mb-4">One line a day might light you the way</h1>
                    {quote && (
                        <div className="chat chat-start absolute right-4 max-w-64 bottom-10">
                            <div className="chat-header">
                                {quote.author}
                            </div>
                            <div className="chat-bubble chat-bubble-accent">{quote.quote}</div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
