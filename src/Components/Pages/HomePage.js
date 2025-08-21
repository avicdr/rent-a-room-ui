import React, { useEffect, useState } from "react";
import Footerrent from "../Footerrent";
import { Link } from "react-router-dom";
import "../../ComponentsCSS/HomePage.css";
import "../../ComponentsCSS/FrontPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHeart,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { HiLocationMarker } from "react-icons/hi";
import { LuHeart } from "react-icons/lu";
import pic2 from "../../Attributes/Rectangle 7 (1).png";
import pic from "../../Attributes/low-view-modern-skyscrapers-office-buildings_23-2148836791 1.png";

import pic3 from "../../Attributes/connectingDots.svg";
import Navbar from "../Navbar";
import Nav2 from "../Nav2";
import Context from "../../Services/Context/Context";
import { CiSearch } from "react-icons/ci";
function HomePage() {
  const [userLogedin, setUserLogedIn] = useState(false);
  const [searchText, setSearchText] = useState("Kingston, London");
  useEffect(() => {
    const tokens = localStorage.getItem("tokens");
    if (tokens) {
      setUserLogedIn(true);
    }
  }, []);

  // useEffect(() => {
  //   const postData = async () => {
  //     try {
  //       const dateOfBirth = new Date("12/7/2023"); // Assuming the date is in MM/DD/YYYY format
  //       const formattedDate = dateOfBirth.toISOString(); // Convert to ISO format

  //       const postData = {
  //         first_name: "John",
  //         last_name: "Doe",
  //         date_of_birth: formattedDate,
  //         gender: "MALE",
  //       };

  //       const response = await fetch("http://16.171.135.176/user/add_a_user/", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImFlYzU4NjcwNGNhOTZiZDcwMzZiMmYwZDI4MGY5NDlmM2E5NzZkMzgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2Jyb29tcy0yYjg0MiIsImF1ZCI6InNicm9vbXMtMmI4NDIiLCJhdXRoX3RpbWUiOjE3MDgzNTI1OTUsInVzZXJfaWQiOiI3bjlDaWJQR0NPZm1aQm1YQWZoR1NJQTkwZ3kxIiwic3ViIjoiN245Q2liUEdDT2ZtWkJtWEFmaEdTSUE5MGd5MSIsImlhdCI6MTcwODM1MjU5NSwiZXhwIjoxNzA4MzU2MTk1LCJlbWFpbCI6ImNvbXBzc3lzdGVtQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb21wc3N5c3RlbUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.N6tcYUNOwHBdaMyeKgAzlpnmKOPp9Lwwz15W4A7Heh-cRsG6GRMnWuCgNH4xnpwBSkBTQJD1Sp3es5ufjbz6h9RWGNcqgP7zESH9K1vc3PFCzJoa5R6PHyUryj3BhEgqR4lOX4Da684Vg0GCfYb8qY2A-dyiH2tu31AycmLnMEYdr1205TSzkJw3t53Dvrx_L2l0iJdxKtBKshO41d5oC7sJap-QDmK5raXHNMLmKm2kEGSu15VuQidmmtVYZBDUgndA7LZBPITtZYfjmb-6LSYl2SdbLlDa38di8L0bD7CMflTb1wxI8Jcajj4So4ThZPaeqZ6PVYCAdmvX7kxfHA',
  //           // Add any other headers as needed (e.g., authorization)
  //         },
  //         body: JSON.stringify(postData),
  //       });

  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }

  //       const result = await response.json();
  //       console.log(result)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   postData();
  // }, []); // Empty dependency array to run the effect only once on mount

  return (
    <Context.Consumer>
      {(value) => {
        const { toogletheme, theme } = value;
        return (
          <div className="new-container">
            {userLogedin ? (
              <Navbar toogletheme={toogletheme} theme={theme} />
            ) : (
              <Nav2></Nav2>
            )}
            <div className="bg-container ">
              {/* <div className="bottom-left">
        
        </div> */}
              {/* <div className="top-left">
          Tenant HF RR <br /> Version 2.0 <br /> Date 29/05/2023
        </div> */}
              {/* <div className="bottom-right">Bottom Right</div> */}
              <div className="pt-11  flex flex-col items-center">
                <h1 className="main-heading pt-11 mt-11">Search your Space</h1>
                <p className="sub-heading mb-11 mt-3">
                  We helped 36,600 people to find their place
                </p>{" "}
                <br />
                <div className="flex w-full justify-center">
                  <div className="flex basis-1/2 justify-between search-border bg-white">
                    <div className="w-11/12  flex ">
                      <div className="self-center ">
                        <CiSearch className="text-4xl p-1 ml-3 mr-2 " />
                      </div>
                      <input
                        className="border-0 w-11/12 ml-3 city "
                        type="text"
                        placeholder="search..."
                        style={{ color: "#303147" }}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                      />
                    </div>
                    <button className="drop-border bg-white rounded">
                      <label>
                        {/* Space  */}
                        {/* &nbsp;    */}
                        <select
                          className="drop_text"
                          style={{ outline: "none" }}
                        >
                          <option value="">Space</option>
                          <option value="">Tenant</option>

                          <option value="">Buddy Up</option>

                          {/* <option value=""></option> */}
                        </select>
                      </label>
                    </button>
                  </div>
                  <Link to="/FrontPage">
                    <button className="find-button" type="submit">
                      Find
                    </button>
                  </Link>
                </div>
                <h4 className="matrixx">
                  Post an{" "}
                  <Link style={{ color: "#44C1F0" }} to="/AdvertFormNew">
                    Advertisement
                  </Link>
                </h4>
                <br /> <h2 className="city-heading">People search Mostly?</h2>
                <div className="flex  mb-12">
                  <p className="mr-11 city">Kingston, London </p>
                  <p className="mr-11 city">Kingston, London </p>
                  <p className="mr-1 city">Kingston, London </p>
                </div>
                <div />
              </div>
              <div className="mt-14 pt-5 ">
                <div className="flex gap-11 resp-flex-column">
                  <div
                    to
                    className=" p-5 ml-11 resp-ml-0 rounded-xl shadow-2xl mb-5 bg-white  basis-1/2   h-fit"
                  >
                    <div className="grid-cols-12 flex resp-flex-column sm:flex-col md:flex-row ">
                      <div class="col-span-4 ">
                        <Link style={{ cursor: "pointer" }} to="/AdvertDetails">
                          <img
                            src={pic2}
                            alt="card-img0"
                            className="h-full w-fit resp-m-auto"
                          />
                        </Link>
                      </div>
                      <div className=" ml-4 col-span-8  mr-3 ">
                        <div className="flex flex-col">
                          <div>
                            <div className="flex w-full justify-between  ">
                              <h3 className="card-heading">
                                The People's Brownstone
                              </h3>
                              <svg
                                width="25"
                                height="23"
                                viewBox="0 0 25 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M2.06994 12.2069C0.809426 10.9577 0.101562 9.26947 0.101562 7.50923C0.101562 5.73923 0.816875 4.04121 2.09105 2.78965C3.36522 1.53808 5.09393 0.835449 6.8959 0.835449C8.69788 0.835449 10.4266 1.53808 11.7008 2.78965L12.1652 3.24587L12.6297 2.78965C13.9039 1.53808 15.6313 0.835449 17.4333 0.835449C19.2365 0.835449 20.964 1.53808 22.2381 2.78965C23.5123 4.04121 24.2289 5.73923 24.2289 7.50923C24.2289 9.26947 23.521 10.9577 22.2593 12.2069L13.042 21.7937C12.8147 22.0303 12.4968 22.1645 12.1652 22.1645C11.8336 22.1645 11.5157 22.0303 11.2885 21.7937L2.06994 12.2069ZM12.1652 19.2539L20.5082 10.5772L20.533 10.5528C21.3539 9.74522 21.8159 8.65101 21.8159 7.50923C21.8159 6.36746 21.3539 5.27326 20.533 4.46572C19.7109 3.65818 18.5957 3.20439 17.4333 3.20439C16.2721 3.20439 15.1569 3.65818 14.3348 4.46572L13.0184 5.75997C12.5465 6.2223 11.7827 6.2223 11.312 5.75997L9.9944 4.46572C9.17351 3.65818 8.05831 3.20439 6.8959 3.20439C5.7335 3.20439 4.61953 3.65818 3.79741 4.46572C2.97528 5.27326 2.51454 6.36746 2.51454 7.50923C2.51454 8.65101 2.97528 9.74522 3.79741 10.5528C3.8061 10.5613 3.81355 10.5686 3.821 10.5772L12.1652 19.2539Z"
                                  fill="#303147"
                                />
                              </svg>
                            </div>
                            <h5 className="text-left card-text mt-3 flex ">
                              <svg
                                width="21"
                                height="20"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.1016 18.3332C10.1016 18.3332 16.3516 13.3332 16.3516 7.9165C16.3516 4.46471 13.5534 1.6665 10.1016 1.6665C6.64977 1.6665 3.85156 4.46471 3.85156 7.9165C3.85156 13.3332 10.1016 18.3332 10.1016 18.3332Z"
                                  fill="#303147"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M3.22656 7.9165C3.22656 4.11953 6.30459 1.0415 10.1016 1.0415C13.8985 1.0415 16.9766 4.11953 16.9766 7.9165C16.9766 10.8463 15.2987 13.5929 13.712 15.5497C12.9091 16.54 12.1077 17.3546 11.5073 17.9217C11.2067 18.2056 10.9554 18.4284 10.7782 18.5812C10.6895 18.6576 10.6193 18.7165 10.5706 18.7569C10.5463 18.7771 10.5273 18.7926 10.514 18.8034L10.4986 18.8159L10.4941 18.8195L10.4928 18.8206L10.4923 18.821C10.4921 18.8211 10.492 18.8212 10.1016 18.3332C9.71113 18.8212 9.71098 18.8211 9.7108 18.821L9.71034 18.8206L9.70898 18.8195L9.70456 18.8159L9.68908 18.8034C9.67585 18.7926 9.65687 18.7771 9.63252 18.7569C9.58382 18.7165 9.51361 18.6576 9.42496 18.5812C9.24773 18.4284 8.99647 18.2056 8.69586 17.9217C8.09542 17.3546 7.29401 16.54 6.49109 15.5497C4.90445 13.5929 3.22656 10.8463 3.22656 7.9165ZM10.1016 18.3332L9.71113 18.8212C9.93939 19.0038 10.2637 19.0038 10.492 18.8212L10.1016 18.3332ZM10.1016 17.5128C10.2505 17.3816 10.4364 17.2137 10.649 17.0129C11.2204 16.4732 11.9815 15.6993 12.7411 14.7625C14.2795 12.8651 15.7266 10.4033 15.7266 7.9165C15.7266 4.80989 13.2082 2.2915 10.1016 2.2915C6.99495 2.2915 4.47656 4.80989 4.47656 7.9165C4.47656 10.4033 5.92367 12.8651 7.46203 14.7625C8.22162 15.6993 8.98271 16.4732 9.55414 17.0129C9.76677 17.2137 9.95258 17.3816 10.1016 17.5128Z"
                                  fill="#303147"
                                />
                                <path
                                  d="M10.1016 10.4165C11.4823 10.4165 12.6016 9.29721 12.6016 7.9165C12.6016 6.5358 11.4823 5.4165 10.1016 5.4165C8.72085 5.4165 7.60156 6.5358 7.60156 7.9165C7.60156 9.29721 8.72085 10.4165 10.1016 10.4165Z"
                                  fill="#FFFBFF"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M6.97656 7.9165C6.97656 6.19062 8.37568 4.7915 10.1016 4.7915C11.8274 4.7915 13.2266 6.19062 13.2266 7.9165C13.2266 9.64239 11.8274 11.0415 10.1016 11.0415C8.37568 11.0415 6.97656 9.64239 6.97656 7.9165ZM10.1016 6.0415C9.06603 6.0415 8.22656 6.88097 8.22656 7.9165C8.22656 8.95203 9.06603 9.7915 10.1016 9.7915C11.1371 9.7915 11.9766 8.95203 11.9766 7.9165C11.9766 6.88097 11.1371 6.0415 10.1016 6.0415Z"
                                  fill="#FFFBFF"
                                />
                              </svg>
                              <span className=""> 1995 Broadway, Kingston</span>
                            </h5>

                            <p className="card-list">
                              Wifi • Air conditioning • Kitchen • Heating •
                              Smokers • Parking • Balcony • Animal friendly
                            </p>
                            {/* <div className="flex mt-5">
                <button className="card-buttons mr-3">New Building</button>
                <button className="card-buttons">Common Friends </button>
              </div> */}
                            <div className="flex  mt-3">
                              <button className="home-card-buttons mr-3">
                                Looking for a male roommate
                              </button>
                              <button className="home-card-buttons mr-3">
                                car{" "}
                              </button>
                            </div>
                          </div>

                          <div className="flex justify-between ">
                            <div className="front-info-card">
                              <div className="flex flex-col mr-4">
                                <p className="new-ren text-left"> Rent</p>
                                <span className="new-ren flex">
                                  £
                                  <span className="user-focus-home text-left mr-1">
                                    {" "}
                                    650{" "}
                                  </span>{" "}
                                  / month
                                </span>
                              </div>
                              <div className="flex flex-col mr-4">
                                <p className="new-ren text-left"> Available</p>{" "}
                                <span className="user-focus-home text-left">
                                  1 Dec
                                </span>
                              </div>
                              <div className="flex flex-col mr-4">
                                <p className="new-ren text-left"> Location</p>{" "}
                                <span className="user-focus-home text-left">
                                  Kensington
                                </span>
                              </div>
                            </div>

                            <h1 className="card-price mt-3">
                              £3,00 <small className="text-base">/month</small>
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    to
                    className=" p-5 mr-11 resp-mr-0 rounded-xl shadow-2xl mb-5 bg-white  basis-1/2   h-fit"
                  >
                    <div className="grid-cols-12 flex resp-flex-column sm:flex-col md:flex-row ">
                      <div class="col-span-4 ">
                        <Link style={{ cursor: "pointer" }} to="/AdvertDetails">
                          <img
                            src={pic2}
                            alt="card-img0"
                            className="h-full w-fit resp-m-auto"
                          />
                        </Link>
                      </div>
                      <div className=" ml-4 col-span-8  mr-3 ">
                        <div className="flex flex-col">
                          <div>
                            <div className="flex w-full justify-between  ">
                              <h3 className="card-heading">
                                The People's Brownstone
                              </h3>
                              <svg
                                width="25"
                                height="23"
                                viewBox="0 0 25 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M2.06994 12.2069C0.809426 10.9577 0.101562 9.26947 0.101562 7.50923C0.101562 5.73923 0.816875 4.04121 2.09105 2.78965C3.36522 1.53808 5.09393 0.835449 6.8959 0.835449C8.69788 0.835449 10.4266 1.53808 11.7008 2.78965L12.1652 3.24587L12.6297 2.78965C13.9039 1.53808 15.6313 0.835449 17.4333 0.835449C19.2365 0.835449 20.964 1.53808 22.2381 2.78965C23.5123 4.04121 24.2289 5.73923 24.2289 7.50923C24.2289 9.26947 23.521 10.9577 22.2593 12.2069L13.042 21.7937C12.8147 22.0303 12.4968 22.1645 12.1652 22.1645C11.8336 22.1645 11.5157 22.0303 11.2885 21.7937L2.06994 12.2069ZM12.1652 19.2539L20.5082 10.5772L20.533 10.5528C21.3539 9.74522 21.8159 8.65101 21.8159 7.50923C21.8159 6.36746 21.3539 5.27326 20.533 4.46572C19.7109 3.65818 18.5957 3.20439 17.4333 3.20439C16.2721 3.20439 15.1569 3.65818 14.3348 4.46572L13.0184 5.75997C12.5465 6.2223 11.7827 6.2223 11.312 5.75997L9.9944 4.46572C9.17351 3.65818 8.05831 3.20439 6.8959 3.20439C5.7335 3.20439 4.61953 3.65818 3.79741 4.46572C2.97528 5.27326 2.51454 6.36746 2.51454 7.50923C2.51454 8.65101 2.97528 9.74522 3.79741 10.5528C3.8061 10.5613 3.81355 10.5686 3.821 10.5772L12.1652 19.2539Z"
                                  fill="#303147"
                                />
                              </svg>
                            </div>
                            <h5 className="text-left card-text mt-3 flex ">
                              <svg
                                width="21"
                                height="20"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.1016 18.3332C10.1016 18.3332 16.3516 13.3332 16.3516 7.9165C16.3516 4.46471 13.5534 1.6665 10.1016 1.6665C6.64977 1.6665 3.85156 4.46471 3.85156 7.9165C3.85156 13.3332 10.1016 18.3332 10.1016 18.3332Z"
                                  fill="#303147"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M3.22656 7.9165C3.22656 4.11953 6.30459 1.0415 10.1016 1.0415C13.8985 1.0415 16.9766 4.11953 16.9766 7.9165C16.9766 10.8463 15.2987 13.5929 13.712 15.5497C12.9091 16.54 12.1077 17.3546 11.5073 17.9217C11.2067 18.2056 10.9554 18.4284 10.7782 18.5812C10.6895 18.6576 10.6193 18.7165 10.5706 18.7569C10.5463 18.7771 10.5273 18.7926 10.514 18.8034L10.4986 18.8159L10.4941 18.8195L10.4928 18.8206L10.4923 18.821C10.4921 18.8211 10.492 18.8212 10.1016 18.3332C9.71113 18.8212 9.71098 18.8211 9.7108 18.821L9.71034 18.8206L9.70898 18.8195L9.70456 18.8159L9.68908 18.8034C9.67585 18.7926 9.65687 18.7771 9.63252 18.7569C9.58382 18.7165 9.51361 18.6576 9.42496 18.5812C9.24773 18.4284 8.99647 18.2056 8.69586 17.9217C8.09542 17.3546 7.29401 16.54 6.49109 15.5497C4.90445 13.5929 3.22656 10.8463 3.22656 7.9165ZM10.1016 18.3332L9.71113 18.8212C9.93939 19.0038 10.2637 19.0038 10.492 18.8212L10.1016 18.3332ZM10.1016 17.5128C10.2505 17.3816 10.4364 17.2137 10.649 17.0129C11.2204 16.4732 11.9815 15.6993 12.7411 14.7625C14.2795 12.8651 15.7266 10.4033 15.7266 7.9165C15.7266 4.80989 13.2082 2.2915 10.1016 2.2915C6.99495 2.2915 4.47656 4.80989 4.47656 7.9165C4.47656 10.4033 5.92367 12.8651 7.46203 14.7625C8.22162 15.6993 8.98271 16.4732 9.55414 17.0129C9.76677 17.2137 9.95258 17.3816 10.1016 17.5128Z"
                                  fill="#303147"
                                />
                                <path
                                  d="M10.1016 10.4165C11.4823 10.4165 12.6016 9.29721 12.6016 7.9165C12.6016 6.5358 11.4823 5.4165 10.1016 5.4165C8.72085 5.4165 7.60156 6.5358 7.60156 7.9165C7.60156 9.29721 8.72085 10.4165 10.1016 10.4165Z"
                                  fill="#FFFBFF"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M6.97656 7.9165C6.97656 6.19062 8.37568 4.7915 10.1016 4.7915C11.8274 4.7915 13.2266 6.19062 13.2266 7.9165C13.2266 9.64239 11.8274 11.0415 10.1016 11.0415C8.37568 11.0415 6.97656 9.64239 6.97656 7.9165ZM10.1016 6.0415C9.06603 6.0415 8.22656 6.88097 8.22656 7.9165C8.22656 8.95203 9.06603 9.7915 10.1016 9.7915C11.1371 9.7915 11.9766 8.95203 11.9766 7.9165C11.9766 6.88097 11.1371 6.0415 10.1016 6.0415Z"
                                  fill="#FFFBFF"
                                />
                              </svg>
                              <span className=""> 1995 Broadway, Kingston</span>
                            </h5>

                            <p className="card-list">
                              Wifi • Air conditioning • Kitchen • Heating •
                              Smokers • Parking • Balcony • Animal friendly
                            </p>
                            {/* <div className="flex mt-5">
                <button className="card-buttons mr-3">New Building</button>
                <button className="card-buttons">Common Friends </button>
              </div> */}
                            <div className="flex  mt-3">
                              <button className="home-card-buttons mr-3">
                                Looking for a male roommate
                              </button>
                              <button className="home-card-buttons mr-3">
                                car{" "}
                              </button>
                            </div>
                          </div>

                          <div className="flex justify-between ">
                            <div className="front-info-card">
                              <div className="flex flex-col mr-4">
                                <p className="new-ren text-left"> Rent</p>
                                <span className="new-ren flex">
                                  £
                                  <span className="user-focus-home text-left mr-1">
                                    {" "}
                                    650{" "}
                                  </span>{" "}
                                  / month
                                </span>
                              </div>
                              <div className="flex flex-col mr-4">
                                <p className="new-ren text-left"> Available</p>{" "}
                                <span className="user-focus-home text-left">
                                  1 Dec
                                </span>
                              </div>
                              <div className="flex flex-col mr-4">
                                <p className="new-ren text-left"> Location</p>{" "}
                                <span className="user-focus-home text-left">
                                  Kensington
                                </span>
                              </div>
                            </div>

                            <h1 className="card-price mt-3">
                              £3,00 <small className="text-base">/month</small>
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="matrix ">Why people love Rentaroom?</h1>
            <img className="pic3 mt-14 " src={pic3} alt="" />
            <div className="random-room resp-flex-column">
              <div className="small-room">
                <h1 className="s4xl">Easy signup</h1>
                <br />
                <p className="text-center text_4xl text-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labo
                </p>
              </div>
              <div className="small-room">
                <h1 className="s4xl">Quick use</h1>
                <br />
                <p className="text-center text_4xl text-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labo
                </p>
              </div>
              <div className="small-room">
                <h1 className="s4xl">Safety</h1>
                <br />
                <p className="text-center text_4xl text-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labo
                </p>
              </div>
            </div>
            <Footerrent />
          </div>
        );
      }}
    </Context.Consumer>
  );
}

export default HomePage;
