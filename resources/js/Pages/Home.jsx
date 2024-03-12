import axios from 'axios';
import React, { useState } from 'react';

const Test = () => {
    const [long_url, setLongUrl] = useState('');
    const [shortLink, setShortLink] = useState('')

    const [isCopied, setIsCopied] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/list-shortner', { long_url });
            console.log('Task created successfully', response?.data?.data?.short_url);
            setShortLink(response?.data?.data?.short_url)
        } catch (error) {
            console.error('Error creating task', error);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(shortLink)
            .then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset copied state after 2 seconds
            })
            .catch(err => console.error('Failed to copy:', err));
    };
    

    return (
        <div className="flex flex-row min-h-screen w-100 justify-center items-center" style={{background: '#f9f9f9'}}>
            
            <div className='w-5/12'>
                <h2 className="text-2xl mb-4 font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl text-center"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">URL SHORTNER</span></h2>

                <div className='shadow-lg bg-white px-10 py-5 pb-10 rounded'>
                    <h4 className="text-2xl font-bold dark:text-white text-center py-3" style={{color: "#555"}}>Paste the URL to be shortened</h4>
                    <div className='w-100'>
                        
                        <form onSubmit={handleSubmit} className="mx-auto w-100"> 
                            <div className="relative w-100">
                                <input type="url" onInput={(e) => {setLongUrl(e.target.value)}} id="default-search" className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Paste url" required />
                                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Short Url</button>
                            </div>
                        </form>

                    </div>
                    <div>
                        {shortLink !== '' && (
                            <div className="w-7/12 mx-auto mt-5">
                                <div className="relative">
                                    <label htmlFor="npm-install-copy-text" className="sr-only">Label</label>
                                    <input id="npm-install-copy-text" type="text" className="col-span-6 bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-0 mr-0" value={shortLink} disabled readOnly />
                                    <button data-copy-to-clipboard-target="npm-install-copy-text" className="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border" onClick={handleCopy}>
                                        {isCopied == false ? (
                                            <span id="default-message" className="inline-flex items-center">
                                                <svg className="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                                                </svg>
                                                <span className="text-xs font-semibold">Copy</span>
                                            </span>
                                        ) : (
                                            <span id="success-message" className="inline-flex items-center">
                                                <svg className="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                </svg>
                                                <span className="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                                            </span>
                                        )}                                        
                                    </button>
                                </div>
                            </div>

                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test