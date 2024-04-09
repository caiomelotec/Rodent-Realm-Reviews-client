import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination } from "../components/Pagination";
import { useSearchStore } from "../store/searchStore";
import { categories } from "../util/data";
import GameCard from "../components/GameCard";
import { Game } from "../util/types";

export const Home = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const { search } = useSearchStore();

  useEffect(() => {
    let param = ""; // Initialize param
    let foundMatch = false; // Flag to track whether a match is found

    categories.forEach((category) => {
      if (category.name === search) {
        param = `&genres=${search.toLowerCase()}`;
        foundMatch = true; // Set flag to true if a match is found
      }
    });

    // If no match is found, set param based on search length
    if (!foundMatch && search.length > 0) {
      param = `&search=${search}`;
    } else if (!foundMatch && search.length === 0) {
      param = `&page=${pageNumber}`; // If neither a match is found nor search length === 0
    }

    const fetchGamesList = async (): Promise<void> => {
      const apiKey = import.meta.env.VITE_API_KEY;
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=${apiKey}${param}`
        );
        setGames(response.data.results);
        console.log(response.data.results[0].genres);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGamesList();
  }, [pageNumber, search]);

  return (
    // <h1>Hello</h1>
    <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-2 items-center bg-gray-300 dark:bg-slate-800 min-h-[93vh]">
      {games.map((game: Game) => (
        <GameCard
          key={game.id}
          id={game.id}
          name={game.name}
          released={game.released}
          background_image={game.background_image}
          genres={game.genres}
        />
      ))}
      {search.length === 0 && (
        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
    </div>
  );
};
