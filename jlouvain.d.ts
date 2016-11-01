export interface Edge {
  source: string;
  target: string;
  weight?: number;
}

export interface Communities {
  [id: string]: number; 
}

export interface jLouvainGenerator {
  (): Communities;
  nodes: (nodes: string[]) => jLouvainGenerator;
  edges: (edges: Edge[]) => jLouvainGenerator;
}

export function jLouvain(): jLouvainGenerator;
