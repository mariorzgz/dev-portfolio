import React from "react";
import { loaders } from "../data";

class Loader extends React.Component{

    render(){

      const selectedLoader = (
          <div className="loader-content"
          style={{
            backgroundImage: `url(${loaders[Math.floor(Math.random() * loaders.length)]})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: "100px",
            width: "100px"
          }}
          alt="emoji" >
          </div>
      );

      return(
        <div id="loader">

          { selectedLoader }

        </div>
      )
  }

}

export default Loader;
