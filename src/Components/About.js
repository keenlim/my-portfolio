import React from 'react';
import logo from '../Assets/codinglogo.png';
import Typewriter from "typewriter-effect";
import './About.css'
import TextSpan from './TextSpan';

function About(){
    const sentence = "Hello, I'm Ke En".split("");
    return(
        <section id="about">
            <div className = "container mx-auto flex px-10 py-20 md:flex-row flex-col items-center h-screen">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <div className = "introduction title-font mb-4 font-medium text-white">
                        {sentence.map((letter,index) =>{
                            return(
                                <TextSpan key={index}>
                                    {letter === " " ? "\u00A0" : letter}
                                </TextSpan>
                            )
                        })}
                    </div>

                    <h2 className = "title-font sm:text-3xl text-2xl text-amber-100 font-light tracking-wide mb-5">
                        <Typewriter
                            options = {{
                                autoStart : true,
                                loop : true,
                                delay: 100,
                                strings : ["I am a year 3 undergraduate student studying Computer Science at Nanyang Technological University."]
                            }}
                        />
                    </h2>

                    <p className = "mb-8 leading-relaxed text-lg ">
                        Being a self-motivated and independent learner, I strive
                        to do my best and take on numerous initiatives to learn more about the ever-changing 
                        software-engineering field. 
                    </p>
                    <div className="flex justify-center">
                    <a
                    href="/my-portfolio/projects"
                    className=" inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                    See My Projects
                    </a>
                </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src={logo}
                />
                </div>
            </div>
        </section>
    )
}


export default About;