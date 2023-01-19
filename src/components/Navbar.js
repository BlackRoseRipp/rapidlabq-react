import { Fragment } from "react";
import useScrollPosition from "../hooks/useScrollPosition";
import { routes } from "./routes";

const Navbar = () => {
  const scrollPosition = useScrollPosition();
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <Fragment>
      <nav
        className={classNames(
          scrollPosition > 0 ? "bg-white" : "md:bg-transparent bg-white",
          "fixed w-full top-0 flex justify-between items-center transition-all z-50"
        )}
      >
        <div className="lg:container flex flex-wrap justify-between items-center md:mx-auto w-full">
          <a href="/" className="flex items-center m-4">
            <img
              src="img/RapidQ_Logo-2.png"
              class="mr-3 w-3/5"
              alt="RapidQ-logo"
            />
          </a>
          <a
            className={classNames(
              scrollPosition > 0 ? "opacity-100" : "opacity-0 cursor-default",
              "bg-transparent hover:bg-blue-logo-primary border-blue-logo-primary text-blue-logo-primary hover:text-white rounded-full text-lg font-semibold border-2 py-1 px-4 transition-all hidden lg:block"
            )}
            href={
              scrollPosition > 0
                ? "https://labq.gomeyra.cloud/services/tests"
                : null
            }
            target="_blank"
            rel="noreferrer noopener"
          >
            Register Now
          </a>
        </div>
      </nav>
      {routes()}
    </Fragment>
  );
};

export default Navbar;
