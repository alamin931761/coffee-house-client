import { open_sans, oswald } from "@/app/fonts";
import { FaLocationDot } from "react-icons/fa6";
import { SlPhone } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";

type TContactLocation = {
  address: string;
  phone: string;
  email: string;
};

const ContactLocationCard = ({ address, phone, email }: TContactLocation) => {
  return (
    <div className="mb-10">
      {/* ------------------- address card ------------------- */}
      <div className="flex">
        {/* icon */}
        <div>
          <FaLocationDot className="inline mb-2 text-whiskey text-2xl" />
        </div>

        {/* address */}
        <div className="ms-2">
          <h6 className={`uppercase ${oswald.className} text-base font-bold`}>
            address
          </h6>
          <p className={`${open_sans.className} text-sm text-silver-chalice`}>
            {address}
          </p>
        </div>
      </div>

      {/* ------------------- phone card ------------------- */}
      <div className="flex my-3">
        {/* icon */}
        <SlPhone className="inline mb-2 text-whiskey text-2xl" />

        {/* address */}
        <div className="ms-2">
          <h6 className={`uppercase ${oswald.className} text-base font-bold`}>
            phone
          </h6>
          <a
            href={`tel:${phone}`}
            className={`${open_sans.className} text-sm text-silver-chalice`}
          >
            {phone}
          </a>
        </div>
      </div>

      {/* ------------------- email card ------------------- */}
      <div className="flex">
        {/* icon */}
        <AiOutlineMail className="inline text-whiskey text-2xl" />

        {/* address */}
        <div className="ms-2">
          <h6 className={`uppercase ${oswald.className} text-base font-bold`}>
            email
          </h6>
          <a
            href={`mailto:${email}`}
            className={`${open_sans.className} text-sm text-silver-chalice`}
          >
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLocationCard;
