type PokemonApi = {
  id: number;
  name: string;
  baseExperience: number;
  height: number;
  isDefault: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: Species[];
  gameIndices: GameIndex[];
  heldItems: HeldItem[];
  locationAreaEncounters: string;
  moves: Move[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: TypeApi[];
  pastTypes: PastType[];
};

type Ability = {
  isHidden: boolean;
  slot: number;
  ability: Species;
};

type Species = {
  name: string;
  url: string;
};

type GameIndex = {
  gameIndex: number;
  version: Species;
};

type HeldItem = {
  item: Species;
  versionDetails: VersionDetail[];
};

type VersionDetail = {
  rarity: number;
  version: Species;
};

type Move = {
  move: Species;
  versionGroupDetails: VersionGroupDetail[];
};

type VersionGroupDetail = {
  levelLearnedAt: number;
  versionGroup: Species;
  moveLearnMethod: Species;
};

type PastType = {
  generation: Species;
  types: TypeApi[];
};

type TypeApi = {
  slot: number;
  type: Species;
};

type GenerationV = {
  blackWhite: Sprites;
};

type GenerationIv = {
  diamondPearl: Sprites;
  heartgoldSoulsilver: Sprites;
  platinum: Sprites;
};

type Versions = {
  generationI: GenerationI;
  generationIi: GenerationIi;
  generationIii: GenerationIii;
  generationIv: GenerationIv;
  generationV: GenerationV;
  generationVi: { [key: string]: Home };
  generationVii: GenerationVii;
  generationViii: GenerationViii;
};

type Sprites = {
  backDefault: string;
  backFemale: null;
  backShiny: string;
  backShinyFemale: null;
  frontDefault: string;
  frontFemale: null;
  frontShiny: string;
  frontShinyFemale: null;
  other?: Other;
  versions?: Versions;
  animated?: Sprites;
};

type GenerationI = {
  redBlue: RedBlue;
  yellow: RedBlue;
};

type RedBlue = {
  backDefault: string;
  backGray: string;
  frontDefault: string;
  frontGray: string;
};

type GenerationIi = {
  crystal: Crystal;
  gold: Crystal;
  silver: Crystal;
};

type Crystal = {
  backDefault: string;
  backShiny: string;
  frontDefault: string;
  frontShiny: string;
};

type GenerationIii = {
  emerald: Emerald;
  fireredLeafgreen: Crystal;
  rubySapphire: Crystal;
};

type Emerald = {
  frontDefault: string;
  frontShiny: string;
};

type Home = {
  frontDefault: string;
  frontFemale: null;
  frontShiny: string;
  frontShinyFemale: null;
};

type GenerationVii = {
  icons: DreamWorld;
  ultraSunUltraMoon: Home;
};

type DreamWorld = {
  frontDefault: string;
  frontFemale: null;
};

type GenerationViii = {
  icons: DreamWorld;
};

type Other = {
  dreamWorld: DreamWorld;
  home: Home;
  officialArtwork: OfficialArtwork;
};

type OfficialArtwork = {
  frontDefault: string;
};

type Stat = {
  baseStat: number;
  effort: number;
  stat: Species;
};

export default PokemonApi; 
export type { Stat, TypeApi };