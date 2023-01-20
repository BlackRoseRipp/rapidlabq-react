import React from "react";

const EmbedMap = (props) => {
  const mapSource = props.src;

  return (
    <div className="h-[700px] border border-blue-light rounded-xl overflow-hidden w-full">
      <iframe
        style={{ position: "relative", top: "-70px", border: "none" }}
        src={mapSource}
        width="100%"
        height="770px"
      ></iframe>
    </div>
  );
};

export default EmbedMap;
