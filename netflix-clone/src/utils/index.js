const API_KEY = "7be5c4bea4358213633acaa83667f1bb";
const BASE_URL =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmU1YzRiZWE0MzU4MjEzNjMzYWNhYTgzNjY3ZjFiYiIsInN1YiI6IjY1NjQxY2U3ZmI1Mjk5MDEyMDAxMjFjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zJuJcMy-e2MS1FmEsgUIEuAt9GX5XCsRcH6LL0Cq3j8";

export const getTrendingMedias = async (type) => {
  try {
    const res = await fetch(
      `${BASE_URL}/trending/$/{type}/day?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};

export const getTopratedMedias = async (type) => {
  try {
    const res = await fetch(
      `${BASE_URL}/$/{type}/top_rated?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};

export const getPopularMedias = async (type) => {
  try {
    const res = await fetch(
      `${BASE_URL}/$/{type}/popular?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};
