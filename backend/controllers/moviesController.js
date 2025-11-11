import axios from "axios";

export const getTrending = async (req, res) => {
  try {
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.TMDB_KEY}`;
    const { data } = await axios.get(url);
    res.json(data.results);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch movies" });
  }
};
