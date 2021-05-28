
export interface IBmi {
  Gender: string,
  HeightCm: number,
  WeightKg: number
}

export interface IBmiOutput{
  numberOfOWPersons?:number,
  bmiInfo?: IBmiInfo[]
}
export interface IBmiInfo {
  height?:number,
  weight?:number,
  gender?:string,
  bmiCategory?: string,
  healthRisk?: string;
  bmi?: number,
}
