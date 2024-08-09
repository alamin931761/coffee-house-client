import PageTitle from "@/components/ui/PageTitle";
import Image from "next/image";
import { open_sans, oswald } from "../fonts";
import { FaCheck } from "react-icons/fa";
import HorizontalLine from "@/components/ui/HorizontalLine";
import { Metadata } from "next";

// Metadata for the Our Process Page
export const metadata: Metadata = {
  title: "Coffee House - Our Process",
  description:
    "Discover the meticulous process behind Coffee House's exceptional coffee. From sourcing raw beans to packaging, every step is crafted with passion and expertise.",
};

const OurProcess = () => {
  return (
    <div>
      <PageTitle title="our process" />

      {/* RAW COFFEE BEANS */}
      <div className="grid lg:grid-cols-2 gap-10 py-24 lg:px-24 px-5">
        {/* Image */}
        <Image
          src="https://i.postimg.cc/Y0z9trfD/process-image-1.jpg"
          alt="process image"
          width={800}
          height={494}
          className="transition ease-linear duration-500 hover:grayscale"
        />

        <div className="flex flex-col justify-center">
          {/* Section title */}
          <h2
            className={`${oswald.className} text-xl sm:text-2xl md:text-3xl font-bold`}
          >
            RAW COFFEE BEANS
          </h2>

          {/* Horizontal line */}
          <HorizontalLine className="w-[70px] sm:w-[90px] lg:w-[110px] border-b-4 border-whiskey my-5" />

          {/* Description */}
          <p className={`${open_sans.className} text-sm text-silver-chalice`}>
            Raw coffee beans are the cornerstone of exceptional coffee. At
            Coffee House, we source sustainably, ensuring unique flavors and
            high quality in every cup.
          </p>

          {/* List of features */}
          <ul className={`${open_sans.className} text-sm text-whiskey mt-5`}>
            <li>
              <FaCheck className="inline me-1" /> Sourced from sustainable
              farms.
            </li>

            <li className="my-3">
              <FaCheck className="inline me-1" /> Premium quality and rich
              flavors.
            </li>

            <li>
              <FaCheck className="inline me-1" /> Carefully inspected for
              defects.
            </li>
          </ul>
        </div>
      </div>

      {/* COFFEE ROASTERY */}
      <div className="grid lg:grid-cols-2 gap-10 bg-fantasy py-24 lg:px-24 px-5">
        <div className="flex flex-col justify-center">
          {/* Section title */}
          <h2
            className={`${oswald.className} text-xl sm:text-2xl md:text-3xl font-bold`}
          >
            COFFEE ROASTERY
          </h2>

          {/* Horizontal line */}
          <HorizontalLine className="w-[70px] sm:w-[90px] lg:w-[110px] border-whiskey border-b-4 my-5" />

          {/* Description */}
          <p className={`${open_sans.className} text-sm text-silver-chalice`}>
            Our roastery epitomizes our coffee passion, sourcing premium beans
            globally. Expert roasters meticulously craft each batch, ensuring
            unique flavors and aromas in every cup.
          </p>

          {/* List of features */}
          <ul className={`${open_sans.className} text-sm text-whiskey mt-5`}>
            <li>
              <FaCheck className="inline me-1" /> Crafting excellence with every
              roast.
            </li>

            <li className="my-3">
              <FaCheck className="inline me-1" /> Passion infused in every bean.
            </li>

            <li>
              <FaCheck className="inline me-1" /> Elevating coffee to an art
              form.
            </li>
          </ul>
        </div>

        {/* Image */}
        <Image
          src="https://i.postimg.cc/vB9TSL1s/process-image-2.jpg"
          alt="process image"
          width={800}
          height={494}
          className="transition ease-linear duration-500 hover:grayscale"
        />
      </div>

      {/* ROASTING COFFEE BEANS */}
      <div className="grid lg:grid-cols-2 gap-10 py-24 lg:px-24 px-5">
        {/* Image */}
        <Image
          src="https://i.postimg.cc/2yDypbvB/process-image-3.jpg"
          alt="process image"
          width={800}
          height={494}
          className="transition ease-linear duration-500 hover:grayscale"
        />

        <div className="flex flex-col justify-center">
          {/* Section title */}
          <h2
            className={`${oswald.className} text-xl sm:text-2xl md:text-3xl font-bold`}
          >
            ROASTING COFFEE BEANS
          </h2>

          {/* Horizontal line */}
          <HorizontalLine className="w-[70px] sm:w-[90px] lg:w-[110px] border-whiskey border-b-4 my-5" />

          {/* Description */}
          <p className={`${open_sans.className} text-sm text-silver-chalice`}>
            Experience the essence of meticulously roasted coffee beans at
            Coffee House. Our expert roasters enhance flavor profiles with
            artisanal techniques, ensuring consistency and quality in every sip.
          </p>

          {/* List of features */}
          <ul className={`${open_sans.className} text-sm text-whiskey mt-5`}>
            <li>
              <FaCheck className="inline me-1" /> Unlocking the essence of
              perfection.
            </li>

            <li className="my-3">
              <FaCheck className="inline me-1" /> Crafting excellence with every
              roast.
            </li>

            <li>
              <FaCheck className="inline me-1" /> Awakening the senses with
              every brew.
            </li>
          </ul>
        </div>
      </div>

      {/* PACKAGING COFFEE */}
      <div className="grid lg:grid-cols-2 gap-10 bg-fantasy py-24 lg:px-24 px-5">
        <div className="flex flex-col justify-center">
          {/* Section title */}
          <h2
            className={`${oswald.className} text-xl sm:text-2xl md:text-3xl font-bold`}
          >
            PACKAGING COFFEE
          </h2>

          {/* Horizontal line */}
          <HorizontalLine className="w-[70px] sm:w-[90px] lg:w-[110px] border-whiskey border-b-4 my-5" />

          {/* Description */}
          <p className={`${open_sans.className} text-sm text-silver-chalice`}>
            Discover the essence of excellence in our coffee packaging.
            Meticulously crafted to seal in freshness, our eco-friendly options
            reflect our commitment to quality and sustainability.
          </p>

          {/* List of features */}
          <ul className={`${open_sans.className} text-sm text-whiskey mt-5`}>
            <li>
              <FaCheck className="inline me-1" /> Freshly roasted beans sourced
              globally.
            </li>

            <li className="my-3">
              <FaCheck className="inline me-1" /> Carefully weighed and sealed
              for freshness.
            </li>

            <li>
              <FaCheck className="inline me-1" /> Taste the dedication in every
              cup.
            </li>
          </ul>
        </div>

        {/* Image */}
        <Image
          src="https://i.postimg.cc/1zb4HY3B/process-image-4.jpg"
          alt="process image"
          width={800}
          height={494}
          className="transition ease-linear duration-500 hover:grayscale"
        />
      </div>
    </div>
  );
};

export default OurProcess;
