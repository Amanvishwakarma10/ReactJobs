import React from "react";
import Cliploader from "react-spinners/Cliploader";

const Override = {
  display: "block",
  margin: "100px auto",
};

const Spinners = ({ loading }) => {
  return (
    <>
      <Cliploader
        color="#4388ca"
        size={50}
        loading={loading}
        cssOverride={Override}
      />
    </>
  );
};

export default Spinners;
