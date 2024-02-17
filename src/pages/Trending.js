import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import TrendingCoin from "../components/TrendingCoin";
import { TrendContext } from "./../context/TrendingContext";

const Trending = () => {
  const { trendData, trendError,resetTrendingResult } = useContext(TrendContext);

  return (
    <section className="lg:w-[80%] w-[90%] h-full flex flex-col  mb-24 mt-16 relative">
      <div className="w-full flex lg:flex-row flex-col items-center flex-wrap justify-evenly py-8 border border-gray-100 rounded min-h-[60vh] ">
        {trendData && trendData.coins ? (
          trendData.coins.map((coin) => (
            <TrendingCoin
              key={coin.item.coin_id}
              data={coin.item}
            />
          ))
        ) : !trendError ? (
          <div className="w-full min-h-[50vh] flex justify-center items-center">
            <div
              className="w-8 h-8 border-4 border-solid border-cyan rounded-full border-b-gray-200 animate-spin"
              role="status"
            />
            <span className="text-base ml-2">please wait...</span>
          </div>
        ) : trendError ? (
          <h1 className="min-h-[60vh] text-lg text-red flex items-center justify-center ">
            {trendError ? trendError : "Something unexpected happened!"}
          </h1>
        ) : null}
      </div>
      <div className="flex items-center justify-between  mt-4 capitalize h-[2rem]">
        <span>
          Data provided by{" "}
          <a
            className="text-cyan"
            href="https://www.coingecko.com"
            target={"_blank"}
            rel="noreferrer"
          >
            CoinGecko
          </a>
        </span>

        <button
          className="w-[2rem] ml-4 hover:scale-110 transition-all transition-ease
        absolute right-0 -top-10 
        "
          onClick={() => resetTrendingResult()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="w-full h-full fill-cyan"
            style={{
              msTransform: "rotate(360deg)",
              WebkitTransform: "rotate(360deg)",
              transform: "rotate(360deg)",
            }}
          >
            <path d="M12 16c1.671 0 3-1.331 3-3s-1.329-3-3-3-3 1.331-3 3 1.329 3 3 3z" />
            <path d="M20.817 11.186a8.94 8.94 0 0 0-1.355-3.219 9.053 9.053 0 0 0-2.43-2.43 8.95 8.95 0 0 0-3.219-1.355 9.028 9.028 0 0 0-1.838-.18V2L8 5l3.975 3V6.002c.484-.002.968.044 1.435.14a6.961 6.961 0 0 1 2.502 1.053 7.005 7.005 0 0 1 1.892 1.892A6.967 6.967 0 0 1 19 13a7.032 7.032 0 0 1-.55 2.725 7.11 7.11 0 0 1-.644 1.188 7.2 7.2 0 0 1-.858 1.039 7.028 7.028 0 0 1-3.536 1.907 7.13 7.13 0 0 1-2.822 0 6.961 6.961 0 0 1-2.503-1.054 7.002 7.002 0 0 1-1.89-1.89A6.996 6.996 0 0 1 5 13H3a9.02 9.02 0 0 0 1.539 5.034 9.096 9.096 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22a9.09 9.09 0 0 0 1.814-.183 9.014 9.014 0 0 0 3.218-1.355 8.886 8.886 0 0 0 1.331-1.099 9.228 9.228 0 0 0 1.1-1.332A8.952 8.952 0 0 0 21 13a9.09 9.09 0 0 0-.183-1.814z" />
            <path fill="rgba(0, 0, 0, 0)" d="M0 0h24v24H0z" />
          </svg>
        </button>
      </div>

      <Outlet />
    </section>
  );
};

export default Trending;