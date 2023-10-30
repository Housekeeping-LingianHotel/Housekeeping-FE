export interface RoomStat {
  name: string;
  room: number;
  person: number;
  percentage?: number | '-';
}

export interface Stat {
  name: string;
  value: number;
}
