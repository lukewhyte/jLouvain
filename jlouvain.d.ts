export interface Edge {
  source: string;
  target: string;
  weight?: number;
}

export interface Partition {
  [id: string]: number
}

export interface Communities {
  [id: string]: number; 
}

export interface jLouvainGenerator {
  (): Communities;
  nodes: (nodes: string[]) => jLouvainGenerator;
  edges: (edges: Edge[]) => jLouvainGenerator;
  partition_init: (parts: Partition) => jLouvainGenerator
}

export function jLouvain(): jLouvainGenerator;
