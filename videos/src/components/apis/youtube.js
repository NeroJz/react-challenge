import axios from "axios";

const KEY = "AIzaSyAthC2h_xMKBwoYFb2hmTv-EbunOMBfWXI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
