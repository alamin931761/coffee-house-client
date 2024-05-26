"use client";

import { merriweather, open_sans, oswald } from "./fonts";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="h-[calc(100vh-64px)] flex flex-col justify-center items-center">
      <p className={`text-red-500 font-bold ${oswald.className} mb-5`}>
        Error:{" "}
        <span className={`${merriweather.className} font-normal`}>
          {error.message}!
        </span>
      </p>

      {/* Button to trigger reset function */}
      <button
        onClick={() => reset()}
        className={`btn btn-outline rounded-none px-10 border-none bg-whiskey uppercase font-extrabold transition ease-linear duration-500 ${open_sans.className}`}
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
