import React from "react";

import "./index.css";
import Image1 from "./../../img/photo1.jpeg";
import Image2 from "../../img/photo2.jpg";
import Image3 from "../../img/photo3.jpeg";
import Image4 from "../../img/photo4.jpeg";
import Image5 from "../../img/photo5.jpeg";

const CreateImg = () => {
  return (
    <div>
      <div className="images">
        <div className="img">
          <img className="imgs" src={Image1} />
          <div className="text">Hey</div>
        </div>

        <div className="img">
          <img className="imgs" src={Image2} />
          <div className="text">Let's</div>
        </div>

        <div className="img">
          <img className="imgs" src={Image3} />
          <div className="text">Give</div>
        </div>

        <div className="img">
          <img className="imgs" src={Image4} />
          <div className="text">All</div>
        </div>

        <div className="img">
          <img className="imgs" src={Image5} />
          <div className="text">You can</div>
        </div>
      </div>
    </div>
  );
};

export default CreateImg;
