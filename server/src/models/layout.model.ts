import { Seat } from './seat.model';

export interface Layout {
  rows: number;
  columns: number;
  layout: Seat[][];
}
