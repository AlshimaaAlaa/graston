import React, { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
import Modal from "../../../Common/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import MintButton from "../../../Common/MintButton";
import CreateNewPassword from "../../RestPassword/CreateNewPassword";
import DoctorSideBar from "../../../Common/DoctorSideBar";
function SettingsDoctor() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const { t } = useTranslation();

  const handleOpenModal = (type) => {
    setModalContent(type);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  const initialValues = {
    email: "",
    phone_number: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format*").required("Required*"),
    password: Yup.string()
      .required("Required*")
      .min(6, "Password must be at least 6 characters*"),
    phone_number: Yup.number()
      .required("Required*")
      .test(
        "len",
        "Must be exactly 11 digits",
        (val) => val && val.toString().length === 11
      ),
  });

  const onSubmit = async (values) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <div className={`settingContainer d-flex ${showModal ? "modal-open" : ""}`}>
      <DoctorSideBar/>
      <div className="settingContainer__item2 p-5 mt-1">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form className="contactInfo__form ">
              <h2 className="ps-5 pb-3 fw-bolder">{t("contactInfo")}</h2>
              <div className="contactInfo__form__item1 p-5 ">
                <div className="d-flex align-items-center">
                  <div>
                    <label htmlFor="email" className="d-block fw-bolder mb-2">
                      {t("login.email")}
                    </label>
                    <div className="d-flex">
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Ahmed@gmail.com"
                        className="email"
                      />
                      <button
                        type="button"
                        className="changeEmail fw-bolder ms-5 m"
                        onClick={() => handleOpenModal("changeEmail")}
                      >
                        {t("changeEmail")}
                      </button>
                    </div>
                    <ErrorMessage
                      name="email"
                      className="text-danger fw-bolder mt-3"
                      component="div"
                    />
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <label
                      htmlFor="phone_number"
                      className="d-block fw-bolder mt-5 mb-2"
                    >
                      {t("register.phone")}
                    </label>
                    <div className="d-flex">
                      <div
                        id="phoneNumber"
                        className="d-flex justify-content-center align-items-center"
                      >
                        <img
                          src="/assets/images/Group 481318.png"
                          alt="country code"
                          width={"33.23px"}
                          height={"24px"}
                        />
                        <p
                          style={{
                            color: "#646464",
                            width: "38px",
                            height: "11px",
                          }}
                        >
                          +966
                        </p>
                      </div>
                      <div>
                        <Field
                          type="text"
                          id="phone_number"
                          name="phone_number"
                          className="ms-3 phone"
                          placeholder="Your Phone Number"
                        />
                        <button
                          type="button"
                          className="changePhone fw-bolder ms-5"
                          onClick={() => handleOpenModal("changePhone")}
                        >
                          {t("changePhone")}
                        </button>
                      </div>
                    </div>
                    <ErrorMessage
                      name="phone_number"
                      className="text-danger fw-bolder mt-3"
                      component="div"
                    />
                  </div>
                </div>
              </div>
              <h2 className="mt-5 ps-5 fw-bolder">{t("security")}</h2>

              <div className="contactInfo__form__item2 p-5   d-flex align-items-center">
                <div className="position-relative">
                  <label
                    htmlFor="password"
                    className="d-block fw-bolder mb-2 fs-6 mt-4"
                  >
                    {t("login.password")}
                  </label>
                  <div>
                    <Field
                      type={passwordVisible ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="1234kk@2"
                      className="restPassword"
                    />
                    <span
                      className="passwordToggleIcon"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      {/* {passwordVisible ? <FaEye /> : <FaEyeSlash />} */}
                    </span>
                    <button
                      type="button"
                      className="changePassword ms-5 fw-bolder"
                      onClick={() => handleOpenModal("changePassword")}
                    >
                      {t("changePassword")}
                    </button>
                  </div>

                  <ErrorMessage
                    name="password"
                    className="text-danger fw-bolder mt-2"
                    component="div"
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <Modal isOpen={showModal} onClose={handleCloseModal}>
        {modalContent === "changeEmail" && (
          <div className="d-flex flex-column justify-content-center align-items-center p-4">
            <h3 className="fw-bolder mt-5">{t("changeEmail")}</h3>
            <p className="text-center mt-4 mb-3">{t("validateChange")}</p>
            <Formik
              initialValues={{ email: "" }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Invalid email format*")
                  .required("Required*"),
              })}
              onSubmit={(values) => {
                console.log(values);
                handleOpenModal("verifyEmail");
              }}
            >
              <Form className="mt-4">
                <label htmlFor="email" className="d-block fw-bolder mb-2">
                  {t("login.email")}
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ahmed@gmail.com"
                  className="email"
                />
                <ErrorMessage
                  name="email"
                  className="text-danger mt-2"
                  component="div"
                />
                <div className="sendCodeBtn">
                  <MintButton
                    text={t("sendCode")}
                    onClick={() => handleOpenModal("verifyEmail")}
                  />
                </div>
              </Form>
            </Formik>
          </div>
        )}
        {modalContent === "changePhone" && (
          <div className="d-flex flex-column justify-content-center align-items-center p-4">
            <h3 className="fw-bolder mt-5" style={{ color: "#2f9c95" }}>
              {t("changePhone")}
            </h3>
            <p className="text-center mt-4 mb-3">{t("changePhoneP")}</p>
            <Formik>
              <Form>
                <div className="d-flex align-items-center">
                  <div>
                    <label
                      htmlFor="phone_number"
                      className="d-block fw-bolder mt-5 mb-2"
                    >
                      {t("register.phone")}
                    </label>
                    <div className="d-flex">
                      <div
                        id="phoneNumber"
                        className="d-flex justify-content-center align-items-center"
                      >
                        <img
                          src="/assets/images/Group 481318.png"
                          alt="country code"
                          width={"33.23px"}
                          height={"24px"}
                        />
                        <p
                          style={{
                            color: "#646464",
                            width: "38px",
                            height: "11px",
                          }}
                        >
                          +966
                        </p>
                      </div>
                      <div>
                        <Field
                          type="text"
                          id="phone_number"
                          name="phone_number"
                          className="ms-3 phone"
                          placeholder="Your Phone Number"
                        />
                      </div>
                    </div>
                    <ErrorMessage
                      name="phone_number"
                      className="text-danger fw-bolder mt-3"
                      component="div"
                    />
                  </div>
                </div>
                <div className="loginBtn fs-5">
                  <MintButton
                    text={t("sendCode")}
                    onClick={() => handleOpenModal("verifyPhone")}
                  />
                </div>
              </Form>
            </Formik>
          </div>
        )}
        {modalContent === "changePassword" && (
          <div className="d-flex flex-column justify-content-center align-items-center p-4">
            <CreateNewPassword
              onClick={() => handleOpenModal("confirmNewPassword")}
            />
          </div>
        )}
        {modalContent === "verifyEmail" && (
          <div className="d-flex justify-content-center align-items-center flex-column p-4 mt-5">
            <h3 className="fw-bolder mt-4 ">{t("verifayEmail")}</h3>
            <p className="mt-3 mb-3 text-center">{t("emailMessage")}</p>

            <form className="d-flex justify-content-center align-items-center ">
              <div className="inputs">
                <input />
                <input />
                <input />
                <input />
              </div>
            </form>

            <div className="confirmCode">
              <MintButton text={t("confirm")} />
            </div>
          </div>
        )}
        {modalContent === "verifyPhone" && (
          <div className="d-flex justify-content-center align-items-center flex-column p-4 mt-5">
            <h3 className="fw-bolder mt-4 ">{t("verifyPhone")}</h3>
            <p className="mt-3 mb-3 text-center">{t("phoneMessage")}</p>

            <form className="d-flex justify-content-center align-items-center ">
              <div className="inputs">
                <input />
                <input />
                <input />
                <input />
              </div>
            </form>

            <div className="confirmCode">
              <MintButton text={t("confirm")} />
            </div>
          </div>
        )}

        {modalContent === "verifyPassword" && (
          <div className="d-flex justify-content-center align-items-center flex-column p-4 mt-5">
            <h3 className="fw-bolder mt-4 ">{t("verifyPhone")}</h3>
            <p className="mt-3 mb-3 text-center">{t("phoneMessage")}</p>

            <form className="d-flex justify-content-center align-items-center ">
              <div className="inputs">
                <input />
                <input />
                <input />
                <input />
              </div>
            </form>

            <div className="confirmCode">
              <MintButton text={t("confirm")} />
            </div>
          </div>
        )}

        {modalContent === "confirmNewPassword" && (
          <div className="d-flex justify-content-center align-items-center flex-column p-4 mt-5">
            <div>
              <img
                src="/assets/images/Group 481323.png"
                alt="confirm new password"
                width={""}
                height={""}
              />
            </div>
            <p>{t("confirmPasswordP")}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default SettingsDoctor;
