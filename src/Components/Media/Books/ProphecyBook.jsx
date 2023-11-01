import React from "react";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import ProCarousel from "./ProCarousel";



const ProphecyBook = () => {
  const [selectedBookType, setSelectedBookType] = useState();

  const bookTypeUrls = {
    hardCover: "https://buy.stripe.com/eVaaGW08TfU35IAaEF",
    softCover: "https://buy.stripe.com/28o2aq2h17nxc6Y8wD",
    pdf: "https://buy.stripe.com/cN202i8FpcHR3As8wE",
  };

  const stripePage = () => {
    if (selectedBookType in bookTypeUrls) {
      window.location.href = bookTypeUrls[selectedBookType];
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
          name="bookType"
          id="bookType"
          value={selectedBookType}
          onChange={(e) => setSelectedBookType(e.target.value)}
        >
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
