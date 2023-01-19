import React, { useEffect, useState } from "react";

function StoreList(props) {
  const [filteredLocations, setFilteredLocations] = useState(props.locations);
  const locationLength = filteredLocations.length;
  //console.log(props.locations)
  //console.log(filteredLocations)
  const filterLocations = (e) => {
    //console.log(e.target.value)
    let text = e.target.value;
    if (text !== "") {
      setFilteredLocations(
        props.locations.filter(
          (location) =>
            location.Name.toLowerCase().includes(text.toLowerCase()) ||
            location.Address.toLowerCase().includes(text.toLowerCase())
        )
      );
    } else {
      setFilteredLocations(props.locations);
    }
  };

  useEffect(() => {
    //console.log(props.locations)
    setFilteredLocations(props.locations);
  }, [props]);

  //const locData = filteredLocations.length > 0 ? filteredLocations : props.locations
  //const locData = filteredLocations
  //console.log("Here I am")

  return (
    <div>
      <input
        type="search"
        className="w-full rounded-xl border border-blue-light px-3 py-1.5 outline-blue-secondary outline-offset-2 focus-visible:!outline-4 transition-all"
        placeholder="Find a location"
        onChange={filterLocations}
      />
      <div className="scrollbar overflow-y-auto bg-white h-[630px] p-4 rounded-xl border border-blue-light mt-8">
        {filteredLocations.map((location, index) => {
          const doEmail = location.Email !== "" ? true : false;
          const doPhone = location.Phone !== "" ? true : false;

          return (
            <div className="mt-4">
              <div className="ps-2 text-center lg:text-start">
                <h5 className="heading font-medium text-blue-logo-primary text-lg">
                  {location.Name}{" "}
                </h5>
                <p className="text-blue-primary">{location.Address},</p>
                <p className="text-blue-primary">
                  {location.City} {location.State} {location.Zip}
                </p>
                <p className="text-blue-primary">{location.Country}</p>
                <div className="my-4 text-center">
                  <a
                    className="btn-primary text-blue-primary font-medium border-2 border-blue-primary hover:text-red-secondary hover:bg-blue-light hover:border-red-secondary"
                    href={location.Link}
                    style={{ display: doPhone ? "block" : "none" }}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Available Times
                  </a>
                  <div
                    className={
                      "mt-2" +
                      (doPhone && doEmail
                        ? " grid sm:grid-cols-2 gap-2"
                        : " text-center")
                    }
                  >
                    <a
                      className="btn-primary text-blue-primary font-medium border-2 border-blue-primary hover:text-red-secondary hover:bg-blue-light hover:border-red-secondary"
                      href={"tel:" + location.Phone}
                      style={{ display: doPhone ? "block" : "none" }}
                    >
                      Call this location
                    </a>
                    <a
                      className="btn-primary text-blue-primary font-medium border-2 border-blue-primary hover:text-red-secondary hover:bg-blue-light hover:border-red-secondary"
                      href={"mailto:" + location.Email}
                      style={{ display: doEmail ? "block" : "none" }}
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
              <hr
                class="mt-8 border-blue-light/40"
                style={{
                  display: index === locationLength - 1 ? "none" : "block",
                }}
              ></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StoreList;
