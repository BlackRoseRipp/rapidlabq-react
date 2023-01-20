import { Fragment } from "react";
import { BsEnvelope } from "react-icons/bs";
import { FaRegCalendarCheck } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { IoMdStopwatch } from "react-icons/io";
import Data from "../components/Locations/Data";
import EmbedMap from "../components/Locations/EmbedMap";
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
                <h1 className="w-full lg:w-1/2 text-white text-center lg:text-start heading text-6xl font-semibold">
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
        <div className="container mx-auto py-24 lg:py-36">
          <h2 className="heading text-5xl font-semibold text-black text-center">
            Why RapidQ?
          </h2>
          <p className="text-zinc-500 text-center font-medium text-lg lg:w-3/4 w-5/6 mx-auto py-24">
            RapidQ provides accurate same day PCR test results when you need a
            quick test to travel or for entry to medical facilities, sporting
            events, entertainment, and other events requiring a PCR test for
            entry. You can receive a RapidQ same day test at one of our mobile
            labs.
            <br />
            <br />
            When fast results are not necessary, you should schedule a normal
            PCR test for more accurate test results.
          </p>
          <div className="grid md:grid-cols-2 gap-8 pb-24 lg:pb-48 lg:mx-0 mx-4">
            <div className="flex justify-center items-center">
              <a
                className="text-white btn-primary w-full text-center uppercase text-xl !py-6 border-transparent bg-blue-logo-secondary hover:bg-blue-logo-primary font-medium"
                href="https://labq.com/rapidq-1-hour-pcr-results/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Schedule a RapidQ Test
              </a>
            </div>
            <div className="flex justify-center items-center">
              <a
                className="text-white btn-primary w-full text-center uppercase text-xl !py-6 border-transparent bg-blue-logo-secondary hover:bg-blue-logo-primary font-medium"
                href="https://labq.com/covid/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Schedule a PCR Test
              </a>
            </div>
          </div>
          <h2 className="heading text-5xl font-semibold text-black text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 my-16 lg:mx-0 mx-4">
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
          <div className="grid lg:grid-cols-2 gap-8 my-16 lg:mx-0 mx-4">
            <div className="flex flex-col items-center justify-center">
              <EmbedMap src="https://www.google.com/maps/d/u/1/embed?mid=10k_uab_hzQEC00J-JAHjM-PodNOsorA&ehbc=2E312F" />
            </div>
            <div className="flex flex-col items-center lg:items-start justify-center">
              <h4 className="font-medium text-lg text-black my-2">Email</h4>
              <a
                href="mailto:helpdesk@labq.com"
                className="underline-animation text-black after:bg-blue-logo-primary hover:text-blue-logo-primary my-2"
              >
                helpdesk@labq.com
              </a>
              <h4 className="font-medium text-lg text-black my-2">Phone</h4>
              <a
                href="tel:(718)534-5227"
                className="underline-animation text-black after:bg-blue-logo-primary hover:text-blue-logo-primary my-2"
              >
                718-534-5227
              </a>
              <h4 className="font-medium text-lg text-black my-2">Address</h4>
              <a
                href="https://www.google.com/maps/dir//140+58th+St+a+3l,+Brooklyn,+NY+11220/@40.6455069,-74.0260843,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c25aac76e59f3f:0xb7faf75e385c97b8!2m2!1d-74.0238956!2d40.6455069"
                className="underline-animation text-black after:bg-blue-logo-primary hover:text-blue-logo-primary my-2"
                target="_blank"
                rel="noreferrer noopener"
              >
                140 58th St, Bldg A Suite 3L, Brooklyn, NY 11220
              </a>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}
