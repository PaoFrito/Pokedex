import { Ability } from "./ability";
import { Type } from "./type";

type Pokemon = {
  id: number;
  name: string;
  generation: number;
  abilities: Ability[];
  exp: number;
  hp: number;
  atk: number;
  sp_atk: number;
  def: number;
  sp_def: number;
  speed: number;
  types: Type[];
  isLegendaryOrMytical: boolean;
  sprite: string;
};

export default Pokemon;