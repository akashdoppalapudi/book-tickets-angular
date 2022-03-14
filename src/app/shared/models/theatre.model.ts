import { Layout } from './layout.model';

export interface Theatre {
  name: string;
  city: string;
  layout: Layout;
  maxSeats: number;
}
