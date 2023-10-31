import { RoomStat } from 'src/types/stat';

export const arrivalDeparture: RoomStat[] = [
  {
    name: 'Departed Today',
    room: 7,
    person: 24,
  },
  {
    name: 'Departing',
    room: 7,
    person: 50,
  },
  {
    name: 'Total Departure',
    room: 14,
    person: 74,
  },
  {
    name: 'Checked in Today',
    room: 12,
    person: 24,
  },
  {
    name: 'Arriving',
    room: 60,
    person: 70,
  },
  {
    name: 'Total Arrival',
    room: 72,
    person: 94,
  },
];

export const roomOccupancy: RoomStat[] = [
  {
    name: 'Occupied Room',
    room: 115,
    person: 224,
    percentage: 115,
  },
  {
    name: 'Complimentary Rooms',
    room: 0,
    person: 0,
    percentage: 0.5,
  },
  {
    name: 'House Use Rooms',
    room: 2,
    person: 4,
    percentage: 0.5,
  },
  {
    name: 'Out-of-Order Rooms',
    room: 12,
    person: 0,
    percentage: 3.3,
  },
  {
    name: 'Inactive Rooms',
    room: 3,
    person: 0,
    percentage: '-',
  },
  {
    name: 'Estimated Occupied',
    room: 194,
    person: 380,
    percentage: 53.3,
  },
];
