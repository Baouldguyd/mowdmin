import React from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  marginTop: "2rem",
  fontFamily: "sava-pro-semibold, sans-serif",
};

const onChange = (currentSlide) => {
  console.log(currentSlide);
};

const EventsApp = () => (
  <Carousel afterChange={onChange}>
    <Link to="/events/scripture">
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div className="scripture">
          {/* <h3 className='h3text' style={contentStyle
        
          }>Scripture Reading</h3> */}

          <div className="h3text" style={contentStyle}>
            {" "}
            Scripture Reading{" "}
          </div>
        </div>

        <div>
          <p></p>
          <p>In Luke chapter 10 vs 26 Jesus Christ asked a Dr. of Law:</p>
          <p>
        “ What is written in the law? how readest thou?”
(Luke 10vs26)
        </p>
        
        <p>
        The time is near and true readers should commence reading, not for satisfying own greed.
        </p>

        <p>
        For real readers, he says:
        </p>

        <p>
        “Blessed is he that readeth, and they that hear the words of this prophecy, and keep those things which are written therein: for the time is at hand.”
(Revelation 1vs 3)
        </p>
        <p>
            Blessed are you as you are reading to seize the revelation of God's word.

        </p>
        </div>
      </div>
    </Link>

    <Link to="/events/prayer">
      <div className="prayer">
        <h3 className="h3text" style={contentStyle}>
          Prayer - Intercession
        </h3>
      </div>
    </Link>

    <Link to="/events/crusade">
      <div className="crusade">
        <h3 className="h3text" style={contentStyle}>
          Open Air Crusade
        </h3>
      </div>
    </Link>

    <Link to="/events/charity">
      <div className="charity">
        <h3 className="h3text" style={contentStyle}>
          {" "}
          Charitable Deeds
        </h3>
      </div>
    </Link>

    <Link to="/events/baptism">
      <div className="baptism">
        <h3 className="h3text" style={contentStyle}>
          Water Baptism
        </h3>
      </div>
    </Link>

    <Link to="/events/supper">
      <div className="supper">
        <h3 className="h3text" style={contentStyle}>
          Lord Supper
        </h3>
      </div>
    </Link>

    <Link to="/events/convention">
      <div className="convention">
        <h3 className="h3text" style={contentStyle}>
          Holy Spirit Convention
        </h3>
      </div>
    </Link>

    <Link to="/events/conference">
      <div className="convention">
        <h3 className="h3text" style={contentStyle}>
          Conference
        </h3>
      </div>
    </Link>

    <Link to="/events/sympossium">
      <div className="convention sympossium">
        <h3 className="h3text" style={contentStyle}>
          Sympossium/Colloque{" "}
        </h3>
      </div>
    </Link>

    <Link to="/events/concert">
      <div className="convention">
        <h3 className="h3text" style={contentStyle}>
          Concert
        </h3>
      </div>
    </Link>
  </Carousel>
);
export default EventsApp;
