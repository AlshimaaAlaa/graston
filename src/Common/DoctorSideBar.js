import React from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "../Svg/Favorite.svg";
import ProfileIcon from "../Svg/Profile.svg";
import PaymentIcon from "../Svg/Payment.svg";
import HelpIcon from "../Svg/Help.svg";
import SettingsIcon from "../Svg/Setting.svg";
import PrivacyIcon from "../Svg/Privacy.svg";
import LogoutIcon from "../Svg/Logout.svg";
import { useTranslation } from "react-i18next";

function DoctorSideBar() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="settingContainer__item1 p-5">
        <h3 className="fw-bolder">
          {t("patientWelcome")}{" "}
          <span style={{ color: "#2f9c95" }}>{t("DoctorName")}</span>
        </h3>
        <p className="" style={{ color: "#2f9c95" }}>
          Ahmad@gmail.com
        </p>
        <div className="settingsItems mt-5">
          <Link to={"/"} className="nav-item">
            <div className="d-flex">
              <ProfileIcon className="nav-icon" />
              <p className="fw-bolder ms-3 nav-text">{t("Profile Data")}</p>
            </div>
          </Link>
          <Link to={"/favorites"} className="nav-item">
            <div className="d-flex">
              <FavoriteIcon className="nav-icon" />
              <p className="fw-bolder ms-3 nav-text">{t("Favorites")}</p>
            </div>
          </Link>
          <Link to={"/payment"} className="nav-item">
            <div className="d-flex">
              <PaymentIcon className="nav-icon" />
              <p className="fw-bolder ms-3 nav-text">{t("Payment")}</p>
            </div>
          </Link>
          <Link to={"/help"} className="nav-item">
            <div className="d-flex">
              <HelpIcon className="nav-icon" />
              <p className="fw-bolder ms-3 nav-text">{t("Help & Support")}</p>
            </div>
          </Link>
          <Link to={"/SettingsDoctor"} className="nav-item">
            <div className="d-flex">
              <SettingsIcon className="nav-icon" />
              <p className="fw-bolder ms-3 nav-text">{t("settings")}</p>
            </div>
          </Link>
          <Link to={"/privacy"} className="nav-item">
            <div className="d-flex">
              <PrivacyIcon className="nav-icon" />
              <p className="fw-bolder ms-3 nav-text">{t("Privacy & Policy")}</p>
            </div>
          </Link>
          <hr />
          <Link to={"/logout"} className="nav-item">
            <div className="d-flex">
              <LogoutIcon className="nav-icon" />
              <p className="fw-bolder text-danger ms-3 nav-text">{t("Log Out")}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DoctorSideBar;
