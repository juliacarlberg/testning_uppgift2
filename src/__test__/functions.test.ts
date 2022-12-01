import { IMovie } from "../ts/models/Movie";
import * as functions from "./../ts/functions";

test("should sort movies a-ö", () => {
  let myMovies: IMovie[] = [
    {
      Title: "ironman",
      imdbID: "123",
      Type: "film",
      Poster: "poster",
      Year: "1997",
    },
    {
      Title: "spiderman",
      imdbID: "123",
      Type: "film",
      Poster: "poster",
      Year: "1997",
    },
    {
      Title: "captain america",
      imdbID: "123",
      Type: "film",
      Poster: "poster",
      Year: "1997",
    },
    {
      Title: "captain america",
      imdbID: "123",
      Type: "film",
      Poster: "poster",
      Year: "1997",
    },
  ];

  functions.movieSort(myMovies);

  expect(myMovies[0].Title).toBe("captain america");
  expect(myMovies[3].Title).toBe("spiderman");
});

test("should sort movies ö-a", () => {
  let myMovies: IMovie[] = [
    {
      Title: "ironman",
      imdbID: "123",
      Type: "film",
      Poster: "poster",
      Year: "1997",
    },
    {
      Title: "spiderman",
      imdbID: "123",
      Type: "film",
      Poster: "poster",
      Year: "1997",
    },
    {
      Title: "captain america",
      imdbID: "123",
      Type: "film",
      Poster: "poster",
      Year: "1997",
    },
    {
      Title: "captain america",
      imdbID: "123",
      Type: "film",
      Poster: "poster",
      Year: "1997",
    },
  ];

  functions.movieSort(myMovies, false);

  expect(myMovies[0].Title).toBe("spiderman");
  expect(myMovies[3].Title).toBe("captain america");
});
