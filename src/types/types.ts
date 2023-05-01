export interface ICell {
  row: number;
  col: number;
  kef: number;
  id: number;
}

export interface IDataField {
  name: string;
  kef: number;
  type: number;
  sections: ICell[];
}
export interface ICoordinatesTank {
  top: number;
  left: number;
  col: number;
  row: number;
  type: number;
}
interface IActionsTank {
  move: number;
  defend: number;
  fire: {
    ammunition: number;
    // defend:number
    precision: number[];
    intensity: {
      light: number[];
      middle: number[];
      humans: number[];
    };
  };
}

export interface ITank {
  id: number;
  name: string;
  img: any;
  count: number;
  type: string;
  prevDeffStep: number;
  afterStepData: { move: number; defend: number };
  team: number;
  activeTank: boolean;
  coordinates: ICoordinatesTank;
  actions: IActionsTank;
}
