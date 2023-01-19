import { Fragment } from "react";
import { BsEnvelope } from "react-icons/bs";
import { FaRegCalendarCheck } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { IoMdStopwatch } from "react-icons/io";
import Data from "../components/Locations/Data";
import StoreLocator from "../components/Locations/StoreLocator";
import useWindowSize from "../hooks/useWindowSize";

export default function Home() {
  const size = useWindowSize();

  return (
    <Fragment>
      <main>
        <div className="bg-[url(../public/img/covid-2.a9282d5e72fde790a6c9.jpg)] bg-cover bg-right bg-no-repeat">
          <div className="bg-black/20">
            <div className="banner pb-16">
              <div className="container mx-auto lg:py-64 py-32 flex flex-col justify-center">
                <h1 className="w-full lg:w-1/2 text-white text-start heading text-6xl font-semibold">
                  Get Rapid PCR Tests With&nbsp;
                  <img
                    src="img/RapidQ_Logo-1.png"
                    className="inline w-2/5 align-bottom"
                    alt="RapidQ"
                  />
                </h1>
                <div className="text-center lg:text-start mt-8">
                  <a
                    className="text-white btn-primary uppercase border-transparent bg-blue-logo-secondary hover:bg-blue-logo-primary font-medium"
                    href="https://labq.gomeyra.cloud/services/tests"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-24 lg:py-48">
          <h2 className="heading text-5xl font-semibold text-black text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-4 gap-8 my-16">
            <div className="flex flex-col items-center justify-start">
              <FaRegCalendarCheck className="text-6xl text-zinc-500" />
              <h3 className="text-zinc-500 text-3xl font-medium text-center my-6">
                1. Register
              </h3>
              <p className="text-zinc-500 text-center">
                Click the "Register Now" button above to start your covid Test
                registration process.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start">
              <BsEnvelope className="text-6xl text-zinc-500" />
              <h3 className="text-zinc-500 text-3xl font-medium text-center my-6">
                2. Check Email
              </h3>
              <p className="text-zinc-500 text-center">
                Upon successful registration a confirmation should be sent to
                your email containing the date, time and location of your
                scheduled test.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start">
              <IoMdStopwatch className="text-6xl text-zinc-500" />
              <h3 className="text-zinc-500 text-3xl font-medium text-center my-6">
                3. Arrive for Test
              </h3>
              <p className="text-zinc-500 text-center">
                As there may be many tests taken that day be sure to arrive at
                least 10 minutes early for your test.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start">
              <GoGraph className="text-6xl text-zinc-500" />
              <h3 className="text-zinc-500 text-3xl font-medium text-center my-6">
                4. View Results
              </h3>
              <p className="text-zinc-500 text-center">
                After taking your covid test you should recieve an email within
                an hour enclosing your test results.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto pb-24 lg:pb-48">
          <h2 className="heading text-5xl font-semibold text-black text-center">
            Contact
          </h2>
          <div className="grid grid-cols-2 gap-8 my-16"></div>
        </div>
      </main>
    </Fragment>
  );
}
