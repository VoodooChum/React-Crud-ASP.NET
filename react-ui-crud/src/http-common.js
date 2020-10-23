import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:44390/Users",
  headers: {
    "Content-type": "application/json"
  }
});