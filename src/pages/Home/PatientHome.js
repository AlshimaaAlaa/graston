import React from "react";
import Footer from "../../components/Layout/Footer";
import Categories from "../../Categories/Categories";
import TopDoctors from "../../Categories/TopDoctors";
function PatientHome() {
  return (
    <div>
      <Categories />
      <TopDoctors/>
      <Footer />
    </div>
  );
}

export default PatientHome;
