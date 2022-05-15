import api from "./api";

export async function getRegions() {
  try {
    const response = await api({
      url: "/regions",
      method: "get",
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export async function getProvinces() {
  try {
    const response = await api({
      url: "/provinces",
      method: "get",
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export async function getMunicipalities(pageNumber) {
  try {
    const response = await api({
      url: `/municipalities?page=${pageNumber}`,
      method: "get",
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export async function getBarangays(pageNumber) {
  try {
    const response = await api({
      url: `/barangays?page=${pageNumber}`,
      method: "get",
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export async function getProvincesByRegion(id) {
  try {
    const response = await api({
      url: `/provinces-by-region/${id}`,
      method: "get",
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export async function getMunicipalitiesByProvince(id) {
  try {
    const response = await api({
      url: `/municipalities-by-province/${id}`,
      method: "get",
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export async function getBarangaysByMunicipality(id) {
  try {
    const response = await api({
      url: `/barangays-by-municipality/${id}`,
      method: "get",
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}
