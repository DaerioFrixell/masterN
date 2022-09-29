import axios from "axios";

export const api = axios.create({
  baseUrl: "https://swapi.dev/api/",
})

