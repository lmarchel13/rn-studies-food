import axios from "axios";
import { yelp } from "../config";

export default axios.create({
  baseURL: yelp.baseURL,
  headers: {
    Authorization: `Bearer ${yelp.apiKey}`
  }
});
