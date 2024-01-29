import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Scan from "../components/Scan/Scan";

const ScanPage = () => {
  return (
    <div style={{ overflowY: "scroll" }}>
      <Header />
      <Scan />
      <Footer />
    </div>
  );
};

export default ScanPage;
