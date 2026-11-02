export type Reliability = 'oficial' | 'imprensa' | 'blog';
export type Status = 'confirmado' | 'fonte-unica' | 'divergente';

export interface Source {
  id: string;
  title: string;
  author: string;
  published: string; // ISO ou aproximado
  kind: string;
  url: string;
  accessed: string;
  reliability: Reliability;
  supports: string;
}

export type EventCategory =
  | 'Acontecimento' | 'Registro policial' | 'Informação à imprensa'
  | 'Etapa investigativa' | 'Prisão' | 'Decisão judicial' | 'Repercussão pública';

export interface TimelineEvent {
  id: string;
  date: string;        // ISO yyyy-mm-dd ou yyyy-mm
  dateLabel: string;
  approximate?: boolean;
  title: string;
  description: string;
  category: EventCategory;
  status: Status;
  note?: string;       // divergências entre fontes
  markerId?: string;
  personIds?: string[];
  sourceIds: string[];
  chapter: string;
}

export type MarkerKind = 'evento' | 'investigacao' | 'localizacao' | 'marco' | 'institucional';

export interface MapMarker {
  id: string;
  personIds?: string[]; // pessoas exibidas ao selecionar o local
  name: string;
  kind: MarkerKind;
  lat: number;
  lng: number;
  precision: 'area' | 'municipio' | 'ponto-publico';
  period: string;
  description: string;
  limitation: string;
  chapter: string;
  sourceIds: string[];
}

export interface Person {
  id: string;
  name: string;
  role: 'vitima' | 'investigado';
  profile?: { fullName: string; ageThen: number | null; occupation: string; approach: string[]; death: string[]; post: string[]; found: string[] };
  tagline?: string; // linha curta sob o nome (idade · ocupação)
  bio?: { h: string; p: string[] }[]; // biografia por seções
  bioSources?: string[];
  gallery?: { id: string; label: string }[]; // fotos adicionais exibidas no modal
  summary: string;
  facts: { label: string; value: string; status: Status; sourceIds: string[] }[];
  eventIds: string[];
  limitation?: string;
}

export interface Chapter { id: string; num: string; title: string; }
