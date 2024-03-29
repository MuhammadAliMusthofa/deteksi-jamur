import React from "react";
import AboutCard from "../../components/AboutCard";
import dataPerson from "../../data/dataPerson";

function AboutPage() {
  return (
    <>
      <div className="flex flex-wrap">
        {dataPerson.map((item) => {
          return <AboutCard item={item} key={item.id} />;
        })}
      </div>
    </>
  );
}

export default AboutPage;
