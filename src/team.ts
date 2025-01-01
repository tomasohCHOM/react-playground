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

export const team: Team[][] = [
  [
    {
      id: "director1",
      name: "Sama",
      image: "/",
      role: "Director",
      href: "https://google.com",
      vertex: { x: 400, y: 100 },
      textBelow: false,
    },
    {
      id: "director2",
      name: "Eric",
      image: "/",
      role: "Director + Finance",
      href: "https://google.com",
      vertex: { x: 250, y: 550 },
      textBelow: true,
    },
    {
      id: "director3",
      name: "Joel",
      image: "/",
      role: "Director",
      href: "https://google.com",
      vertex: { x: 650, y: 270 },
      textBelow: false,
    },
    {
      id: "director4",
      name: "Pillow",
      image: "/",
      role: "Director",
      href: "https://google.com",
      vertex: { x: 750, y: 550 },
      textBelow: true,
    },
  ],
  [
    {
      id: "web1",
      name: "Tomas",
      image: "/",
      role: "Web Team Lead",
      href: "https://google.com",
      vertex: { x: 100, y: 150 },
      textBelow: true,
    },
    {
      id: "web2",
      name: "Jeremiah",
      image: "/",
      role: "Web Officer",
      href: "https://google.com",
      vertex: { x: 300, y: 120 },
      textBelow: true,
    },
    {
      id: "web3",
      name: "John",
      image: "/",
      role: "Web Officer",
      href: "https://google.com",
      vertex: { x: 450, y: 190 },
      textBelow: true,
    },
    {
      id: "web4",
      name: "Andres",
      image: "/",
      role: "Web Officer",
      href: "https://google.com",
      vertex: { x: 500, y: 320 },
      textBelow: true,
    },
    {
      id: "web5",
      name: "Jordan",
      image: "/",
      role: "Web Officer",
      href: "https://google.com",
      vertex: { x: 530, y: 550 },
      textBelow: true,
    },
    {
      id: "web6",
      name: "Gustavo",
      image: "/",
      role: "Web Officer",
      href: "https://google.com",
      vertex: { x: 850, y: 390 },
      textBelow: true,
    },
    {
      id: "web7",
      name: "Daniel",
      image: "/",
      role: "Web Officer",
      href: "https://google.com",
      vertex: { x: 880, y: 620 },
      textBelow: true,
    },
  ],
];

export const teamEdges: Edge[][] = [
  [
    { start: { x: 650, y: 270 }, end: { x: 750, y: 550 } },
    { start: { x: 750, y: 550 }, end: { x: 250, y: 550 } },
    { start: { x: 400, y: 100 }, end: { x: 250, y: 550 } },
    { start: { x: 400, y: 100 }, end: { x: 650, y: 270 } },
  ],
  [
    { start: { x: 100, y: 150 }, end: { x: 300, y: 120 } },
    { start: { x: 300, y: 120 }, end: { x: 450, y: 190 } },
    { start: { x: 450, y: 190 }, end: { x: 500, y: 320 } },
    { start: { x: 500, y: 320 }, end: { x: 530, y: 550 } },
    { start: { x: 500, y: 320 }, end: { x: 850, y: 390 } },
    { start: { x: 850, y: 390 }, end: { x: 880, y: 620 } },
    { start: { x: 530, y: 550 }, end: { x: 880, y: 620 } },
  ],
];