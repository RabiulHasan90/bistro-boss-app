import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import videoSrc from '../../../assets/home/fv.mp4';
import img2 from '../../../assets/home/fc2.jpg';
import img3 from '../../../assets/home/fc3.jpg';
import img4 from '../../../assets/home/fc4.jpg';
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="carousel w-full h-[400px] md:h-[700px]">
            <div id="slide1" className="carousel-item relative w-full">
                <video src={videoSrc} className="w-full rounded-xl" autoPlay loop muted />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-4 md:pl-12 w-full md:w-1/2'>
                        <h2 className='font-extrabold text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                            WE ARE READY WITH BEST FOOD ONLY FOR YOU
                        </h2>
                        <p className='text-sm sm:text-base md:text-lg lg:text-xl'>
                            <span className='font-bold text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-red-600'>20%</span> OFF FOR WEEKEND
                        </p>
                        <div>
                            <Link to="/menu"><button className="btn btn-primary mr-2 md:mr-5 bg-[#1f1f38]">All Food</button></Link>
                            <button className="btn btn-outline btn-secondary">Latest Food</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle text-white bg-red-600 mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle text-white bg-red-600">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-4 md:pl-12 w-full md:w-1/2'>
                        <h2 className='font-extrabold text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                            WE ARE READY WITH BEST FOOD ONLY FOR YOU
                        </h2>
                        <p className='text-sm sm:text-base md:text-lg lg:text-xl'>
                            <span className='font-bold text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-red-600'>20%</span> OFF FOR WEEKEND
                        </p>
                        <div>
                            <button className="btn btn-primary mr-2 md:mr-5 bg-[#1f1f38]">All Food</button>
                            <button className="btn btn-outline btn-secondary">Latest Food</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle text-white bg-red-600 mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle text-white bg-red-600">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-4 md:pl-12 w-full md:w-1/2'>
                        <h2 className='font-extrabold text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                            WE ARE READY WITH BEST FOOD ONLY FOR YOU
                        </h2>
                        <p className='text-sm sm:text-base md:text-lg lg:text-xl'>
                            <span className='font-bold text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-red-600'>20%</span> OFF FOR WEEKEND
                        </p>
                        <div>
                            <button className="btn btn-primary mr-2 md:mr-5 bg-[#1f1f38]">All Food</button>
                            <button className="btn btn-outline btn-secondary">Latest Food</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle text-white bg-red-600 mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle text-white bg-red-600">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-4 md:pl-12 w-full md:w-1/2'>
                        <h2 className='font-extrabold text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                            WE ARE READY WITH BEST FOOD ONLY FOR YOU
                        </h2>
                        <p className='text-sm sm:text-base md:text-lg lg:text-xl'>
                            <span className='font-bold text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-red-600'>20%</span> OFF FOR WEEKEND
                        </p>
                        <div>
                            <button className="btn btn-primary mr-2 md:mr-5 bg-[#1f1f38]">All Food</button>
                            <button className="btn btn-outline btn-secondary">Latest Food</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle text-white bg-red-600 mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle text-white bg-red-600">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
