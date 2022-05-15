import React from "react";
import RegionsTable from "../../components/regionsTable";

const Regions = () => {
  return (
    <div className="regions">
      <div className="regions-content px-3">
        <div className="regions-table pt-5 sm:w-full md:w-9/12 mx-auto">
          <RegionsTable />
        </div>
      </div>
    </div>
  );
};

export default Regions;
