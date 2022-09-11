import { MDBContainer, MDBRipple } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import "./VideoBg.scss";

import { client } from "../../client";

const VideoBg = () => {
  const [videoBg, setVideoBg] = useState([]);
  //ADD DYNAMIC VID SRC
  useEffect(() => {
    const query = '*[_type == "home"]';
    // thats why we use this .then here to catch the promise
    //passing in the data mapped parameter to setAboutCards
    client.fetch(query).then((data) => setVideoBg(data)); //returns a promise
  }, []);
  //MAKE SURE TO ADD EMPTY ARRAY TO AVOID INFINITE LOOP;

  return (
    <MDBContainer fluid className="shadow-5-strong bg-info py-2">
      <MDBRipple className='w-100 bg-image hover-overlay shadow-1-strong rounded '
        rippleTag='div'
      rippleColor='light'>
        {videoBg.map((video, index) => (
          <div key={index} className="w-100">
            <video
              playsInline={true}
              controls={false}
              autoPlay={true}
              loop={true}
              className="app__video-Bg"
              loading="lazy"
            >
              <source src={video.homevideo} type="video/webm" />
            </video>

          </div>
        ))}
      </MDBRipple>
    </MDBContainer>
  );
};

export default VideoBg;



