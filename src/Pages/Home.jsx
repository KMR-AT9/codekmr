import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from 'react-router-dom';
import "@splidejs/react-splide/css";
import { ProjectData } from "../data/ProjectData";

export const Home = () => {
    return (
        <main>
            <div className="banner home-banner">
                <div className="container">
                    <div className="flex">
                        <div className="colA">
                            <div className="content">
                                <h1>Unveiling the Art of Web
                                    <TypeAnimation
                                        sequence={[
                                            "Development",
                                            1500,
                                            "Design",
                                            1500,
                                        ]}
                                        wrapper="span"
                                        cursor={true}
                                        repeat={Infinity}
                                        speed={250}
                                        style={{ display: 'block' }}

                                    /></h1>
                                    <div className="btn"><button>Explore Now</button></div>
                            </div>
                        </div>
                        <div className="colB">
                            <figure>
                                <img src={require('../assets/images/home/banner-img.png')} alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="homeSecA">
                    <div className="container">
                        <div className="flex">
                            <div className="colA">
                                <div className="heading">
                                    <h3>Projects</h3>
                                </div>
                            </div>
                            <div className="colB">
                                <div className="project-slider">
                                <Splide
                                    className="project-slider"
                                    options={{
                                        type: "loop",
                                        rewind: true,
                                        gap: "20px",
                                        snap: true,
                                        pauseOnHover: true,
                                        perPage: 2,
                                        autoplay: false,
                                        pagination: false,
                                        arrows: true,
                                        breakpoints: {
                                            767: {
                                                perPage: 1,
                                                pauseOnHover: false,
                                                arrows: true,
                                            }
                                        },
                                    }}
                                    aria-label="Project Slider"
                                >
                                    {ProjectData &&
                                        ProjectData.map((el) => {
                                            const { id, name, img, url } = el;
                                            return (
                                                <SplideSlide key={id}>
                                                    <div className="item">
                                                        <Link to={url}>
                                                            <figure>
                                                                <img src={require(`../assets/images/project/${img}`)} alt="img"></img>
                                                            </figure>
                                                            <figcaption>
                                                                <div className="web-name">{name}</div>
                                                            </figcaption>
                                                        </Link>
                                                    </div>
                                                </SplideSlide>
                                            );
                                        })}
                                </Splide>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
