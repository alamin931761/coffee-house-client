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

      <Container>
        {/* RAW COFFEE BEANS */}
        <div className="grid lg:grid-cols-2 gap-10">
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
            <HorizontalLine className="w-[110px] border-[#CAA782] border-b-4 my-5" />
            <p className={`${open_sans.className} text-sm text-[#acacac]`}>
              Raw coffee beans are the foundation of every exceptional cup of
              coffee. At Coffee House, we meticulously source our beans from
              sustainable farms around the world, ensuring each batch meets our
              high standards. Our beans are carefully selected for their unique
              flavor profiles, which are influenced by their growing conditions,
              altitude, and processing methods. By choosing the best raw beans,
            </p>
            {/* <p className={`${open_sans.className} text-sm text-[#acacac]`}>
              Raw coffee beans are the foundation of every exceptional cup of
              coffee. At Coffee House, we meticulously source our beans from
              sustainable farms around the world, ensuring each batch meets our
              high standards. Our beans are carefully selected for their unique
              flavor profiles, which are influenced by their growing conditions,
              altitude, and processing methods. By choosing the best raw beans,
              we lay the groundwork for a superior coffee experience. This
              dedication to quality starts with our beans and extends through
              every step of our process, from roasting to brewing, guaranteeing
              a perfect cup every time.
            </p> */}
            <ul
              className={`${open_sans.className} text-sm text-[#CAA782] mt-5`}
            >
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
        <div className="grid lg:grid-cols-2 gap-10 bg-[#F2F0EA]">
          <div className="flex flex-col justify-center">
            <h2 className={`${oswald.className} text-3xl font-bold`}>
              COFFEE ROASTERY
            </h2>
            <HorizontalLine className="w-[110px] border-[#CAA782] border-b-4 my-5" />
            <p className={`${open_sans.className} text-sm text-[#acacac]`}>
              At Coffee House, our roastery stands as the cornerstone of our
              passion for coffee. We take pride in sourcing premium beans from
              sustainable farms worldwide, ensuring ethical practices and
              superior quality. Guided by expertise and dedication, our master
              roasters delicately craft each batch to unveil the unique flavors
              and aromas embedded in every bean. Employing both cutting-edge
              technology and time-honored methods, we maintain unwavering
              consistency and excellence in every cup. From the delicate nuances
              of light roasts to the bold richness of dark ones, our diverse
              range caters to discerning palates, promising an unmatched coffee
              journey with every sip, where every moment is savored and
              celebrated.
            </p>
            <ul
              className={`${open_sans.className} text-sm text-[#CAA782] mt-10`}
            >
              <li>
                <FaCheck className="inline me-1" /> Crafting excellence with
                every roast.
              </li>

              <li className="my-3">
                <FaCheck className="inline me-1" /> Passion infused in every
                bean.
              </li>

              <li>
                <FaCheck className="inline me-1" /> Elevating coffee to an art
                form.
              </li>

              <li className="my-3">
                <FaCheck className="inline me-1" /> Where quality meets
                craftsmanship.
              </li>

              <li>
                <FaCheck className="inline me-1" /> A journey from bean to cup,
                perfected.
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
        <div className="grid lg:grid-cols-2 gap-10">
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
              At Coffee House, we take pride in our meticulous roasting process,
              where quality is paramount. We carefully select premium coffee
              beans sourced from sustainable farms across the globe. Our expert
              roasters employ artisanal techniques to enhance flavor profiles
              and ensure consistency. With precision temperature control and
              timing, each batch undergoes a transformation, releasing aromatic
              oils and developing rich flavors. From light to dark roasts, we
              cater to diverse preferences, delivering a spectrum of tastes to
              delight every palate. Experience the essence of freshly roasted
              coffee with every sip, crafted with passion and dedication at
              Coffee House.
            </p>
            <ul
              className={`${open_sans.className} text-sm text-[#CAA782] mt-10`}
            >
              <li>
                <FaCheck className="inline me-1" /> Unlocking the essence of
                perfection.
              </li>

              <li className="my-3">
                <FaCheck className="inline me-1" /> Crafting excellence with
                every roast.
              </li>

              <li>
                <FaCheck className="inline me-1" /> Embracing the artistry of
                coffee alchemy.
              </li>

              <li className="my-3">
                <FaCheck className="inline me-1" /> A symphony of flavors in
                every bean.
              </li>

              <li>
                <FaCheck className="inline me-1" /> Awakening the senses with
                every brew.
              </li>
            </ul>
          </div>
        </div>

        {/* PACKAGING COFFEE */}
        <div className="grid lg:grid-cols-2 gap-10 bg-[#F2F0EA]">
          <div className="flex flex-col justify-center">
            <h2 className={`${oswald.className} text-3xl font-bold`}>
              PACKAGING COFFEE
            </h2>
            <HorizontalLine className="w-[110px] border-[#CAA782] border-b-4 my-5" />
            <p className={`${open_sans.className} text-sm text-[#acacac]`}>
              At Coffee House, our packaging process is as meticulous as our
              brewing. We understand that the journey from bean to cup is just
              as crucial as the roast itself. That&apos;s why we take great care
              in every step of packaging our coffee. From selecting the finest
              materials to ensuring each package seals in freshness, we
              prioritize quality. Our commitment extends to sustainability, with
              eco-friendly packaging options that minimize our environmental
              footprint. With each package, we encapsulate not just the flavor,
              but also the essence of our dedication to excellence.
            </p>
            <ul
              className={`${open_sans.className} text-sm text-[#CAA782] mt-10`}
            >
              <li>
                <FaCheck className="inline me-1" /> Freshly roasted beans
                sourced globally.
              </li>

              <li className="my-3">
                <FaCheck className="inline me-1" /> Carefully weighed and sealed
                for freshness.
              </li>

              <li>
                <FaCheck className="inline me-1" /> Eco-conscious packaging
                choices.
              </li>

              <li className="my-3">
                <FaCheck className="inline me-1" /> Every package holds our
                commitment to quality.
              </li>

              <li>
                <FaCheck className="inline me-1" /> Taste the dedication in
                every cup.
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
      </Container>
    </div>
  );
};

export default OurProcess;
