import { MovieDetailsProps } from "../config/types";

export const DisplayMovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <>
      <div>Name: {movie.name}</div>
      <div>Academy Award Wins: {movie.academyAwardWins}</div>
      <div>Academy Award Nominations: {movie.academyAwardNominations}</div>
      <div>
        Box Office Revenue (in millions): {movie.boxOfficeRevenueInMillions}
      </div>
      <div>Budget (in millions): {movie.budgetInMillions}</div>

      <div>Rotten Tomatoes Score: {movie.rottenTomatoesScore}</div>
      <div>Runtime (in minutes): {movie.runtimeInMinutes}</div>
    </>
  );
};
