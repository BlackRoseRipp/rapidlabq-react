import React, { Fragment } from "react";
//import LogoImg from "../../public/img/QCARE_Logo.svg";

const Footer = () => {
  return (
    <Fragment>
      <footer className="mt-auto w-full">
        <div className="text-center py-8">
          <p className="text-gray-500 text-xs">
            RapidQ © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
