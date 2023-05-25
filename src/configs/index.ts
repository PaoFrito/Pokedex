import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "./.env") });

interface ENV {
  SERVER_PORT: number | undefined;
  POKEMON_API_URL: string | undefined;
}

interface Config {
  SERVER_PORT: number;
  POKEMON_API_URL: string;
}

const getConfig = (): ENV => {
  return {
    SERVER_PORT: process.env.SERVER_PORT
      ? Number(process.env.SERVER_PORT)
      : undefined,
    POKEMON_API_URL: process.env.POKEMON_API_URL,
  };
};

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const env = getSanitzedConfig(config);

export default env;
