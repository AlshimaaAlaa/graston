import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
// import RegisterPage from "./pages/RegisterPage/RegisterPage";
import RegisterAsPatient from "./pages/RegisterPage/RegisterAsPatient";
import RegisterAsDoctor from "./pages/RegisterPage/RegisterAsDoctor";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword(phoneNumber)";
import ForgotPasswordEmail from "./pages/ForgotPassword/ForgotPasswordEmail";
import VerifayPhone from "./pages/ForgotPassword/VerifayPhone";
import VerifayEmail from "./pages/ForgotPassword/VerifayEmail";
import CreateNewPassword from "./pages/RestPassword/CreateNewPassword";
import RestPassword from "./pages/RestPassword/RestPassword";
import PatientProfile from "./pages/Profile/PatientProfile";
import NurseProfile from "./pages/Profile/NurseProfile";
import { Provider } from "react-redux";
import store from "./app/store";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./Translate/en.json";
import arTranslation from "./Translate/ar.json";
function App() {
  i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      lng: "ar",
      resources: {
        en: {
          translation: enTranslation,
        },
        ar: {
          translation: arTranslation,
        },
      },
      fallbackLng: "en",
      debug: true,
      interpolation: {
        escapeValue: false,
      },
    });
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          {/* <Route path="/RegisterPage" element={<RegisterPage />} /> */}
          <Route path="/RegisterAsPatient" element={<RegisterAsPatient />} />
          <Route path="/RegisterAsDoctor" element={<RegisterAsDoctor />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route
            path="/ForgotPasswordEmail"
            element={<ForgotPasswordEmail />}
          />
          <Route path="/VerifayEmail" element={<VerifayEmail />} />
          <Route path="/VerifayPhone" element={<VerifayPhone />} />
          <Route path="/CreateNewPassword" element={<CreateNewPassword />} />
          <Route path="/RestPassword" element={<RestPassword />} />
          <Route path="/PatientProfile" element={<PatientProfile />} />
          <Route path="/NurseProfile" element={<NurseProfile />} />
          <Route path="/RestPassword" element={<RestPassword />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
