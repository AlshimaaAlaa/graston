import React from "react";
import "./style.css";
import MintButton from "../../Common/MintButton";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ForgotPassword() {
  const { t } = useTranslation();
  return (
    <div className="forgotPasswordContainer">
      <div className="forgotPasswordContainer__items">
        <div className="mt-4 mb-3">
          <img
            src="/assets/images/forgot password-03.png"
            alt="forgot password"
            width={"182.8px"}
          />
        </div>
        <h4 className="forgotPasswordContainer__h4 mt-2 fw-bolder">
          {t("forgotPassword")}{" "}
        </h4>
        <p
          className="forgotPasswordContainer__p text-center mt-4"
          style={{ fontSize: "15px" }}
        >
          {t("forgotP")}
        </p>
        <div className="d-flex flex-column">
          <label className=" mt-3 mb-2 fw-bolder label">{t("register.phone")}</label>
          <div className="d-flex mt-3 mb-3">
            <div className="d-flex align-items-center justify-content-center forgotPasswordContainer__phoneCode">
              <img
                src="/assets/images/Group 481318.png"
                width={"33.23px"}
                className=""
                alt="forgot password"
              />
              <p className="mb-1" style={{ color: "#646464", width: "38px" }}>
                +966
              </p>
            </div>
            <div className="">
              <input
                placeholder="Your Phone Number"
                className="forgotPasswordContainer__phone "
              />
            </div>
          </div>
        </div>
        <Link to={"/VerifayPhone"}>
          <div className="sendCodeBtn mt-3 mb-3">
            <MintButton text={t('sendCode')} />
          </div>
        </Link>

        <p className="mt-3 mb-4 text-center" style={{ color: "#2F9C95" }}>
          <span
            className="text-decoration-none me-2"
            style={{ color: "#646464" }}
          >
            {t('login.or')}
          </span>{" "}
          <Link to={"/ForgotPasswordEmail"} className="verifay">
            {t('verfiay')}
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
