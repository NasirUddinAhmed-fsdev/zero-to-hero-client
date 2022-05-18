import axios from "axios";

const fetchUrl = axios.create({
  baseURL: "http://localhost:5000",
});

export default fetchUrl;
