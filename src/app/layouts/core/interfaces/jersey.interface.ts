import { Stock } from './stock.interface';

export interface Jersey {
  id?: number;
  image?: string;
  reference?: number;
  teamname?: string;
  year?: number;
  nickname?: string;
  price?: number;
  type?: string;
  color?: string;
  friendly_url?: string;
  size?: string;
  quantity?: number;
  stocks: Stock[];
}
