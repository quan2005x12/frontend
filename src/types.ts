export interface DishMatch {
  name: string;
  match: string;
  description: string;
  image: string;
  tags: string[];
}

export interface HistoryItem {
  id: string;
  name: string;
  time: string;
  image: string;
  tags: string[];
}

export interface HistoryGroup {
  date: string;
  items: HistoryItem[];
}

export interface RecipeStep {
  step: string;
  title: string;
  desc: string;
}

export interface Ingredient {
  name: string;
  icon: any;
  description: string;
}
