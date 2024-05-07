
export enum Brand {

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
  Empty,
}

export type Gear = {
  name: string;
  uuid: string;
  brand: string;
  randomContext?: number;
  mainAbility?: number;
  abilityHistory: Ability[];
  favorite: boolean;

}