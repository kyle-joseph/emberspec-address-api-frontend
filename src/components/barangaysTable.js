import React, { useEffect, useState } from "react";
import { getBarangays } from "../services/geolevels";
import Pagination from "./pagination";

const BarangaysTable = () => {
  const [barangays, setBarangays] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const fetchBarangays = async () => {
    const barangays = await getBarangays(currPage);
    if (barangays.success) {
      setBarangays(barangays.data.data);
      setPageCount(barangays.data.last_page);
    }
  };

  useEffect(() => {
    fetchBarangays();
    return () => {
      setBarangays([]);
    };
  }, [currPage]);
  return (
    <div>
      <div className="overflow-x-scroll">
        <table className="min-w-full font-nunito overflow-x-scroll">
          <thead className="primary-bg-color">
            <tr>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-bold tracking-wider text-left text-white uppercase"
              >
                Region
              </th>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-bold tracking-wider text-left text-white uppercase"
              >
                Province/District
              </th>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-bold tracking-wider text-left text-white uppercase"
              >
                City/Municipality
              </th>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-bold tracking-wider text-left text-white uppercase"
              >
                Barangay
              </th>
            </tr>
          </thead>
          <tbody>
            {barangays.map((value, index) => {
              return (
                <tr key={value.barangay_id} className="bg-white border-b">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {value.region_name}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {value.province_name}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {value.municipality_name}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {value.name}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination pageCount={pageCount} setCurrPage={setCurrPage} />
    </div>
  );
};

export default BarangaysTable;
