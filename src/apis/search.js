import instance from "./api";

export const search = async (query, setResults) => {
  try {
    const result = await instance.get(`/api/search?query=${query}`);
    setResults(result.data.results);
  } catch (error) {
    console.error("Error performing search:", error);
  }
};
