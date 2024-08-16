import React, { useState } from "react";
import MintButton from "../../Common/MintButton";
// import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DoctorSideBar from "../../Common/DoctorSideBar";

function NurseProfile() {
  const { t } = useTranslation();
  const initialValues = {
    nationality_id: "",
    first_name: "",
    last_name: "",
    nationality: "",
    country: "",
    city: "",
    date_of_birth: "mm/dd/yyyy",
    gender: "",
    chronic_diseases: null,
    medical_report: null,
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required("required*"),
    last_name: Yup.string().required("required*"),
    nationality_id: Yup.number()
      .required("required")
      .test(
        "len",
        "Must be exactly 11 digits",
        (val) => val && val.toString().length === 11
      ),
    nationality: Yup.string().required("required*"),
    date_of_birth: Yup.date().required("required*"),
    country: Yup.string().min(3, "At least 3 letters").required("Required*"),
    city: Yup.string().min(3, "At least 3 letters").required("required*"),
    gender: Yup.string().required("Required"),
    specialization: Yup.string().required("required"),
    certeficates: Yup.mixed()
      .nullable()
      .notRequired()
      .test("fileFormat", "Only PDF files are accepted", (value) => {
        if (!value) return true; // Allow empty values
        return value && value.type === "application/pdf";
      }),
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
    console.log(values);
  };

  return (
    <div className="patientProfileContainer d-flex">
      <DoctorSideBar />

      <div className="patientProfileContainer__item2 mt-1">
        <div className="position-relative">
          <div className="position-relative">
            <img
              src="/assets/images/Group 481328.png"
              alt="doctor img"
              width={"128px"}
              height={"128px"}
            />
          </div>
          <div className="position-absolute add-img">
            <img
              src="/assets/images/Frame 119.png"
              alt="add img"
              width={"57px"}
              height={"57px"}
            />
          </div>
        </div>
        <div className="d-flex align-items-center ">
          <p className="fw-bolder  mt-3 mb-5 me-3">{t("doctorProfile")}</p>
          <div className="mt-3 mb-5 edit">
            <img src="/assets/images/Component 19.png" alt="edit" />
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <div className="d-flex mt-3">
              <div>
                <label htmlFor="nationality" className="d-block fw-bolder mb-2">
                  {t("nationalId")}
                </label>
                <Field
                  placeholder="3333111100005555"
                  name="nationality"
                  id="nationality"
                  className="national me-5"
                />
                <ErrorMessage
                  name="nationality"
                  className="text-danger fw-bolder"
                  component="div"
                />
              </div>
              <div classNam="">
                <label htmlFor="firstName" className="d-block mb-2 fw-bolder">
                  {t("register.firstName")}
                </label>
                <Field
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="firstname me-3"
                />
                <ErrorMessage
                  name="firstName"
                  className="text-danger fw-bolder"
                  component="div"
                />
              </div>
              <div>
                <label className="d-block mb-2 fw-bolder " htmlFor="lastName">
                  {t("register.lastName")}
                </label>
                <Field
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="lastname"
                />
                <ErrorMessage
                  name="lastName"
                  className="text-danger fw-bolder"
                  component="div"
                />
              </div>
            </div>
            <div className="d-flex">
              <div>
                <label
                  className="d-block fw-bolder mt-5 mb-2"
                  htmlFor="national"
                >
                  {t("Nationality")}
                </label>
                <Field
                  placeholder="saudi Arabian"
                  name="national"
                  id="national"
                  className="nationals me-5"
                />
              </div>
              <div>
                <label
                  className="d-block fw-bolder mt-5 mb-2"
                  htmlFor="country"
                >
                  {t("Country")}
                </label>
                <Field name="country" id="country " className="country me-3" />
              </div>

              <div>
                <label className="d-block fw-bolder mt-5 mb-2" htmlFor="city">
                  {t("city")}
                </label>
                <Field name="city" id="city" className="city " />
              </div>
            </div>

            <div className="d-flex">
              <div>
                <label
                  className="d-block fw-bolder mt-5 mb-2"
                  htmlFor="date_of_birth"
                >
                  {t("birthDate")}
                </label>
                <Field
                  name="date_of_birth"
                  id="date_of_birth"
                  className="birthDate me-5"
                  type="date"
                />
              </div>
              <div>
                <label className="fw-bolder  mt-5 mb-2">{t("Gender")}</label>
                <div className="d-flex mt-3">
                  <div className=" d-flex aligin-items-center">
                    <Field
                      type="radio"
                      name="gender"
                      value="M"
                      className="custom-radio"
                    />
                    <label className="ms-2 fs-6">{t("male")}</label>
                  </div>
                  <div className=" d-flex aligin-items-center ms-4">
                    <Field
                      type="radio"
                      name="gender"
                      value="F"
                      className="custom-radio"
                    />
                    <label className="ms-2 fs-6">{t("female")}</label>
                    {/* Male */}
                  </div>
                  <ErrorMessage
                    name="gender"
                    className="text-danger"
                    component="div"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <label
                  htmlFor="specialization"
                  className="d-block fw-bolder mt-5 mb-2 "
                >
                  {t("Specialization")}
                </label>
                <Field
                  as="select"
                  type="select"
                  id="specialization"
                  name="specialization"
                  className="d-block specialization me-5"
                >
                  <option value="" selected disabled>
                    Choose Your Specialization...
                  </option>
                  <option value="Specialization 01">Specialization 01</option>
                  <option value="Specialization 02">Specialization 02</option>
                  <option value="Specialization 03">Specialization 03</option>
                </Field>
                <ErrorMessage
                  name="specialization"
                  className="text-danger fw-bolder"
                  component="div"
                />
              </div>
              <div>
                <label
                  htmlFor="certificates"
                  className="d-block fw-bolder mt-5 mb-2"
                >
                  {t("certeficates")}
                </label>
                <div className="file-input-wrapper me-5">
                  <input
                    id="certificates"
                    name="certificates"
                    type="file"
                    accept="application/pdf"
                    className="file-input "
                    onChange={(event) => {
                      // handle file change
                    }}
                  />
                  <label htmlFor="certificates" className="file-input-label">
                    Upload Your Certeficates
                  </label>
                </div>
                <ErrorMessage
                  name="certificates"
                  className="text-danger"
                  component="div"
                />
              </div>
            </div>

            <div className="d-flex">
              <div>
                <label
                  htmlFor="certificates"
                  className="d-block fw-bolder mt-5 mb-2"
                >
                  {t("MedicalAccreditations")}
                </label>
                <div className="file-input-wrapper">
                  <input
                    id="certificates"
                    name="certificates"
                    type="file"
                    accept="application/pdf"
                    className="file-input"
                    onChange={(event) => {
                      // handle file change
                    }}
                  />
                  <label htmlFor="certificates" className="file-input-label">
                    Upload Medical Accreditations
                  </label>
                </div>
                <ErrorMessage
                  name="certificates"
                  className="text-danger"
                  component="div"
                />
              </div>
            </div>
          </Form>
        </Formik>
        <div className="saveBtn">
          <MintButton text={t("saveBtn")} />
        </div>
      </div>
    </div>
  );
}

export default NurseProfile;
