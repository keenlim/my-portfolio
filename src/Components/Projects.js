import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";
import { LinkIcon } from "@heroicons/react/solid";


export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
                    </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
            Being someone who is interested and motivated in the software engineering field, 
            I take every opportunity to put my knowledge and skills into practise. 

          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
                    <div
              className="sm:w-full w-100 p-5">
              <div className="flex relative">

              {/*<img 
                  alt="gallery"
                  className="relative w-64 object-scale-down object-center mr-2"
                  src={project.image}
          />*/}

                <div className="px-8 py-10 relative z-0 w-full border-4 border-white-800 opacity-100">
                  <a href = {project.link}>
                    <LinkIcon className = "mx-auto inline-flex w-8 mb-4 float-right">
                    </LinkIcon>
                  </a>
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>

                </div>
            </div>
          ))}
                </div>
            </div>
        </section>
  );
}