import React from 'react';
import logo from '../Assets/codinglogo.png';
import Typewriter from "typewriter-effect";
import './About.css'
import TextSpan from './TextSpan';
import backgroundSVG from '../cool-background.svg';
import backgroundPNG from '../cool-background.png';
import Background from './Background';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function About(){
    const sentence = "Hello, I'm Ke En".split("");

    return(
        <section id="about" className = "relative overflow-hidden rounded-lg bg-cover bg-no-repeat h-screen" style = {{backgroundImage:`url(${backgroundSVG})`}}>
            <Navbar />        
            <div className = "container mx-auto flex px-20 py-10 md:flex-row flex-col justify-center items-center object-center grid grid-cols-1 gap-4 place-content-center z-50">
                <div>
                    <br />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <div className = "introduction title-font mb-4 font-medium text-emerald-500 flex justify-center items-center sm:text-5xl text-3xl">
                        {sentence.map((letter,index) =>{
                            return(
                                <TextSpan key={index}>
                                    {letter === " " ? "\u00A0" : letter}
                                </TextSpan>
                            )
                        })}
                    </div>

                    <h2 className = "title-font sm:text-2xl text-xl text-teal-700 font-normal tracking-wide mb-5">
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
                    href="#projects"
                    className=" inline-flex text-gray-800 hover:bg-green-100 border-2 border-slate-900 py-2 px-6 hover:border-0 focus:outline-none rounded text-lg">
                    See My Projects
                    </a>

                    <a
                    href="https://drive.google.com/file/d/1gENnir3n9YZZ-jmdKoolpRbRo1r0OD1e/view?usp=sharing" target = "_blank"
                    className=" inline-flex text-gray-800 hover:bg-green-100 border-2 border-slate-900 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:border-0 rounded text-lg mx-5">
                    See My Resume
                    </a>
                    </div>

                    <div className = "my-5">
                        <a
                        href="https://www.linkedin.com/in/limkeen12" target = "_blank"
                        className=" inline-flex rounded text-lg">
                        <FontAwesomeIcon style={{color: 'blue', fontSize: '40px'}} icon={faLinkedin} />
                        </a>

                        <a
                        href="https://github.com/keenlim" target = "_blank"
                        className=" inline-flex rounded text-lg mx-3">
                        <FontAwesomeIcon style={{color: 'black', fontSize: '40px'}} icon={faGithub} />
                        </a>
                    </div>


                </div>
                {/*<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src={logo}
                />
                </div>*/}

            </div>
            
        </section>
    )
}


export default About;