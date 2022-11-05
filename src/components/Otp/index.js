import { useState } from "react";
import Modal from "react-modal";
import OtpInput from "react-otp-input";
import { FaLock } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Otp.css";

function Otp(props) {
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleVerifyClick = () => {
    if (otp === "123456") {
      setOtp("");
      navigate("/dashboard");
    } else {
      setErrorMessage("Wrong Verification Code");
    }
  };

  const handleChange = (otp) => setOtp(otp);
  return (
    <Modal
      isOpen={props.showModal}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        },
        content: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "500px",
          width: "450px",
          height: "400px",
          margin: "7% auto",
          borderRadius: "10px",
          minWidth: "20px",
        },
      }}
    >
      <FaTimes
        size={25}
        onClick={props.onCLose}
        style={{ margin: "-15px -410px 0 0", cursor: "pointer" }}
      />
      <h1
        style={{
          color: "white",
          backgroundColor: "rgb(145, 4, 46)",
          width: "70px",
          height: "70px",
          marginTop: "-8px",
          borderRadius: "100%",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FaLock />
      </h1>
      <h1 style={{ color: "rgb(60, 60, 60)", marginTop: "-7px" }}>
        Verification Code
      </h1>
      <h4 style={{ color: "gray", marginTop: "0px" }}>
        Please enter the Verification Code sent to your Email.
      </h4>
      <OtpInput
        inputStyle="inputStyle"
        value={otp}
        onChange={handleChange}
        numInputs={6}
        separator={<span>-</span>}
      />
      <span style={{ color: "red", marginTop: "15px" }}>{errorMessage}</span>
      <button className="submit-btn" onClick={() => handleVerifyClick()}>
        Confirm
      </button>
      <span
        style={{
          color: "rgb(145, 4, 46)",
          marginTop: "20px",
          cursor: "pointer",
        }}
      >
        Resend Code
      </span>
    </Modal>
  );
}

export default Otp;
