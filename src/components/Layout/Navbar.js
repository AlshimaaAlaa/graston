import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ComponentsStyle.css";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t } = useTranslation(); // Initialize the useTranslation hook

  // Initialize state with the current language
  const [language, setLanguage] = useState(i18next.language);
  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    console.log("Selected language:", newLanguage);
    i18next.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  
  
  return (
    <div className="navbarContainer">
      <nav className="navbar">
        {/* 1 */}
        <div>
          <Link to={"/"} className="text-decoration-none">
            <h3 className="logo fw-bolder">جــــــــــراســــــــــــــتون</h3>
          </Link>
        </div>
        {/* 2 */}
        <div>
          <ul className="list mt-3">
            <li className="list__item">
              <Link className="list__item__link active" to="/">
                {t('navbar.home')} {/* Use translation function */}
              </Link>
            </li>
            <li className="list__item">
              <Link className="list__item__link not-active" to="/">
                {t('navbar.shop')}
              </Link>
            </li>
            <li className="list__item">
              <Link className="list__item__link not-active" to="/">
                {t('navbar.aboutUs')}
              </Link>
            </li>
            <li className="list__item">
              <Link className="list__item__link not-active" to="/">
                {t('navbar.contactUs')}
              </Link>
            </li>
          </ul>
        </div>

        {/* 3 */}
        <div className="">
          <Link to={"/LoginPage"} className="link">
            <button className="me-4">{t('login')}</button>
          </Link>
          <Link to={"/RegisterAsPatient"} className="link">
            <button className="">{t('signUp')}</button>
          </Link>
        </div>

        {/* 4 */}
        <div className='d-flex justify-content-center align-items-center'>
          <img src='/assets/images/translate.png' alt='translate'/>
          <select
            className='language ms-3'
            value={language}
            onChange={handleLanguageChange} // Handle language change
          >
            <option value="ar">العربية</option>
            <option value="en">English</option>
          </select>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
