import { describe, test, expect, jest } from "@jest/globals";
import { IMovie } from "../ts/models/Movie";
import { getData } from "../ts/services/movieservice";
import { mockData } from "../ts/services/__mocks__/movieservice";

jest.mock("axios", () => ({
  get: async () => {
    return new Promise((resolve) => {
      resolve({ data: { Search: mockData } });
    });
  },
}));

describe("api", () => {
  test("should get mockdata", async () => {
    //Arrange
    let textSearch: string = "söker film";
    //Act
    let movieInfo: IMovie[] = await getData(textSearch);

    //Assert
    expect(movieInfo.length).toBe(3);
    expect(movieInfo[2].Year).toBe("1997");
  });
});
