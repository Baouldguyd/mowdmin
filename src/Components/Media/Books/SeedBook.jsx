import React from "react";
import SeedCarousel from "./SeedCarousel";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";

const SeedBook = () => {
  const [selectedBookType, setSelectedBookType] = useState("");

  const bookTypeUrls = {
    hardCover: "https://buy.stripe.com/3cs2aq6xh37h8UM9AA",
    softCover: "https://buy.stripe.com/00gaGWg7R37h6MEcMV",
    pdf: "https://buy.stripe.com/28o5mCbRB8rB3AsbIS",
  };

  const stripePage = () => {
    if (selectedBookType in bookTypeUrls) {
      window.location.href = bookTypeUrls[selectedBookType];
    }
  };

  return (
    <div className="aboutpg">
      <SeedCarousel />
      <div className="bookword">
        <h2>The Seed of the Blessing</h2>
        <p>
          The healing that any man claiming the name of Christian hopes for
          today is not only that of a physical or mental illness, but it is also
          the healing and deliverance from the financial and material illness
          that ravages all nations and which remains the prerogative of the
          Christian world. If we look at the daily life of the majority and
          especially of the children of God, we find that there is only distress
          and frustration linked to a situation of chronic poverty, absence and
          deprivation of material blessings, lack of wealth that we hoped to
          have. Is this situation normal? Does it constitute the fatal goal of
          our Christian destiny? Certainly not, because our Christian attribute
          predisposes us above all to blessing, consecration and fullness in all
          areas. But for the Christian of today, it seems that the way of
          blessing is hidden from him. Discover in this book what true blessing
          of God is
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

export default SeedBook;
