import axios from "axios";

const axio = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default axio;
