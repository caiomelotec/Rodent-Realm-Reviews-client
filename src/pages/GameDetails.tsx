import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GameDetail } from "../util/types";
import axios from "axios";
import { platforms } from "../util/data";
import { IoIosSend } from "react-icons/io";
import DOMPurify from "dompurify";

export const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState<GameDetail>();
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
  // console.log(game?.description);
  return (
    <div className="bg-gray-300 dark:bg-slate-800 min-h-[93vh] flex justify-center">
      <div className="w-[800px] pt-10">
        <section className="flex justify-center gap-3 items-center dark:text-white">
          <img
            className="w-[550px] h-[500px] object-cover"
            src={game?.background_image}
            alt={game?.name}
          />
          <div className="flex flex-col">
            <p className="text-base font-semibold">Title:</p>
            <h1 className="text-2xl font-semibold">{game?.name}</h1>
            <p className="text-base font-semibold">Release Date:</p>
            <p className="text-base font-semibold">{game?.released}</p>
            <p className="text-base font-semibold">Genre:</p>
            {game?.genres?.map((i) => (
              <p className="text-base font-semibold" key={i.id}>
                {i.name}
              </p>
            ))}
            <p className="text-base font-semibold">Publisher:</p>
            {game?.publishers.map((p) => (
              <p className="text-base font-semibold" key={p.id}>
                {p.name}
              </p>
            ))}
            <p className="text-base font-semibold">Website:</p>
            <p>{game?.website}</p>
            <p className="text-xl font-semibold">Platforms:</p>
            <div className="flex flex-col-reverse gap-1">
              {platforms.map((platform) => {
                const gamePlatform = game?.platforms.find(
                  (p) =>
                    p.platform.name.toLowerCase() ===
                    platform.name.toLowerCase()
                );
                const IconComponent = platform.icon;

                return (
                  <div
                    className="text-xl font-semibold flex items-center gap-2"
                    key={platform.name}
                  >
                    {gamePlatform && <IconComponent size={30} />}
                    {gamePlatform?.platform.name}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="my-3 flex justify-evenly">
          <form className="flex items-center justify-center gap-1">
            <textarea
              name="review"
              id="review"
              className="bg-gray-400 placeholder:text-gray-600 rounded-md p-2 dark:bg-slate-400 dark:placeholder:text-slate-800"
              cols={100}
              rows={3}
              placeholder={`Write a review for ${game?.name}! Share your thoughts with our community`}
            ></textarea>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-6 text-center me-2 mb-2 mt-1 dark:from-slate-500"
            >
              <IoIosSend size={38} />
            </button>
          </form>
        </section>
        <section className="my--4 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold dark:text-white">About {game?.name}</h1>
         <div className="dark:text-white" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(game?.description || "") }} />
        </section>
      </div>
    </div>
  );
};
