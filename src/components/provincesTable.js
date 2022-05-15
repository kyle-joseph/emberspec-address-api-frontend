import React, { useEffect, useState } from "react";
import { getProvinces } from "../services/geolevels";

const ProvincesTable = () => {
  const [provinces, setProvinces] = useState([]);

  const fetchProvinces = async () => {
    const provinces = await getProvinces();
    if (provinces.success) {
      setProvinces(provinces.data.data);
    }
  };

  useEffect(() => {
    fetchProvinces();
    return () => {
      setProvinces([]);
    };
  }, []);
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
                Province ID
              </th>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-bold tracking-wider text-left text-white uppercase"
              >
                Province/District
              </th>
            </tr>
          </thead>
          <tbody>
            {provinces.map((value, index) => {
              return (
                <tr key={value.province_id} className="bg-white border-b">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {value.region_name}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {value.province_id}
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
    </div>
  );
};

export default ProvincesTable;
