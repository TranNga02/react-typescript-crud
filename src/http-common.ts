import axios from "axios";

export default axios.create({
  baseURL: "https://api-base.utilityhelpful.com/api/v1/admin",
  headers: {
    "Content-type": "application/json"
  }
});