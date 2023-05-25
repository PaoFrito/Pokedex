import { Ability } from "./ability";
import { Type } from "./type";

type Pokemon = {
  id: number;
  pokedex_id: number;
  name: string;
  generation: string;
  abilities: Ability[];
  exp: number;
  hp: number;
  atk: number;
  sp_atk: number;
  def: number;
  sp_def: number;
  speed: number;
  types: Type[];
  isLegendary: boolean;
  sprite: string;
  color: string
};

export default Pokemon;