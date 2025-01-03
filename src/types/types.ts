export interface Coordinates {
  x: number;
  y: number;
}

export interface Edge {
  start: Coordinates;
  end: Coordinates;
}

export interface Team {
  id: string;
  name: string;
  image: string;
  role: string;
  tag?: string;
  href: string;
  vertex: Coordinates;
  textBelow: boolean;
}

export interface FAQType {
  id: string;
  question: string;
  answer: string;
}
