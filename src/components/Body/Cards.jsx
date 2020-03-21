import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="cards">
      <div className="center-line"></div>
      <div className="cards_Box">
        <Card
          cls="Card_One"
          logo="icon-brand-recognition.svg"
          heading="Brand Recognition"
          content="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
        />
        <Card
          cls="Card_Two"
          logo="icon-detailed-records.svg"
          heading="Detailed Records"
          content="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        />
        <Card
          cls="Card_Three"
          logo="icon-fully-customizable.svg"
          heading="Fully Customizable"
          content="Improve brand awareness and content discoverabilty through customizable links, supercharging audience engagement."
        />
      </div>
    </div>
  );
};

export default Cards;
