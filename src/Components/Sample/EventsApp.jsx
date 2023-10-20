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
  <Carousel afterChange={onChange} className='fade-in appear'>
    <Link to="/events/scripture">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
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
          <p>“ What is written in the law? how readest thou?” (Luke 10vs26)</p>

          <p>
            The time is near and true readers should commence reading, not for
            satisfying own greed.
          </p>

          <p>For real readers, he says:</p>

          <p>
            “Blessed is he that readeth, and they that hear the words of this
            prophecy, and keep those things which are written therein: for the
            time is at hand.” (Revelation 1vs 3)
          </p>
          <p>
            Blessed are you as you are reading to seize the
            revelation of God's word.
          </p>
        </div>
      </div>
    </Link>

    <Link to="/intercession">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="prayer">
          <div className="h3text" style={contentStyle}>
            Prayer - Intercession
          </div>
        </div>

        <div>
          <p>
            The organization encourages PRAYER, Evangelisation, Seminary
            SYMPOSIUM, Concert and FORUM DISCUSSIONS in the spirit of Jesus
            Christ
          </p>

          <p>
            Prayer meeting, prayer vigil, intercessory prayer. Prayer of
            deliverance, Souls counselling and other payers support:
          </p>
          <p>
            <a href="tel:+491744370644"> Call +49(0)1744370644 </a>
            or email your prayer requests:{" "}
          </p>
          <a href="mailto:prayer@mowdministries.org">
            {" "}
            prayer@mowdministries.org
          </a>
        </div>
      </div>
    </Link>

    
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="crusade">
          <div className="h3text" style={contentStyle}>
            Open Air Crusade
          </div>
        </div>

        <div>
          <p>
            Through the evangelistic crusades, GOD is manifested to heal and
            deliver His people. For it is written, "WHEN THE SON DELIVERS YOU,
            YOU WILL REALLY BE FREE." (JOHN 8vs36).
          </p>

          <p>
          We have received the commission: “Go into all the world and preach the
          gospel to all creatures”. Mark 16, verse 15 “. This brought us
          together to organize an open-air evangelization in the city of Hamm
          (Westf) NRW for the first time in 2017. It is a moment that we meet to
          praise God the Almighty. There is always inspired gospel music, by
          different gospel singers who support the event.
        </p>

        <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "75vw",
          margin: "0 auto",
        }}
      >
        <button>
          <a href="https://www.mowdministries.org/galerie">
            Past Open Air Evangelisation
          </a>
        </button>

        <button>
          <a href="https://www.mowdministries.org/events">
            Coming Open Air Evangelisation
          </a>
        </button>
      </div>


          
        </div>
      </div>
    

    
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="charity">
          <div className="h3text" style={contentStyle}>
            {" "}
            Charitable Deeds
          </div>
        </div>
        <p>
          This involves reaching out to the needy by showing love and
          spreading the goodnews of Jesus Christ and His Salvation.
        </p>
        <p>
          We support people with social and psychological problems. (2
          Corinthians 9v9)
        </p>

        
        <button style={{ display: 'block', margin: 'auto' }}> <a href="https://www.mowdministries.org/our-services">Click Here for Our Charitable Deeds</a> </button>
        <p style={{ textAlign: 'center' }}>OR</p>
          
          <Link to='/gift'><button style={{ display: 'block', margin: 'auto',  }}>Click here to Sow a Lovely Seed</button></Link>

        <div></div>
      </div>
    

    <Link to="/events/baptism">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="baptism">
          <div className="h3text" style={contentStyle}>
            Water Baptism
          </div>
        </div>

        <div></div>
        <p>Get Baptized by immersion at Mowd Ministries.</p>
        <p>
          Feel free to{" "}
          <a href="mailto:info@mowdministries.org">Contact Us Here</a> for your
          Water Baptism
        </p>

        <p>
          for all of you who were baptized into Christ have clothed yourselves
          with Christ. - Gal 3:27
        </p>
      </div>
    </Link>

    <Link to="/events/supper">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="supper">
          <div className="h3text" style={contentStyle}>
            Lord Supper
          </div>
        </div>

        <div>
          <p>
            This involves taking the communion by eating the flesh and blood of
            Jesus for sanctification
          </p>
        </div>
      </div>
    </Link>

    <Link to="/events/convention">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="convention">
          <div className="h3text" style={contentStyle}>
            Holy Spirit Convention
          </div>
        </div>

        <div>
          <p>Come join us at our Annual Convention at Hamm, Germany. </p>
          <p>Dont come alone, Invite someone and be blessed.</p>
        </div>
      </div>
    </Link>

    <Link to="/events/conference">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="convention">
          <div className="h3text" style={contentStyle}>
            Conference
          </div>
        </div>

        <div>
          <p>
            This service brings all together: men, women, youth and children
            under the divine anointing. God visits his people, reveals himself
            to them and speaks to them. He (God) works out His plan in
            everyone's life.
          </p>
        </div>
      </div>
    </Link>

    <Link to="/events/sympossium">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="convention sympossium">
          <div className="h3text" style={contentStyle}>
            Sympossium/Colloque{" "}
          </div>
        </div>

        <div>
          <p>
            This service brings together businessmen and politicians under the
            fire of the Holy Spirit to revitalize his people and lead them on
            the path of righteousness to make them a holy people of able men and
            women.
          </p>
        </div>
      </div>
    </Link>

    <Link to="/events/concert">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="convention">
          <h3 className="h3text" style={contentStyle}>
            Concert
          </h3>
        </div>

        <div>
          <p>Come join us at our Annual Convention at Hamm, Germany. </p>
          <p>Dont come alone, Invite someone and be blessed.</p>
        </div>
      </div>
    </Link>
  </Carousel>
);
export default EventsApp;
