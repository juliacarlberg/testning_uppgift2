import { IMovie } from "../../models/Movie";

export const mockData: IMovie[] = [
  {
    Title: "spiderman",
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
    Title: "spiderman",
    imdbID: "123",
    Type: "film",
    Poster: "poster",
    Year: "1997",
  },
];

export const getData = async (): Promise<IMovie[]> => {
  return new Promise((resolve) => {
    resolve(mockData);
  });
};
