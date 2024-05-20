import Container from "@/components/shared/Container";
import PageTitle from "@/components/ui/PageTitle";
import Image from "next/image";
import { open_sans, oswald } from "../fonts";
import { FaCheck } from "react-icons/fa";
import HorizontalLine from "@/components/ui/HorizontalLine";

const OurProcess = () => {
  return (
    <div>
      <PageTitle title="our process" />

      {/* RAW COFFEE BEANS */}
      <div className="grid lg:grid-cols-2 gap-10 py-24 lg:px-24 px-5">
        <Image
          src="https://i.ibb.co/JFVSwj3/process-image-1.jpg"
          alt="process image"
          width={800}
          height={494}
        />

        <div className="flex flex-col justify-center">
          <h2 className={`${oswald.className} text-3xl font-bold`}>
            RAW COFFEE BEANS
          </h2>
          <HorizontalLine className="w-[110px] border-b-4 my-5" />
          <p className={`${open_sans.className} text-sm text-[#acacac]`}>
            Raw coffee beans are the cornerstone of exceptional coffee. At
            Coffee House, we source sustainably, ensuring unique flavors and
            high quality in every cup.
          </p>
          <ul className={`${open_sans.className} text-sm text-[#CAA782] mt-5`}>
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
      <div className="grid lg:grid-cols-2 gap-10 bg-[#F2F0EA] py-24 lg:px-24 px-5">
        <div className="flex flex-col justify-center">
          <h2 className={`${oswald.className} text-3xl font-bold`}>
            COFFEE ROASTERY
          </h2>
          <HorizontalLine className="w-[110px] border-[#CAA782] border-b-4 my-5" />
          <p className={`${open_sans.className} text-sm text-[#acacac]`}>
            Our roastery epitomizes our coffee passion, sourcing premium beans
            globally. Expert roasters meticulously craft each batch, ensuring
            unique flavors and aromas in every cup.
          </p>
          <ul className={`${open_sans.className} text-sm text-[#CAA782] mt-5`}>
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

        <Image
          src="https://i.ibb.co/chrR1R1/process-image-2.jpg"
          alt="process image"
          width={800}
          height={494}
        />
      </div>

      {/* ROASTING COFFEE BEANS */}
      <div className="grid lg:grid-cols-2 gap-10 py-24 lg:px-24 px-5">
        <Image
          src="https://i.ibb.co/JBQ2tVm/process-image-3.jpg"
          alt="process image"
          width={800}
          height={494}
        />

        <div className="flex flex-col justify-center">
          <h2 className={`${oswald.className} text-3xl font-bold`}>
            ROASTING COFFEE BEANS
          </h2>
          <HorizontalLine className="w-[110px] border-[#CAA782] border-b-4 my-5" />
          <p className={`${open_sans.className} text-sm text-[#acacac]`}>
            Experience the essence of meticulously roasted coffee beans at
            Coffee House. Our expert roasters enhance flavor profiles with
            artisanal techniques, ensuring consistency and quality in every sip.
          </p>
          <ul className={`${open_sans.className} text-sm text-[#CAA782] mt-5`}>
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
      <div className="grid lg:grid-cols-2 gap-10 bg-[#F2F0EA] py-24 lg:px-24 px-5">
        <div className="flex flex-col justify-center">
          <h2 className={`${oswald.className} text-3xl font-bold`}>
            PACKAGING COFFEE
          </h2>
          <HorizontalLine className="w-[110px] border-[#CAA782] border-b-4 my-5" />
          <p className={`${open_sans.className} text-sm text-[#acacac]`}>
            Discover the essence of excellence in our coffee packaging.
            Meticulously crafted to seal in freshness, our eco-friendly options
            reflect our commitment to quality and sustainability.
          </p>
          <ul className={`${open_sans.className} text-sm text-[#CAA782] mt-5`}>
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

        <Image
          src="https://i.ibb.co/brTL8X5/process-image-4.jpg"
          alt="process image"
          width={800}
          height={494}
        />
      </div>
    </div>
  );
};

export default OurProcess;
