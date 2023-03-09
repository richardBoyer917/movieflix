import axios from "axios";
const backend = "http://127.0.0.1:8000/";
export const fget = async ({ url }) => {
  const res = await axios.get(process.env.REACT_APP_BASE_URL + `${url}`, {});
  return res;
};

export const fpatch = async ({ url, data }) => {
  const res = await axios.patch(
    process.env.REACT_APP_BASE_URL + `${url}`,
    data,
    {}
  );
  return res;
};

export const fpost = async ({ url, data }) => {
  const res = await axios.post(
    process.env.REACT_APP_BASE_URL + `${url}`,
    data,
    {}
  );
  return res;
};

export const fdelete = async ({ url }) => {
  const res = await axios.delete(process.env.REACT_APP_BASE_URL + `${url}`, {});
  return res;
};
export const getBackend = async ({ url }) => {
  const res = await axios.get(backend + `${url}`, {});
  return res;
};

export const patchBackend = async ({ url, data }) => {
  const res = await axios.patch(backend + `${url}`, data, {});
  return res;
};

export const postBackend = async ({ url, data }) => {
  const res = await axios.post(backend + `${url}`, data, {});
  return res;
};

export const deleteBackend = async ({ url }) => {
  const res = await axios.delete(backend + `${url}`, {});
  return res;
};
