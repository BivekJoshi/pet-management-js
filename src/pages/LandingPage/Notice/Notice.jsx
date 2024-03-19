import React from 'react';
import Vaccination from "../../../assets/Vaccination.png";

const Notice = () => {
  return (
    <div style={{ width: "100%", height: "550px",display:"flex",justifyContent:'center' }}>
      <img src={Vaccination} style={{ width: "60%", height: "100%" }} />
    </div>
  );
}

export default Notice;
