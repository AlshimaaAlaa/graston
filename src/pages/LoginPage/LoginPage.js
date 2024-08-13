import React, { useState } from "react";
import "./LoginPageStyle.css";
import MintButton from "../../Common/MintButton";
import LightBtn from "../../Common/LightBtn";
import { Link } from "react-router-dom";
import { loginApi } from "../../api/userApi/authApi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
function LoginPage() {
  const { t } = useTranslation();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format*").required("Required*"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters*")
      .required("Required*"),
  });

  const onSubmit = async (values) => {
    console.log("Form data", values);
    // Handle form submission
    setLoading(true);
    try {
      const response = await loginApi({
        email: values["email"],
        password: values["password"],
      });
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      alert("Email or Password are incorrect");
      setLoading(false);
    }
  };

  return (
    <div className="position-relative">
      {loading ? (
        <div className="loaderContainer">
          <div className="loader"></div>
        </div>
      ) : null}
      <div className="loginPageContainer">
        <div className="loginPageContainer__item1">
          <h3 className="text-center mb-4">جــــــــــراســــــــــــــتون</h3>
          <h5 className="text-center mt-3 fw-bolder mb-5">
            {t("login.hello")}
          </h5>
          <div className="loginFormContainer">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ setFieldValue }) => (
                <Form>
                  <div className="d-flex flex-column">
                    <label htmlFor="email" className="fw-bolder mb-2 fs-6">
                      {t("login.email")}
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="abdullah@gmail.com"
                      className="emailField"
                    />
                    <ErrorMessage
                      className="text-danger mt-3 fw-bolder"
                      name="email"
                      component="div"
                    />
                  </div>
                  <div className="position-relative d-flex flex-column ">
                    <label
                      htmlFor="password"
                      className="fw-bolder mb-2 fs-6 mt-4"
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
                  <div className="d-flex justify-content-between align-self-start">
                    <div className="">
                      <p className="fw-bolder mt-2">
                        <Link
                          to={"/ForgotPassword"}
                          className="text-decoration-none"
                        >
                          {t("login.forgot")}
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="loginBtn">
                    <MintButton btnType="submit" text={t("login")} />
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
        </div>
        <div className="loginPageContainer__item2 p-5">
          <h5 className="fw-bolder text-light">{t("login.new")}</h5>
          <p className="text-center fw-lighter mt-5">{t("login.paragraph")}</p>
          <Link to={"/RegisterAsPatient"} className="mt-4">
            <div className="loginBtn">
              <LightBtn text={t("signUp")} />
            </div>
          </Link>
        </div>
      </div>
      <div className="additional">
        <p
          className="text-center fw-bolder fs-5"
          style={{ fontFamily: "Roboto" }}
        >
          {t("login.anthorWay")}
          <Link to={"/RegisterPage"} className="text-decoration-none">
            <span className="ms-2 text-decoration-none me-3 ">
              {t("login.register")}
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
