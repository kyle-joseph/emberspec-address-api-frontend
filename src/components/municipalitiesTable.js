import React, { useEffect, useState } from "react";
import { getMunicipalities } from "../services/geolevels";
import Pagination from "./pagination";

const MunicipalitiesTable = () => {
  const [municipalities, setMunicipalities] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const fetchMunicipalities = async () => {
    const municipalities = await getMunicipalities(currPage);
    if (municipalities.success) {
      setMunicipalities(municipalities.data.data);
      setPageCount(municipalities.data.last_page);
    }
  };

  useEffect(() => {
    fetchMunicipalities();
    return () => {
      setMunicipalities([]);
    };
  }, [currPage]);
  return (
    <div>
      <div className="overflow-x-scroll">
        <table className="min-w-full font-nunito">
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
            </tr>
          </thead>
          <tbody>
            {municipalities.map((value, index) => {
              return (
                <tr key={value.municipality_id} className="bg-white border-b">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {value.region_name}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {value.province_name}
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

export default MunicipalitiesTable;
