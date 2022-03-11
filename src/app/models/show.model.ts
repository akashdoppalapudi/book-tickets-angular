import { Layout } from './layout.model';
import { Theatre } from './theatre.model';

export interface Show {
  id: number;
  name: string;
  time: string;
  movie: string;
  theatre: Theatre;
  bookings: string[];
}
