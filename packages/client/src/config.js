const hostApi =
  process.env.NODE_ENV === "development"
    ? "http://localhost"
    : "http://prod";
const portApi = process.env.NODE_ENV === "development" ? 8080 : "";
const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}`;

export default {
  hostApi,
  portApi,
  baseURLApi,
  remote: "http://prod",
  isBackend: process.env.REACT_APP_BACKEND,
  auth: {
    email: "admin@sykxlab.com",
    password: "password"
  }
};
