import axios from "axios";

const api = axios.create({
  baseURL: "https://devpizza-frontend.vercel.app/",
});

export { api };
