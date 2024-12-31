export interface Coordinates {
  x: number;
  y: number;
}

interface Team {
  id: string;
  name: string;
  image: string;
  role: string;
  tag?: string;
  href: string;
  vertex: Coordinates;
  textBelow: boolean;
}

export const team: Team[] = [
  {
    id: "team1",
    name: "John Doe",
    image: "/",
    role: "Director",
    href: "https://google.com",
    vertex: { x: 400, y: 100 },
    textBelow: false,
  },
  {
    id: "team2",
    name: "Jane Doe",
    image: "/",
    role: "Director",
    href: "https://google.com",
    vertex: { x: 250, y: 550 },
    textBelow: true,
  },
  {
    id: "team3",
    name: "Michael Smith",
    image: "/",
    role: "Director",
    href: "https://google.com",
    vertex: { x: 650, y: 270 },
    textBelow: false,
  },
  {
    id: "team4",
    name: "Foo Bar",
    image: "/",
    role: "Director",
    href: "https://google.com",
    vertex: { x: 750, y: 550 },
    textBelow: true,
  },
];
