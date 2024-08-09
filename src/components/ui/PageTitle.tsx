import { oswald } from "@/app/fonts";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className="relative h-[70vh]">
      {/* Background image */}
      <div className="bg-[url('https://i.postimg.cc/vB7q8fJ7/page-title-background-image.jpg')] bg-no-repeat bg-cover bg-right-bottom bg-fixed h-full" />

      {/* Overlay */}
      <div className="h-full w-full bg-black bg-opacity-50 absolute top-0 flex justify-center items-center">
        {/* Title */}
        <h2
          className={`text-white text-3xl md:text-5xl lg:text-6xl uppercase ${oswald.className} font-bold`}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default PageTitle;
