import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { newsData } from '../newsData.js';

const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
        chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
};

const Gallery = () => {

    // const [news, setNews] = useState([]);

    // useEffect(() => {
    //     axios.get('/api/news', {
    //         params: {limit: 12}
    //     })
    //         .then(response => {
    //             setNews(response.data);
    //         })
    //         .catch(error => {
    //             console.error("There was an error fetching the news!", error);
    //         });
    // }, []);
    const news = newsData.slice(0, 12);

    const columns = chunkArray(news, 3);

    return (
        <div className="mx-auto w-full">
            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:py-16 lg:pt-28">
                    <h2 className="w-full mb-6 text-2xl font-extrabold leading-none tracking-tight lg:mb-12 md:text-3xl xl:text-4xl text-center dark:text-white">Галерея зображень</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {columns.map((column, colIndex) => (
                            <div key={colIndex} className="grid gap-4">
                                {column.map((item, index) => (
                                    <div key={index}>
                                        <img className="h-full max-w-full rounded-lg object-cover" src={item.image} alt={item.title}/>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
