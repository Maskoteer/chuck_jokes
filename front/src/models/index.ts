export interface IAllJokes {
  result: IJoke[];
  total: number;
}
export interface IJoke {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
  //these info are not provided by chuck norris api's so their value will be generated randomly
  likes: number;
  dislikes: number;
  title: string;
}

export interface ICategory {
  category_name: string;
  category_color: string;
}

export interface IPopularity {
  label: string;
  color: string;
}
