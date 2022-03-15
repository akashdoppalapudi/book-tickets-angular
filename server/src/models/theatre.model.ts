import { Layout } from './layout.model';

export interface Theatre {
  id: number;
  name: string;
  cityId: number;
  layout: Layout;
  maxSeats: number;
}
