export interface Movie {
  academyAwardNominations: number;
  academyAwardWins: number;
  boxOfficeRevenueInMillions: number;
  budgetInMillions: number;
  name: string;
  rottenTomatoesScore: number;
  runtimeInMinutes: number;
  _id: string;
}

export interface Quote {
  character: string;
  dialog: string;
  id: string;
  movie: string;
  _id: string;
}

export interface Character {
  birth: string;
  death: string;
  gender: string;
  hair: string;
  height: string;
  name: string;
  race: string;
  realm: string;
  spouse: string;
  wikiUrl: string;
  _id: string;
}

export interface DataTypeState {
  dataType: IQueryTypes;
}
export interface DataState {
  data: Movie[] | Quote[] | Character[];
  limit: number;
  offset: number;
  total: number;
}

export interface QuotesState {
  quotes: Quote[];
}

export interface CharactersState {
  characters: Character[];
}

export interface MovieDetailsProps {
  movie: Movie;
}

export interface CharacterDetailsProps {
  character: Character;
}

export interface QuoteDetailsProps {
  quote: Quote;
}

export type LotrCardProps = Movie | Character | Quote;

export type IQueryTypes = "movie" | "character" | "quote";

export interface IfetchLotrItems {
  fetchLotrItems: (
    query: IQueryTypes,
    limit?: number,
    page?: number,
    offset?: number,
    _id?: number
  ) => Promise<{
    docs: Movie[] | Character[] | Quote[];
    total: number;
    offset: number;
    limit: number;
  }>;
}
