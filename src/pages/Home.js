import React, {useEffect, useState} from 'react';
import axios from 'axios';
import hero from '../assets/images/hero.png';
import { format, parseISO } from 'date-fns';
import { uk } from 'date-fns/locale';

import {Autoplay, A11y, Pagination, Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Home = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('/api/news', {
            params: {limit: 9}
        })
            .then(response => {
                setNews(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the news!", error);
            });
    }, []);

    return (
        <div className="mx-auto">
            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Ласкаво просимо до нашого факультету</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            Дізнайтеся більше про наш факультет, програми навчання, викладачів та події. Наш портал допоможе вам на шляху до знань та успіху.
                            <br/>
                            <br/>
                            <i>Почніть свою освітню подорож з нами.</i>
                        </p>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={hero} alt="hero image"/>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:py-16 lg:pt-28">
                    <h2 className="w-full mb-6 text-2xl font-extrabold leading-none tracking-tight lg:mb-12 md:text-3xl xl:text-4xl text-center dark:text-white">Наші зображення</h2>

                    <Swiper
                        modules={[Autoplay, Pagination, Navigation, A11y]}
                        spaceBetween={30} // Adjust the spacing as needed
                        slidesPerView={1} // Show only one slide by default
                        autoplay={{ delay: 3000 }} // Auto play with 3 seconds delay
                        pagination={{ clickable: true }} // Enable pagination
                        navigation // Enable navigation (arrows)
                    >
                        {news.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className='w-fit px-12 h-[160px] lg:h-[500px] mx-auto lg:px-20 select-none'
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:py-16 lg:pt-28">
                    <h2 className="w-full mb-6 text-2xl font-extrabold leading-none tracking-tight lg:mb-12 md:text-3xl xl:text-4xl text-center dark:text-white">Останні новини</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                        {news.map((item, index) => {
                            const date = parseISO(item.created_at);
                            const day = format(date, 'd', {locale: uk});
                            const month = format(date, 'MMMM', {locale: uk});
                            return (
                                <div key={index} className="rounded overflow-hidden shadow-lg">
                                    <div className="relative">
                                        <img className="w-full object-cover md:h-48" src={item.image} alt={item.title}/>
                                        <div className="transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                                        <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm">Фото</div>
                                        <div
                                            className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3">
                                            <span className="font-bold">{day}</span>
                                            <small>{month}</small>
                                        </div>
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

export default Home;
