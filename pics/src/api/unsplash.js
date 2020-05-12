import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Gmzwvjwbz980Ubbfw4y5zB_LCNUDQarEEm3S-QYEc_E",
  },
});
