import axios from "axios";
const HOST = "http://localhost:3001";

const AXIOS = axios.create();

const getAccessToken = () => {
  if (import.meta.client) {
    const auth = localStorage?.getItem("auth");
    if (auth) {
      return JSON.parse(auth)?.authToken;
    }
  } else {
    return "";
  }
};

const checkAuth = (status: number) => {
  if (status === 401) {
    localStorage.removeItem("auth");
    location.replace("/");
  }
};

export const GET = async (URL: string, params = {}) => {
  try {
    let accessToken = getAccessToken();
    let response = await AXIOS.get(HOST + URL, {
      params,
      headers: {
        Authorization: accessToken,
      },
    });

    return response.data;
  } catch (error: any) {
    console.error(error);

    checkAuth(error?.response.status);
    throw error?.response.data;
  }
};
export const POST = async (URL: string, data: any) => {
  try {
    let accessToken = getAccessToken();
    let response = await AXIOS.post(HOST + URL, data, {
      headers: {
        Authorization: accessToken,
      },
    });

    return response.data;
  } catch (error: any) {
    console.error(error);

    checkAuth(error?.response.status);
    throw error?.response.data;
  }
};
export const PUT = async (URL: string, data: any) => {
  try {
    let accessToken = getAccessToken();
    let response = await AXIOS.put(HOST + URL, data, {
      headers: {
        Authorization: accessToken,
      },
    });

    return response.data;
  } catch (error: any) {
    console.error(error);

    checkAuth(error?.response.status);
    throw error?.response.data;
  }
};
export const PATCH = async (URL: string, data: any) => {
  try {
    let accessToken = getAccessToken();
    let response = await AXIOS.patch(HOST + URL, data, {
      headers: {
        Authorization: accessToken,
      },
    });

    return response.data;
  } catch (error: any) {
    console.error(error);

    checkAuth(error?.response.status);
    throw error?.response.data;
  }
};
export const DELETE = async (URL: string, data: any) => {
  try {
    let accessToken = getAccessToken();
    let response = await AXIOS.delete(HOST + URL, {
      headers: {
        Authorization: accessToken,
      },
      data,
    });

    return response.data;
  } catch (error: any) {
    console.error(error);

    checkAuth(error?.response.status);
    throw error?.response.data;
  }
};
export const UPLOAD = async (URL: string, data: any) => {
  try {
    let accessToken = getAccessToken();
    let response = await AXIOS.post(HOST + URL, data, {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: accessToken,
      },
    });

    return response.data;
  } catch (error: any) {
    console.error(error);

    checkAuth(error?.response.status);
    throw error?.response.data;
  }
};
