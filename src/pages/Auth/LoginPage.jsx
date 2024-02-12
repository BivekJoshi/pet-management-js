import React, { useState } from "react";
import Image from "../../assets/login_image.png";
import LoginImage from "../../assets/Logo-login.png";
import "../../app.css";
import TextField from "@mui/material/TextField";
import googleIcon from"../../assets/devicon_google.png"

const LoginPage = () => {
  const [input, setInput] = useState();

  return (
    <div
      className="login-Page"
      style={{ display: "grid",gridTemplateColumns:"1fr 1fr", justifyItems: "space-between" }}
    >
      <div style={{ width: "100%"}}>
        <div className="logo" style={{ display: "flex", alignItems: "center"}}>
          <img
            src={LoginImage}
            alt="logo"
            style={{ height: "35px", width: "150px" }}
          ></img>
        </div>
        <div style={{ width: "80%",height:"80vh", margin:"3rem", padding:"2rem"}}  >
        {/* <div
          className="Login-Form"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        > */}
          <div
            className="welcome"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <h1 style={{margin:"0"}}>Welcome !</h1>
            <p style={{marginBottom:"2rem"}}>The faster you fill up, the faster you get a ticket</p>
          </div>
        
        <div className="form"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.7rem",
          }}
        >
          <TextField
            fullWidth
            sx={{ width: "50ch", borderRadius:"25px" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            fullWidth
            sx={{ width: "50ch",borderRadius:"25px" }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
        </div>

        <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap", marginTop:"1rem"}}>
          <div>
            {" "}
            <label>
              <input type="checkbox" />{" "}
              Remember Me
            </label>
          </div>
          <div><a>Forgot Your Password?</a> </div>
        </div>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
          <button style={{width:"55ch",height:"38px",color:"white",backgroundColor:"#45BBBD",borderRadius:"5px",margin:"1.5rem"}}><b>Login Now</b></button>
          <button style={{width:"55ch",height:"38px",borderRadius:"5px"}}><img src={googleIcon} style={{height:"20px",width:"20px"}} /> {" "}Sign In with Google</button>
        </div>
        </div>
      </div>
      <div className="login-img" style={{ maxWidth: "100%",overflow:"hidden"}}>
        <img src={Image} style={{ height: "100vh", width: "100%", display:"block",margin:"0 auto" }} />
      </div>
    </div>
  );
};

export default LoginPage;
