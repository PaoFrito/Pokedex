import axios from "axios";
import env from "../configs";

export const api = axios.create({
  baseURL: env.POKEMON_API_URL,
});
