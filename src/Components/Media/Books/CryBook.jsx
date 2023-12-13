import React, { useState } from "react";
import CryBookCarousel from "./CryCarousel";
import { FaCartPlus } from "react-icons/fa";

const CryBook = () => {
  const [selectedBookType, setSelectedBookType] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const bookTypeUrls = {
    hardCover: {
      English: "https://buy.stripe.com/fZe7uKdZJfU3b2UcMO",
      Deutsch: "https://buy.stripe.com/9AQ16mdZJ37h1skfZf",
      French: "https://buy.stripe.com/00g9CScVF37hc6YfZi",
    },
    softCover: {
      English: "https://buy.stripe.com/28o4iyg7R0Z92wodQV",
      Deutsch: "https://buy.stripe.com/dR6cP49Jt7nxgne8wL",
      French: "https://buy.stripe.com/28o6qG9JtdLV9YQdR8",
    },
    pdf: {
      English: "https://buy.stripe.com/9AQcP4dZJ23d8UM6ou",
      Deutsch: "https://buy.stripe.com/eVadT8cVF0Z9gne5kA",
      French: "https://buy.stripe.com/4gw9CS8Fp7nx0og9AT",
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
      <CryBookCarousel />

      <div className="bookword">
        <h2>The cry of the image of God.</h2>

        <p>
          {/* Your book description */}
          Beneath the effect of the harmful consequences of his actions, man,
          created in the image of God, is forced to cry out the cry of despair.
          A cry of sorrow and selfishness at the same time. Why me??? Why is it
          me??? Why and Why??? A cry that is heard by all and that embraces even
          those who claim the Christian name. That distress cry, often uttered
          by most people, and which makes us question whether God really
          exists, has its answer and can be lifted from our lips if we as human
          beings want to understand our position towards the divine jurisdiction
          concerning our lives. This book is a teaching to enlighten the ways of
          the children of God on this subject.
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

export default CryBook;
