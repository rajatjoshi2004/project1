import React from "react";
import BannerTop from "./BannerTop";
import All_From from "./AllFrom";
import Imagecontact from "./Imagecontact";

function ContactUs() {
  return (
    <>
      <div className="conatactPage">
        <BannerTop />
        <div className="conatactPage w-full py-10">
          <div className="container mx-auto px-2">
            <All_From />
            <Imagecontact/>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
