import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GameDetail } from "../util/types";
import axios from "axios";

export const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState<GameDetail | null>(null);
  useEffect(() => {
    const fetchGameById = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      try {
        const res = await axios.get(
          `https://api.rawg.io/api/games/${id}?key=${apiKey}`
        );
        setGame(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGameById();
  });
  // console.log(game);
  return <div>GameDetails</div>;
};
