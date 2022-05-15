import React, { useEffect, useState } from "react";
import { getRegions } from "../services/geolevels";

const RegionsTable = () => {
  const [regions, setRegions] = useState([]);

  const fetchRegions = async () => {
    const regions = await getRegions();
    if (regions.success) {
      setRegions(regions.data.data);
    }
  };

  useEffect(() => {
    fetchRegions();
    return () => {
      setRegions([]);
    };
  }, []);
  return (
    <div>
      <table className="min-w-full font-nunito">
        <thead className="primary-bg-color">
          <tr>
            <th
              scope="col"
              className="py-3 px-6 text-xs font-bold tracking-wider text-left text-white uppercase"
            >
              Region ID
            </th>
            <th
              scope="col"
              className="py-3 px-6 text-xs font-bold tracking-wider text-left text-white uppercase"
            >
              Name
            </th>
          </tr>
        </thead>
        <tbody>
          {regions.map((value, index) => {
            return (
              <tr key={value.region_id} className="bg-white border-b">
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                  {value.region_id}
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
  );
};

export default RegionsTable;
