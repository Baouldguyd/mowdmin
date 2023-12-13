import React from "react";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import ProCarousel from "./ProCarousel";



const ProphecyBook = () => {
  const [selectedBookType, setSelectedBookType] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const bookTypeUrls = {
    hardCover: {
      English: "https://buy.stripe.com/3cs2aq6xh37h8UM9AA",
      Deutsch: "https://buy.stripe.com/4gw4iy8FpfU36ME9AX",
      French: "https://buy.stripe.com/bIY2aqcVF6jt8UM14u",
    },
    softCover: {
      English: "https://buy.stripe.com/00gaGWg7R37h6MEcMV",
      Deutsch: "https://buy.stripe.com/9AQ2aqg7R7nxef600l",
      French: "https://buy.stripe.com/7sI02i2h137hb2U5kI",
    },
    pdf: {
      English: "https://buy.stripe.com/28o5mCbRB8rB3AsbIS",
      Deutsch: "https://buy.stripe.com/9AQaGW7Bl23ddb228u",
      French: "https://buy.stripe.com/eVa16mcVFePZ9YQ5kJ",
    },
    // Add more languages and their corresponding URLs as needed
  };

  const stripePage = () => {
    if (selectedBookType in bookTypeUrls && selectedLanguage in bookTypeUrls[selectedBookType]) {
      window.location.href = bookTypeUrls[selectedBookType][selectedLanguage];
    }
  };

  return (
    <div className="aboutpg">
      <ProCarousel />

      <div className="bookword">
        <h2>PROPHECY And your RESPONSBILITY In its ACCOMPLISHMENTS</h2>
        <p>
          Prophecies and revelations have been given to many people but have
          never seen their fulfillment. Others, through ignorance, could not
          wait and take advantage of the content of the divine message and the
          associated blessings, so they let themselves be caught by the traps of
          the evil one who stole everything from them. We must not forget that
          the enemy came just to steal, to destroy and to kill. This book is a
          projector to enlighten the children of God in their worship hoping to
          obtain what is promised from above.
        </p>

        <select
          name="language"
          id="language"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="">Select Language</option>
          <option value="English">English</option>
          <option value="Deutsch">Deutsch</option>
          <option value="French">French</option>
          {/* Add more languages as needed */}
        </select>

        <select
          name="bookType"
          id="bookType"
          value={selectedBookType}
          onChange={(e) => setSelectedBookType(e.target.value)}
        >
          <option value="">Select Book Format</option>
          <option value="hardCover">Hard Cover</option>
          <option value="softCover">Soft Cover</option>
          <option value="pdf">PDF</option>
        </select>

        <button onClick={stripePage}>
          <FaCartPlus /> Order Now
        </button>
      </div>
    </div>
  );
};

export default ProphecyBook;
