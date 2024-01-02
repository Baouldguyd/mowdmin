import React from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import { FaVideo } from "react-icons/fa";
import CountdownTimer from "./CountdownTimer";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  marginTop: "2rem",
  fontFamily: "sava-pro-semibold, sans-serif",
};

const sympo = {
  textAlign: "center",
};

const onChange = (currentSlide) => {
  console.log(currentSlide);
};

const targetDate = "2023-12-31T23:59:59";

const EventsApp = () => (
  <Carousel afterChange={onChange} className="fade-in appear">
    <Link to="/bible">
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
          <button style={{ display: "flex", margin: "0 auto" }}>
            Click Here for Your Bible Devotional Reading
          </button>
        </div>
      </div>
    </Link>


    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >

        <div className="prayer">
          <div className="h3text" style={contentStyle}>
            Prayer - Army
          </div>
        </div>

        <div>
          <p style={sympo}>
          The organisation Mowdministries e.V encourages prayer, prayer-meeting, Prayer vigil. Intercessory Prayer, Prayer of deliverance, Prayer of agreement, Souls counselling.
          </p>

          <button style={{ margin: "0 auto", display: "flex" }}>
            Please Click to Choose for Option
          </button>

          

        {/* <p>
          <a href="tel:+491744370644">+49(0)1744370644 or +4915778688954</a> or
          mail your prayer requests to:{" "}
          <a href="mailto:prayer@mowdministries.org">
            {" "}
            prayer@mowdministries.org
          </a>
        </p> */}

        <p style={{ textAlign: "center", margin: "0 auto", marginTop: '1rem' }}>
        
          <button>
          
            {" "}
            <Link to="/request">Prayer Request</Link>{" "}
          </button>{" "}
        </p>

        <p style={{ textAlign: "center", margin: "0 auto", marginTop: "1rem" }}>
         <button>
          <Link to='/prayerlist'>
          Intercession's Army
          </Link>
          </button>{" "}
        </p> 
        </div>
      
    </div>

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
        <p style={sympo}>
          We have received the commission: “Go into all the world and preach the
          gospel to all creatures”. Mark 16, verse 15 “. This brought us
          together to organize an open-air evangelization in the city of Hamm
          (Westf.) NRW for the first time in 2017. It is a moment that we meet
          to praise God the Almighty. There is always inspired gospel music, by
          different gospel singers who support the event.
        </p>

        <p style={sympo}>
          Through the annual "open air evangelization", GOD is manifested to
          heal and deliver His people. For it is written, "WHEN THE SON DELIVERS
          YOU, YOU WILL REALLY BE FREE." (JOHN 8vs36).
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

          <p
            style={{
              textAlign: "center",
              marginBottom: "1.3rem",
              fontWeight: "bolder",
            }}
          >
            COMING OPEN AIR EVANGELISATION BEGINS IN{" "}
          </p>

          <CountdownTimer targetDate={targetDate} />

          <button>
            <a href="https://www.mowdministries.org/events">
              Be Notified for the Coming Open Air Evangelisation
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
        This involves reaching out to the needy by showing love and spreading
        the goodnews of Jesus Christ and His Salvation.
      </p>
      <p>
        We support people with social and psychological problems. (2 Corinthians
        9v9)
      </p>

      <button style={{ display: "block", margin: "auto" }}>
        {" "}
        <a href="https://www.mowdministries.org/our-services">
          Click Here for Our Charitable Deeds
        </a>{" "}
      </button>
      <p style={{ textAlign: "center" }}>OR</p>

      <Link to="/gift">
        <button style={{ display: "block", margin: "auto" }}>
          Click here to Sow a Lovely Seed
        </button>
      </Link>

      <div></div>
    </div>

    {/* <Link to="/events/baptism"> */}
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
      <p>
        Baptism Acts 2vs 38 Baptism is not the clause of salvation. Baptism does
        not advocate the cleansing of sins and does not provide forgiveness of
        sin.
      </p>

      <p>
        When we read Acts 2 vs 38, the term simply means because of the
        forgiveness of your sins. So it is because of forgiveness of sin we are
        baptise.
      </p>
      <p>
        The reality of forgiveness precedes the rite of baptism, of course
        baptism by immersion and not ablutions.
      </p>
      <p>
        Only a sincere repentance that make a way to the forgiveness of sins,
        because it´s at the consequence of the remission and forgiveness of our
        sins in Christ that we are baptized.
      </p>
      <p>
        Baptism it´s an act of obedience following inevitably the conversion to
        identify salvation.
      </p>
      <p>The commitment of a good conscience towards God. 1 Peter 3v21</p>
      <p
        style={{
          textAlign: "center",
        }}
      >
        To register for the baptism course, click.
      </p>

      <p></p>
      <Link to="/bapreg">
        <button
          style={{
            display: "block",
            margin: "auto",
          }}
        >
          Baptism Class
        </button>
      </Link>

      <p
        style={{
          textAlign: "center",
        }}
      >
        When you are ready for baptism click on:
      </p>
      <Link to="/baplogin">
        <button
          style={{
            display: "block",
            margin: "auto",
          }}
        >
          Get Baptise
        </button>
      </Link>
    </div>

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
          This involves taking the communion by eating the flesh and drinking
          the blood of our Lord Jesus Christ for Sanctification and healing.
        </p>
        <p>
          In the beginning of the new month and of course follow by the program,
          "The voice of the presence of God ", on the first Sunday of the month
          we gather to break the bread and take the cup as our Lord Jesus Christ
          commanded us to do this in His remembrance in Luke 22vs 19.
        </p>

        <p>Remember this take place every first Sunday of the Month at:</p>

        <p style={sympo}>6pm GMT/BST</p>
        <p style={sympo}>7pm CET</p>
        <p style={sympo}>7pm WAT+1</p>
        <p style={sympo}>9pm MSK</p>
        <p style={sympo}>1pm EST</p>
        <p style={sympo}>11am MST</p>

        <p>We would be honoured to have you join us.</p>

        <p>Please bring your own bread and Red Wine without alcohol</p>

        <p>
          To participate in taking the communion please click on zoom link below
          or enter the Meeting 🆔 and the password 🔑
        </p>
        <a href="https://us05web.zoom.us/j/89121384589?pwd=wVkJn7myqUvPWuD2YnFtjZbZ8r6t18.1">
          <button
            style={{
              display: "block",
              margin: "auto",
            }}
          >
            {" "}
            <FaVideo />
            Join Zoom Meeting Link
          </button>
        </a>

        <p>Meeting ID: 891 2138 4589</p>

        <p>Passcode: twfHq8</p>
      </div>
    </div>

    
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

        <div className="conveDiv">
          <p>Acts 1v 4-8</p>

          <p>
            But ye shall receive power, after that the Holy Ghost is come upon
            you: and ye shall be witnesses unto me both in Jerusalem, and in all
            Judaea, and in Samaria, and unto the uttermost part of the earth.
          </p>
          <p>What is the Holy Spirit?</p>
          <p>
            Holy Spirit it´s not a what, but He, the 3rd person of the trinity.
            In Ezekiel chapter 36:25-27 God promise to purify His people, and
            through a new covenant (Jeremiah 31:31-34); He will give a new
            spirit and new dispositions to adore Him.
          </p>

          <p>
            1° God's promise to pour out His Spirit on all flesh is to eradicate
            the aridity of His people and bring them to spiritual flourishing.
            Acts 1 v-8
          </p>

          <p>
            2° The indwelling of His Spirit in us, is to enable us to walk in
            obedience to God and His Word.
          </p>

          <p>
            The work of the Holy Spirit is the ability He gives to men to
            accomplish the tasks for which God has destined them. This consisted
            of making the believers fit for the service that God has entrusted
            to them. Actes 1v-8
          </p>

          <p>
            3° It is the working power of the Holy Spirit that inspires
            prophecies. Joel 2 v 28, John 16 v 13.
          </p>

          <p>Join us at our next Holy Spirit Convention.</p>

          <p>Don’t come alone, Invite someone and be blessed.</p>

          
          <p
          style={{
            textAlign: "center",
            marginBottom: "1.3rem",
            fontWeight: "bolder",
          }}
        >
          CONVENTION BEGINS IN{" "}
        </p>

        <CountdownTimer targetDate={targetDate} />

        <div
          style={{
            height: "1.4rem",
          }}
        ></div>

        <button style={{ display: "flex", margin: "0 auto" }}>
          {" "}
          <a href="https://www.mowdministries.org/events">
            {" "}
            CLICK HERE TO PARTICIPATE IN THIS PROGRAM
          </a>
        </button>

        </div>
      </div>
  

    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="conference">
        <div className="h3text" style={contentStyle}>
          Conference
        </div>
      </div>

      <div>
        <p>
          This service is about Men conference, women conference, youth and
          children conference, under the divine direction of the Holy Spirit to
          anoint and enable for a life of a conqueror.
        </p>
        <p>
          God always visits His people, reveals Himself to them and speaks to
          them. He (God) works out His plan in everyone's life.
        </p>
        <p>Come join us at our Annual Convention at Hamm, Germany.</p>
        <p>Don’t come alone, Invite someone and be blessed.</p>

        <p
          style={{
            textAlign: "center",
            marginBottom: "1.3rem",
          }}
        >
          THE CONFERENCE STARTS IN{" "}
        </p>

        <CountdownTimer targetDate={targetDate} />

        <button
          style={{
            display: "flex",
            margin: "0 auto",
            marginTop: "1.3rem",
          }}
        >
          <a href="https://www.mowdministries.org/events">
            CLICK HERE FOR MORE INFORMATION
          </a>
        </button>
      </div>
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="sympossium">
        <div className="h3text" style={contentStyle}>
          Symposium/Colloque/Seminar{" "}
        </div>
      </div>

      <div>
        <p style={sympo}>2Timothy 2:1-2, AV)</p>
        <p style={sympo}>
          Thou therefore, my son, be strong in the grace that is in Christ
          Jesus. ‭2 And the things that thou hast heard of me among many
          witnesses, the same commit thou to faithful men, who shall be able to
          teach others also.
        </p>
        <p style={sympo}>
          This service brings together Men and women of God, businessmen and,
          business women, politicians and leaders, under the fire of the Holy
          Spirit to revitalize his people and lead them on the path of
          righteousness to make them a holy person and able men and women to
          lead in society.
        </p>

        <p style={sympo}>
          This program includes also Marriage´s seminar, Single´s seminar. You
          and children's seminar.
        </p>

        <p
          style={{
            textAlign: "center",
            marginBottom: "1.3rem",
            fontWeight: "bolder",
          }}
        >
          SYMPOSSIUM BEGINS IN{" "}
        </p>

        <CountdownTimer targetDate={targetDate} />

        <div
          style={{
            marginTop: "1.2rem",
            height: "1.5rem",
          }}
        ></div>

        <Link to="/symporeg">
          <button
            style={{
              marginTop: "1.2rem",
              display: "flex",
              margin: "0 auto",
            }}
          >
            Click to register for next program.
          </button>
        </Link>
      </div>
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="concert">
        <h3 className="h3text" style={contentStyle}>
          Concert
        </h3>
      </div>

      <div>
        <p style={sympo}>
          King David sang, praised, and danced before his GOD, and his enemies
          became barren. What your God wants for you is that you come before him
          in his temple with a shear full heart and all you have and just as you
          are with praise, the fruit of your lips. (Psalm 95:2)
        </p>
        <p style={sympo}>
          The wall of JERICHO crumbles after the children of ISRAEL glorify GOD
          and walk around the wall for 7 days.
        </p>
        <p style={sympo}>
          The people of GOD were delivered from the hands of their enemies under
          the rule of JOSAPHATTS just by singing and glorifying God. (II
          CHRONICLES 20v21-22; 26-29).
        </p>
        <p style={sympo}>
          The lame man knew how to keep his miracle by singing, dancing, jumping
          and praising his God in the temple. (Acts 3v8) PAUL and SILAS sang and
          praised God and the prison doors were broken open.
        </p>
        <p style={sympo}>
          Doors that have been closed for years will open before you when you
          can praise GOD with all your heart, soul and mind.
        </p>

        <p
          style={{
            textAlign: "center",
            marginBottom: "1.3rem",
            fontWeight: "bolder",
          }}
        >
          CONCERT BEGINS IN{" "}
        </p>

        <CountdownTimer targetDate={targetDate} />

        <div
          style={{
            height: "1.4rem",
          }}
        ></div>

        <button style={{ display: "flex", margin: "0 auto" }}>
          {" "}
          <a href="https://www.mowdministries.org/events">
            {" "}
            Click here to Register for Concert
          </a>
        </button>
      </div>
    </div>
  </Carousel>
);
export default EventsApp;
