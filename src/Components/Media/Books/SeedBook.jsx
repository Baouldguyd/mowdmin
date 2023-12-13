import React from "react";
import SeedCarousel from "./SeedCarousel";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";

const SeedBook = () => {
  const [selectedBookType, setSelectedBookType] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const bookTypeUrls = {
    hardCover: {
      English: "https://buy.stripe.com/fZe7uKdZJfU3b2UcMO",
      Deutsch: "https://buy.stripe.com/aEU6qG9JtdLVc6Y4gJ",
      French: "https://buy.stripe.com/fZe3eu7BlcHR3As14y",
    },
    softCover: {
      English: "https://buy.stripe.com/28o4iyg7R0Z92wodQV",
      Deutsch: "https://buy.stripe.com/6oE9CS2h1gY70ogfZp",
      French: "https://buy.stripe.com/14k3eug7R0Z94Ew3cI",
    },
    pdf: {
      English: "https://buy.stripe.com/9AQcP4dZJ23d8UM6ou",
      Deutsch: "https://buy.stripe.com/dR6g1g9Jt5fpb2U4gI",
      French: "https://buy.stripe.com/14k9CS5td4bl6ME00v",
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

export default SeedBook;
