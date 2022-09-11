import React from "react";
import { MDBContainer, MDBRipple } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import "./VideoBg.scss";
import { client } from "../../client";

const VideoBg = () => {
  const [videoBg, setVideoBg] = useState([]);

  useEffect(() => {
    const query = '*[_type == "home"]';

    client.fetch(query).then((data) => setVideoBg(data));
  }, []); //empty dependency Arrray to Avoid Infinite Loop Error

  return (
    <MDBContainer fluid className="shadow-5-strong bg-info py-2">
      <MDBRipple
        className="w-100 bg-image hover-overlay shadow-1-strong rounded "
        rippleTag="div"
        rippleColor="light"
      >
        {/**  Mapping Over the VideBG */}

        {videoBg.map((video, index) => (
          <div className="w-100" key={video + index}>
            <video
              className="app__video-Bg"
              playsInline={true}
              controls={false}
              autoPlay={true}
              loop={true}
              loading="lazy"
            >
              <source src={video.homevideo} type="video/webm" />
            </video>
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            >
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white">
                  <h1 className="mb-3">{video.title}</h1>
                  <h4 className="mb-3">{video.description}</h4>
                  <a
                    className="btn btn-outline-info btn-lg"
                    href="MemberShip"
                    role="button"
                  >
                    MemberShip
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </MDBRipple>
    </MDBContainer>
  );
};

export default VideoBg;
