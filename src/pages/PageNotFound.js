import React, { Fragment } from "react";

const PageNotFound = () => {
  return (
    <Fragment>
      <div className="bg-white">
        <div className="flex flex-col items-center justify-center bg-center bg-no-repeat bg-contain min-h-screen">
          <div className="container mx-auto">
            <h1 className="text-blue-logo-primary lg:text-[250px] text-9xl heading font-bold text-center mb-16 subpixel-antialiased my-auto">
              404
            </h1>
            <h2 className="text-blue-logo-secondary text-3xl text-center">
              Uh oh! We couldn't find the page you were looking for.
            </h2>
            <div className="text-center my-12">
              <a
                href="/"
                className="btn-primary uppercase text-blue-logo-secondary font-medium border-2 border-blue-logo-secondary hover:bg-blue-logo-secondary hover:text-white text-2xl"
              >
                Return Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PageNotFound;
