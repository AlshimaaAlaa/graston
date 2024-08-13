import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RegisterPageStyle.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import MintButton from "../../Common/MintButton";
import { registerPatientApi } from "../../api/userApi/authApi";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LightBtn from "../../Common/LightBtn";
function RegisterAsPatient() {
  const { t } = useTranslation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  var newUser = {
    user: {},
  };
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    national_id: null,
    nationality: "",
    date_of_birth: "mm/dd/yyyy",
    phone_number: null,
    country: "",
    city: "",
    gender: "",
    chronic_diseases: null,
    medical_report: null,
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required("required*"),
    last_name: Yup.string().required("required*"),
    email: Yup.string().email("Invalid email format*").required("Required*"),
    password: Yup.string()
      .required("Required*")
      .min(6, "Password must be at least 6 characters*"),
    national_id: Yup.number()
      .required("required*")
      .test(
        "len",
        "Must be exactly 11 digits",
        (val) => val && val.toString().length === 11
      ),
    nationality: Yup.string().required("required*"),
    date_of_birth: Yup.date().required("required*"),
    phone_number: Yup.number()
      .required("required*")
      .test(
        "len",
        "Must be exactly 11 digits",
        (val) => val && val.toString().length === 11
      ),
    country: Yup.string().min(3, "At least 3 letters").required("Required*"),
    city: Yup.string().min(3, "At least 3 letters").required("required*"),
    gender: Yup.string().required("Required"),
    chronic_diseases: Yup.mixed()
      .nullable()
      .notRequired()
      .test("fileFormat", "Only PDF files are accepted", (value) => {
        if (!value) return true; // Allow empty values
        return value && value.type === "application/pdf";
      }),
    medical_report: Yup.mixed()
      .nullable()
      .notRequired()
      .test("fileFormat", "Only PDF files are accepted", (value) => {
        if (!value) return true; // Allow empty values
        return value && value.type === "application/pdf";
      }),
  });

  const onSubmit = async (values) => {
    console.log("Form data", values);
    for (const property in values) {
      console.log(property, values[property]);
      if (property !== "chronic_diseases" && property !== "medical_report") {
        newUser.user[`${property}`] = values[property];
      } else {
        if (values[property] !== null) {
          newUser[`${property}`] = values[property];
        }
      }
    }
    console.log(newUser);
    try {
      const response = await registerPatientApi(newUser);
      console.log(response);
      navigate("/loginPage");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="registerAsPatient">
      <div className="registerAsPatient__item1">
        <h2 className="text-center">جــــــــــراســــــــــــــتون</h2>
        <p className="fw-bolder text-center mb-5 mt-3">
          {t("register.patient")}
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ setFieldValue }) => (
            <Form>
              <div className="nameItems">
                <div className="">
                  <label
                    htmlFor="first_name"
                    className="d-block fw-bolder mb-2"
                  >
                    {t("register.firstName")}
                  </label>
                  <Field
                    type="text"
                    id="first_name"
                    name="first_name"
                    className="name"
                    placeholder="Ahmed"
                  />
                  <ErrorMessage
                    name="first_name"
                    className="text-danger fw-bolder mt-3"
                    component="div"
                  />
                </div>
                <div className="lastName">
                  <label
                    htmlFor="last_name"
                    className="d-block mb-2 fw-bolder label"
                  >
                    {t("register.lastName")}
                  </label>
                  <Field
                    type="text"
                    id="last_name"
                    name="last_name"
                    className="name"
                    placeholder="Mohamed"
                  />
                  <ErrorMessage
                    name="last_name"
                    className="text-danger fw-bolder mt-3"
                    component="div"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone_number"
                  className="d-block fw-bolder mt-5 mb-2"
                >
                  {t("register.phone")}
                </label>
                <div className="d-flex justify-content-between">
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
                  <Field
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    className="ms-3"
                    placeholder="Your Phone Number"
                  />
                </div>
                <ErrorMessage
                  name="phone_number"
                  className="text-danger fw-bolder mt-3"
                  component="div"
                />
              </div>
              <div>
                <label htmlFor="email" className="d-block fw-bolder mt-5 mb-2">
                  {t("login.email")}
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="d-block emailField"
                  placeholder="abdullah@gmail.com"
                />
                <ErrorMessage
                  name="email"
                  className="text-danger fw-bolder mt-3"
                  component="div"
                />
              </div>
              <div className="position-relative">
                <label
                  htmlFor="password"
                  className="d-block fw-bolder mb-2 fs-6 mt-4"
                >
                  {t("login.password")}
                </label>
                <Field
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  className="passwordFiled"
                  placeholder="1234kk@2"
                />
                <span
                  className="passwordToggleIcon"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                </span>
                <ErrorMessage
                  className="text-danger mt-2 fw-bolder"
                  name="password"
                  component="div"
                />
              </div>
              <p
                className="text-center mt-4 fw-bolder terms"
                style={{ color: "#2f9c95" }}
              >
                {t("register.terms")}
              </p>
              <div  className="loginBtn">
                <MintButton text={t("login.register")} btnType="submit" />
              </div>
            </Form>
          )}
        </Formik>
        <h6 className="fw-bold mt-4 mb-3">{t("login.or")}</h6>
        <div className="loginOptions mt-4">
          <Button className="googleBtn mt-3">
            <img
              src="/assets/images/google.png"
              alt="google"
              width={"23.52px"}
              height={"24px"}
            />
            <p className="fw-bolder mt-3 ms-3">Login with Google</p>
          </Button>

          <Button className="facebookBtn mt-4">
            <img
              src="/assets/images/facebook icon.png"
              alt="facebook"
              width={"23.52px"}
              height={"24px"}
            />
            <p className="mt-3 ms-3 fw-bolder">Login with Facebook</p>
          </Button>
        </div>
      </div>
      <div className="registerAsPatient__item2">
        <h5 className="text-light mb-4 fw-bolder">{t("register.areYou")}</h5>
        <Link to={"/RegisterAsDoctor"}>
          <div className="registerAsDoctor">
            <LightBtn text={t("register.doctor")} />
          </div>
        </Link>
      </div>

      {/*  show this in media query*/}
      <div className="registerAsDoctor-mobile">
        <h5 className="text-dark  fw-bolder text-center mt-5">
          {t("register.areYou")}
        </h5>
        <Link to={"/RegisterAsDoctor"}>
          <div className="registerAsDoctor">
            <MintButton text={t("register.doctor")} />
          </div>
        </Link>
      </div>
    </div>
  );
}
export default RegisterAsPatient;
