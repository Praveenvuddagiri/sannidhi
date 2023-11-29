import React from "react";
import ProjectsCard from "./ProjectsCards";

const Projects = ({data, title}) => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col mt-16 mb-5 text-xl">
        <h2 className="text-4xl text-[#3A7CBA]">{title}</h2>
        <div className="bg-[#B82A26] h-[3px] w-36 mt-4 mb-5"></div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {data?.map((item) => {
          return (
            <ProjectsCard
              image={item.image}
              heading={item.heading}
              description={item.description}
              button={item.button}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
