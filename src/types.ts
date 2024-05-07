
export type Profile = {
  npln_user_id: string;
}

export enum Brand {
  "B00",
  "B01",
  "B02",
  "B03",
  "B04",
  "B05",
  "B06",
  "B07",
  "B08",
  "B09",
  "B10",
  "B11",
  "B15",
  "B16",
  "B17",
  "B18",
  "B19",
  "B20",
  "B97",
  "B98",
  "B99",
  "None",
}

export enum Ability {
  MainInk_Save,
  SubInk_Save,
  InkRecovery_Up,
  HumanMove_Up,
  SquidMove_Up,
  SpecialIncrease_Up,
  RespawnSpecialGauge_Save,
  SpecialSpec_Up,
  RespawnTime_Save,
  JumpTime_Save,
  SubSpec_Up,
  OpInkEffect_Reduction,
  SubEffect_Reduction,
  Action_Up,
  StartAllUp,
  EndAllUp,
  ComeBack,
  SquidMoveSpatter_Reduction,
  Exorcist,
  ObjectEffect_Up,
  SomersaultLanding,
  Unknown,
}

export type Gear = {
  id: number;
  brand: Brand;
  type: GearType;
  mainAbility: Ability
  abilityHistory?: Ability[]
}

export enum GearType {
  Head="Head",
  Clothes="Clothes",
  Shoes="Shoes",
}

export type TrackedGear = {
  name: string;
  uuid: string;
  seed?: number;
  gear: Partial<Gear>;
  favorite: boolean;
}