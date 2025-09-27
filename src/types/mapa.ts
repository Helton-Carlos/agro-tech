export interface Lugar {
  nome: string;
  coords: [number, number];
  bairro?: string;
  rua?: string;
  numero?: string | number;
}
