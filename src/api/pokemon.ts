import axios from "axios";
import env from "../configs";

export const pokemon_api = axios.create({
  baseURL: env.POKEMON_API_URL,
});