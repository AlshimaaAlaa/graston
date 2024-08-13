import React ,{useState} from "react";
import "./style.css";
import MintButton from "../../Common/MintButton";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { forgetPasswordVerifyOTP } from "../../api/userApi/authApi";
import { useSelector } from "react-redux";
function VerifayEmail() {
  const { t } = useTranslation();
  const userID = useSelector((state) => state.userID["user_id"]); // Get user ID from redux store
  const userEmail = useSelector((state) => state.userID["user_email"]); // Get user email from redux store

  // Store OTP code digits from the 4 input fields
  const [otpCode1, setOtpCode1] = useState("");
  const [otpCode2, setOtpCode2] = useState("");
  const [otpCode3, setOtpCode3] = useState("");
  const [otpCode4, setOtpCode4] = useState("");

  const navigate = useNavigate(); // Navigate to other pages

  // Handle verifying the OTP code: 4 digits , end-point call
  const handleVerifyOTP = async () => {
    const otpCode = {
      otp: parseInt(`${otpCode1}${otpCode2}${otpCode3}${otpCode4}`),
    };
    console.log(otpCode);
    try {
      const response = await forgetPasswordVerifyOTP(userID, otpCode);
      console.log(response);
      navigate("/RestPassword");
    } catch (error) {
      alert("Error Verifying OTP Code ,", error.message);
    }
  };

  return (
    <div className="verifayEmailContainer">
      <div className="verifayEmailContainer__items">
        <div className="mt-5 mb-3">
          <img
            src="/assets/images/forgot password-02.png"
            alt="verifay email"
            width={"182.8px"}
          />
        </div>
        <h4 className="verifayEmailContainer__h4 fw-bolder">
          {t("verifayEmail")}
        </h4>
        <p
          className="verifayEmailContainer__P text-center mt-4 "
          style={{ fontSize: "15px" }}
        >
          {t("emailMessage")} {userEmail}
        </p>
        <div className="verifayEmailContainer__inputs mt-3">
          <input
            type="text"
            maxlength="1"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
              setOtpCode1(e.target.value);
            }}
          />
          <input
            type="text"
            maxlength="1"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
              setOtpCode2(e.target.value);
            }}
          />
          <input
            type="text"
            maxlength="1"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
              setOtpCode3(e.target.value);
            }}
          />
          <input
            type="text"
            maxlength="1"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
              setOtpCode4(e.target.value);
            }}
          />
        </div>
        <Link to={"/RestPassword"}>
          <div className="mt-4 confirmCode">
            <MintButton text={t("confirm")} onClick={handleVerifyOTP} />
          </div>
        </Link>
        <p className="sendCode mt-4 mb-5">
          {t("sendAgin")}
          <span className="ms-5 text-decoration-none" style={{ color: "#000" }}>
            {t("second")}
          </span>
        </p>
      </div>
    </div>
  );
}

export default VerifayEmail;
