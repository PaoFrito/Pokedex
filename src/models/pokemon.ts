import { Ability } from "./ability";
import { Stats } from "./stats";
import { Type } from "./type";

export type Pokemon = {
  id: string;
  name: string;
  generation: number;
  abilities: Ability;
  exp: number;
  hp: Stats;
  atk: Stats;
  sp_atk: Stats;
  def: Stats;
  sp_def: Stats;
  speed: Stats;
  types: Type[];
  isLegendaryOrMytical: boolean;
  sprite: string;
};