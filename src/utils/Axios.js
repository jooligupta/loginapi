import axios from "axios";

export default axios.create({
  baseURL:"https://bringonstore-backend.herokuapp.com",
  responseType: "json",
});