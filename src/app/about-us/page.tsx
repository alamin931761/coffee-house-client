import Stat from "@/components/ui/Stat/Stat";
import WhyPeopleChooseUs from "@/components/home/WhyPeopleChooseUs/WhyPeopleChooseUs";
import Container from "@/components/shared/Container";
import PageTitle from "@/components/ui/PageTitle";
import { FaPlay } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <PageTitle title="about us" />

      <Container>
        <div>
          <h2 className="text-center text-5xl">
            We invite you to <br />
            visit our restaurant
          </h2>
          <p className="text-center">
            Step into Coffee House, where the rich aroma of freshly brewed
            coffee greets you at the door. Our cozy atmosphere is the perfect
            setting for a relaxing break from your busy day. Whether you&apos;re
            looking for a quiet corner to catch up on work, a comfortable spot
            to enjoy a book, or a place to gather with friends, Coffee House
            offers the ideal environment. Savor our selection of gourmet
            coffees, teas, and freshly baked pastries, all crafted with the
            finest ingredients. Our friendly staff is dedicated to providing you
            with an exceptional experience. We look forward to welcoming you and
            making Coffee House your favorite spot to unwind and enjoy the finer
            things in life.
          </p>

          <div className="bg-[url('https://i.ibb.co/xCsZpHZ/why-people-choose-us-background-image.jpg')] bg-no-repeat bg-cover bg-center bg-fixed h-[500px]">
            <div className="h-full w-full flex justify-center items-center bg-black bg-opacity-50">
              {/* play button */}
              <span className="relative flex h-[100px] w-[100px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative flex justify-center items-center rounded-full h-[100px] w-[100px] bg-sky-500">
                  <FaPlay className="text-black text-[20px]" />
                </span>
              </span>
            </div>
          </div>
        </div>

        <WhyPeopleChooseUs />
        <Stat />

        <p>What Our visitors say section/TESTIMONIALS</p>
      </Container>
    </div>
  );
};

export default page;
