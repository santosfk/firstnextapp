import { Key, baseUrl } from "../../lib/tmdb";

export default async function (req, res) {
  const result = await fetch(`${baseUrl}/trending/movie/week?api_key=${Key}`);
  const json = await result.json();
  res.status(200).json({ list: json.results });
}
