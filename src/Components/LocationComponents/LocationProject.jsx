import React from "react";
import LocationCard from "./LocationCard";

const LocationProject = ({data}) => {


  return (
    <div>

      <div className="">
        {
          <LocationCard
            heading={data.heading}
            mapSrc={data.mapSrc}
          />
        }
      </div>
    </div>
  );
};

export default LocationProject;
