import { oswald } from "@/app/fonts";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className="relative h-[70vh]">
      <div className="bg-[url('https://i.ibb.co/mhFcgFv/page-title-background-image.jpg')] bg-no-repeat bg-cover bg-right-bottom bg-fixed h-full" />

      <div className="h-full w-full bg-black bg-opacity-50 absolute top-0 flex justify-center items-center">
        <h2
          className={`text-white text-3xl md:text-5xl lg:text-6xl uppercase ${oswald} font-bold`}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default PageTitle;
