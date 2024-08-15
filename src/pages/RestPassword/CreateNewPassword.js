import React, { useState } from "react";
import "./style.css";
import MintButton from "../../Common/MintButton";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Modal from "../../Common/Modal";
function CreateNewPassword({ onClick }) {
  const { t } = useTranslation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // const handleOpenModal = () => {
  //   setShowModal(true);
  // };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const validationSchema = Yup.object({
    // email: Yup.string().email("Invalid email format*").required("Required*"),
    old_password: Yup.string()
      .required("Required*")
      .min(6, "Password must be at least 6 characters*"),
    password: Yup.string()
      .required("Required*")
      .min(6, "Password must be at least 6 characters*"),
    confirm_password: Yup.string()
      .required("Required*")
      .min(6, "Password must be at least 6 characters*"),
    // phone_number: Yup.number()
    //   .required("Required*")
    //   .test(
    //     "len",
    //     "Must be exactly 11 digits",
    //     (val) => val && val.toString().length === 11
    //   ),
  });

  const initialValues = {
    old_password: "",
    password: "",
    confirm_password: "",
  };

  const onSubmit = async (values) => {
    // Handle form submission
    setShowModal(true);
    console.log(values);
  };

  return (
    <div className={`RestPasswordContainer ${showModal ? "modal-open" : ""}`}>
      <div className="RestPasswordContainer__items">
        <h5 className="RestPasswordContainer__h5 fw-bolder mt-2">
          {t("createNewPassword")}
        </h5>
        <div className="formContainer">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {() => (
              <Form className="RestPasswordForm">
                <div className="position-relative">
                  <label
                    htmlFor="password"
                    className="d-block fw-bolder mb-2 fs-6"
                  >
                    {t("login.password")}
                  </label>
                  <Field
                    type={passwordVisible ? "text" : "password"}
                    id="old_password"
                    name="old_password"
                    placeholder="1234kk@2"
                    className="restPassword"
                  />
                  <span
                    className="passwordToggleIcon"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                  </span>
                  <ErrorMessage
                    name="old_password"
                    className="text-danger mt-2"
                    component="div"
                  />
                </div>
                <div className="align-self-end mt-2">
                  <Link className="text-decoration-none" to={"/ForgotPassword"}>
                    <p style={{ color: "#2F9C95" }} className=" mt-1">
                      {t("forgot")}
                    </p>
                  </Link>
                </div>
                <div className="position-relative">
                  <label htmlFor="password" className="d-block fw-bolder ">
                    {t("newPassword")}
                  </label>
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
                    {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                  </span>
                  <ErrorMessage
                    name="password"
                    className="text-danger mt-2"
                    component="div"
                  />
                </div>
                <div className="position-relative">
                  <label htmlFor="password" className="d-block fw-bolder mt-3">
                    {t("confirmPassword")}
                  </label>
                  <Field
                    type={passwordVisible ? "text" : "password"}
                    id="confirm_password"
                    name="confirm_password"
                    placeholder="1234kk@2"
                    className="restPassword"
                  />
                  <span
                    className="passwordToggleIcon"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                  </span>
                  <ErrorMessage
                    name="confirm_password"
                    className="text-danger mt-2"
                    component="div"
                  />
                </div>
                <div className="saveInfo ">
                  <MintButton text={t("saveBtn")} btnType={"submit"} />
                </div>
              </Form>
            )}
          </Formik>
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

export default CreateNewPassword;
