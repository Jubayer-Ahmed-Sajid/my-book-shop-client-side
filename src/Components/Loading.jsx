import React from "react";
import GridLoader from "react-spinners/GridLoader";
const Loading = () => {
    
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <GridLoader
        color={"#FF0000"}
        loading:true
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      
    </div>
  );
};

export default Loading;
