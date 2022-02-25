import { Key, baseUrl } from "../../lib/tmdb";

export default async function (req, res) {
  let q = req.query.q;

  const result = await fetch(
    `${baseUrl}/search/movie?api_key=${Key}&query=${q}`
  );
  const json = await result.json();
  res.status(200).json({ list: json.results });
}
