import React from "react";
import ProvincesTable from "../../components/provincesTable";

const Provinces = () => {
  return (
    <div className="provinces">
      <div className="provinces-content px-3">
        <div className="provinces-table pt-5 sm:w-full md:w-10/12 mx-auto">
          <ProvincesTable />
        </div>
      </div>
    </div>
  );
};

export default Provinces;
