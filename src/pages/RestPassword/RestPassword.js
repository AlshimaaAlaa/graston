import React, { useState } from "react";
import "./style.css";
import MintButton from "../../Common/MintButton";
import Modal from "../../Common/Modal";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function RestPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const {t} =  useTranslation();

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={`restPasswordContainer ${showModal ? "modal-open" : ""}`}>
      <div className="restPasswordContainer__items">
        <div className="mb-3">
          <img
            src="/assets/images/forgot password-01.png"
            alt="reset password"
            width={"182.8px"}
          />
        </div>
        <h4 className="restPasswordContainer__items__h5 text-center fw-bolder">
          {t('restPassword')}
        </h4>
        <p className="restPasswordContainer__items__p text-center 
         mt-3">
        {t('restpasswordP')}
        </p>
        <div className="mt-4">
          <form>
            <div className="d-flex flex-column position-relative">
              <label htmlFor="password" className="fw-bolder mb-3 mt-4 label">
                {t('login.password')}
              </label>
              <input
                id="password"
                placeholder="1234kk@2"
                type={passwordVisible ? "text" : "password"}
                required
                className="restPassword"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <span
                className="passwordToggleIcon"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <div className="d-flex flex-column position-relative">
              <label htmlFor="confirmPassword" className="fw-bolder mb-3 mt-4 label">
                {t('confirmPassword')}
              </label>
              <input
                id="confirmPassword"
                placeholder="1234kk@2"
                type={confirmPasswordVisible ? "text" : "password"}
                required
                className="restPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
              <span
                className="passwordToggleIcon"
                onClick={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
              >
                {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </form>
        </div>
        <div className="saveInfo">
          <MintButton text={t('saveBtn')} onClick={handleShowModal} />
        </div>
      </div>

      <Modal isOpen={showModal} onClose={handleCloseModal}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img
            src="/assets/images/Group 481323.png"
            alt="modal"
            className="mt-5"
            width={"106.57px"}
          />
          <p className="mt-5 text-center">
            Your password has been changed successfully. Use the new password
            for future logins.
          </p>
          <Link to={"/LoginPage"}>
            <div className="modalLoginBtn">
              <MintButton text={"Login"} />
            </div>
          </Link>
        </div>
      </Modal>
    </div>
  );
}

export default RestPassword;
