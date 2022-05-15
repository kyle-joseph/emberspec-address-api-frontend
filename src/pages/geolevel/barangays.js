import React from "react";
import BarangaysTable from "../../components/barangaysTable";

const Barangays = () => {
  return (
    <div className="barangays">
      <div className="barangays-content px-3">
        <div className="barangays-table pt-5 sm:w-full md:w-12/12 mx-auto">
          <BarangaysTable />
        </div>
      </div>
    </div>
  );
};

export default Barangays;
