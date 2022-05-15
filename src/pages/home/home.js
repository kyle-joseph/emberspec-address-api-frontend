import React, { useEffect } from "react";
import AddressForm from "../../components/address-form";

const Home = () => {
  useEffect(() => {});
  return (
    <div className="home">
      <div className="home-content px-3">
        <div className="address-form pt-5 sm:w-full md:w-9/12 mx-auto">
          <AddressForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
