import React, { useState } from "react";
import "./style.css";
import MintButton from "../../Common/MintButton";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
function CreateNewPassword({onClick}) {
  const { t } = useTranslation();
  const [passwordVisible, setPasswordVisible] = useState(false);

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
    <div className="RestPasswordContainer">
      <div className="RestPasswordContainer__items">
        <h5 className="RestPasswordContainer__h5 fw-bolder mt-2">
          {t("createNewPassword")}
        </h5>
        <div className="formContainer">
          <Formik
            // initialValues={initialValues}
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
                <div className="align-self-end mt-2">
                  <p style={{ color: "#2F9C95" }} className=" mt-1">
                    {t("forgot")}
                  </p>
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
                <div className="saveInfo ">
                  <MintButton text={t("saveBtn")}/>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default CreateNewPassword;
