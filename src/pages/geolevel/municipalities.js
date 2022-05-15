import React from "react";
import MunicipalitiesTable from "../../components/municipalitiesTable";

const Municipalities = () => {
  return (
    <div className="municipalities">
      <div className="municipalities-content px-3">
        <div className="municipalities-table pt-5 sm:w-full md:w-9/12 mx-auto">
          <MunicipalitiesTable />
        </div>
      </div>
    </div>
  );
};

export default Municipalities;
