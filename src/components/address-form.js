import React, { useEffect, useState } from "react";
import {
  getBarangaysByMunicipality,
  getMunicipalitiesByProvince,
  getProvincesByRegion,
  getRegions,
} from "../services/geolevels";

//Address form
const AddressForm = () => {
  const [regions, setRegions] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [municipalities, setMunicipalities] = useState([]);
  const [barangays, setBarangays] = useState([]);
  var regionId;
  var provinceId;
  var municipalityId;
  var barangayId;

  //fetch geographic levels
  const fetchRegions = async () => {
    const reg = await getRegions();
    if (reg.success) {
      setRegions(reg.data.data);
    }
  };

  const fetchProvincesByRegion = async (id) => {
    const prov = await getProvincesByRegion(id);
    if (prov.success) {
      setProvinces(prov.data.data);
    }
  };

  const fetchMunicipalitiesByProvince = async (id) => {
    const mun = await getMunicipalitiesByProvince(id);
    if (mun.success) {
      setMunicipalities(mun.data.data);
    }
  };

  const fetchBarangaysByMunicipality = async (id) => {
    const brgy = await getBarangaysByMunicipality(id);
    if (brgy.success) {
      setBarangays(brgy.data.data);
    }
  };

  // ==================================================
  //onChange functions
  const handelRegionChange = (event) => {
    event.preventDefault();
    regionId = event.target.value;
    setProvinces([]);
    setMunicipalities([]);
    setBarangays([]);
    fetchProvincesByRegion(regionId);
  };

  const handleProvinceChange = (event) => {
    event.preventDefault();
    setMunicipalities([]);
    setBarangays([]);
    provinceId = event.target.value;
    fetchMunicipalitiesByProvince(provinceId);
  };

  const handleMunicipalityChange = (event) => {
    event.preventDefault();
    municipalityId = event.target.value;
    setBarangays([]);
    fetchBarangaysByMunicipality(municipalityId);
  };

  const handleBarangayChange = (event) => {
    event.preventDefault();
    barangayId = event.target.value;
  };

  useEffect(() => {
    fetchRegions();
    return () => {
      setRegions({});
      setProvinces([]);
      setMunicipalities([]);
      setBarangays([]);
    };
  }, []);

  return (
    <div>
      <div className="select-form mt-5">
        <label
          htmlFor="address"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Address
        </label>
        <input
          type="text"
          id="address"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="select-form mt-5">
        <label
          htmlFor="region"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Region
        </label>
        <select
          id="region"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handelRegionChange}
        >
          <option>Region</option>
          {regions.map((value, index) => {
            return (
              <option key={index} value={value.region_id}>
                {value.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="select-form mt-5">
        <label
          htmlFor="province"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Province
        </label>
        <select
          id="province"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleProvinceChange}
        >
          <option>Province</option>
          {provinces.map((value, index) => {
            return (
              <option key={index} value={value.province_id}>
                {value.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="select-form mt-5">
        <label
          htmlFor="municipality"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          City/Municipality
        </label>
        <select
          id="municipality"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleMunicipalityChange}
        >
          <option>City/Municipality</option>
          {municipalities.map((value, index) => {
            return (
              <option key={index} value={value.municipality_id}>
                {value.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="select-form mt-5">
        <label
          htmlFor="barangay"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Barangay
        </label>
        <select
          id="barangay"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleBarangayChange}
        >
          <option>Barangay</option>
          {barangays.map((value, index) => {
            return (
              <option key={index} value={value.barangay_id}>
                {value.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default AddressForm;
