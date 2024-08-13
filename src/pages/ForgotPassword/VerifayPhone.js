import React from "react";
import "./style.css";
import MintButton from "../../Common/MintButton";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function VerifayPhone() {
  const { t } = useTranslation();
  return (
    <div className="VerifayPhoneContainer">
      <div className="VerifayPhoneContainer__items">
        <div className="mb-4">
          <img
            src="/assets/images/Frame 49.png"
            alt="verifay phone number"
            width={"182.8px"}
          />
        </div>
        <h4 className="VerifayPhoneContainer__h4 fw-bolder text-center">
          {t("verifayNumber")}
        </h4>
        <p className="VerifayPhoneContainer__p text-center mt-4 mb-4">
          {t("verifayP")}
        </p>
        <div className="VerifayPhoneContainer__inputs">
          <input />
          <input />
          <input />
          <input />
        </div>
        <Link to={"/RestPassword"}>
          <div className="mt-4 confirmCode">
            <MintButton text={t("confirm")} />
          </div>
        </Link>
        <p className="sendCode mt-4 me-5">
          {t("sendAgin")}
          <span
            className="ms-5 text-decoration-none me-3 "
            style={{ color: "#000" }}
          >
            {t("second")}
          </span>
        </p>
      </div>
    </div>
  );
}

export default VerifayPhone;
