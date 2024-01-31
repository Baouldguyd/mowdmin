import React from "react";
import { FaCheck } from "react-icons/fa";
import torahImg from "../../../Assets/torah.jpg";
import { Link } from "react-router-dom";

const Torah = () => {
  return (
    <div>
      <div className="abouthead">
        <div className="aboutheadimg">
          <img src={torahImg} alt="" />
        </div>

        <div>
          <h3 style={{
            textAlign: 'center',
          }}>The Torah or Pentateuch.</h3>

          <p>
            The Torah or Pentateuch brings together the first five books of the
            Bible: Genesis, Exodus, Leviticus, Numbers and Deuteronomy.
          </p>

          <p>
            “Torah” is often restricted to signify the first five books of the
            Hebrew Bible Old Testament, also called the Law or the Pentateuch,
            in Christianity.
          </p>
          <p>
            These are the books traditionally ascribed to Moses, the recipient
            of the original revelation from God on Mount Sinai.
          </p>
          <p>
            These five books occupy a special place in the structure of the
            Bible.
          </p>
          <p>
            The Torah or Pentateuch is the summary of the true and logical
            introduction of divine revelation contained in the Bible.
          </p>
          <p>
            Their order reminds us of the undeniable experience of the people of
            God throughout the centuries.
          </p>
          <p>
            <FaCheck /> Genesis is the book of the origin of life and the
            decline of man because of sin. It is not limited to the description
            of the heavens and the earth but from a spiritual point of view, it
            illustrates a new creation emerging from chaos and ruin.
          </p>
          <p>
            <FaCheck /> Exodus is the book of redemption that the fallen
            humanity needs.
          </p>
          <p>
            <FaCheck /> The book of Leviticus expresses the normal attitude of
            all redeemed followed by holy living and spiritual growth.
          </p>
          <p>
            <FaCheck /> The book of Numbers describes the pilgrimage of the
            redeemed people of God, in a world hostile to the Promised Land.
          </p>

          <p>
            <FaCheck /> Deuteronomy comes from the Greek word Deuteronomy, which
            means second law and has retrospective and prospective value. It
            says as a second law to instruct the redeemed who is about to take
            possession of his inheritance.
          </p>

          <Link to='/bible'>
          <button style={{
            display: 'flex',
            margin: "0 auto"
          }}>
            Click here to Open Torah
          </button>
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default Torah;
