import React, { useEffect, useState } from 'react';
import axios from 'axios';
import hero from "../assets/images/hero.png";
import {format, parseISO} from "date-fns";
import {uk} from "date-fns/locale";
import { newsData } from '../newsData.js';

const News = () => {
    // const [news, setNews] = useState([]);
    //
    // useEffect(() => {
    //     axios.get('/api/news')
    //         .then(response => {
    //             setNews(response.data);
    //         })
    //         .catch(error => {
    //             console.error("There was an error fetching the news!", error);
    //         });
    // }, []);
    const news = newsData;

    return (
        <div className="mx-auto">
            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:py-16 lg:pt-28">
                    <h2 className="w-full mb-6 text-2xl font-extrabold leading-none tracking-tight lg:mb-12 md:text-3xl xl:text-4xl text-center dark:text-white">Новини факультету</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                        {news.map((item, index) => {
                            // const date = parseISO(item.created_at);
                            // const day = format(date, 'd', {locale: uk});
                            // const month = format(date, 'MMMM', {locale: uk});
                            return (
                                <div key={index} className="rounded overflow-hidden shadow-lg">
                                    <div className="relative">
                                        <img className="w-full object-cover md:h-48" src={item.image} alt={item.title}/>
                                        <div className="transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                                        <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm">Фото</div>
                                        {/*<div*/}
                                        {/*    className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3">*/}
                                        {/*    <span className="font-bold">{day}</span>*/}
                                        {/*    <small>{month}</small>*/}
                                        {/*</div>*/}
                                    </div>
                                    <div className="px-6 py-4">
                                        <h3 className="font-semibold text-lg inline-block transition duration-500 ease-in-out">{item.title}</h3>
                                        <p className="text-gray-500 text-sm">{item.summary}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default News;
