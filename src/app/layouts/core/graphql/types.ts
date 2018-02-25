export type Jersey = {
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
  stocks?: Stock[];
}

export type Stock = {
  size: string;
  quantity: number;
}

export type Query = {
  jerseys: Jersey[];
  jersey(friendly_url: string): Jersey;
}