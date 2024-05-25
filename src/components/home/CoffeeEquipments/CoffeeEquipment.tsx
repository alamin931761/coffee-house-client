import Image, { StaticImageData } from "next/image";

type CoffeeEquipmentProps = {
  title: string;
  details: string;
  image: StaticImageData;
};

const CoffeeEquipment = ({ image, title, details }: CoffeeEquipmentProps) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={image} height={126} width={105} alt="" />
      <h6 className="text-xl font-bold my-3">{title}</h6>
      <p className="text-center text-sm">{details}</p>
    </div>
  );
};

export default CoffeeEquipment;
