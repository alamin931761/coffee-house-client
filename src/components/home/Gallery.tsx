"use client";

import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="cursor-pointer">
      {/* PhotoProvider for image gallery */}
      <PhotoProvider
        speed={() => 800}
        easing={(type) =>
          type === 2
            ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
            : "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }
      >
        {/* Grid layout for images */}
        <div className="grid grid-rows-3 lg:grid-rows-1 grid-flow-col">
          {/* image 1 */}
          <div className="col-span-2 lg:row-span-2">
            <PhotoView src="https://i.postimg.cc/ZRkK3BwD/gallery-1-1000.jpg">
              <Image
                src="https://i.postimg.cc/ZRkK3BwD/gallery-1-1000.jpg"
                height={1000}
                width={1000}
                alt=""
                className="transition ease-linear duration-500 hover:grayscale"
              />
            </PhotoView>
          </div>

          {/* image 2 and 3 */}
          <div className="lg:row-span-2">
            <PhotoView src="https://i.postimg.cc/ncdF2wdm/gallery-2-1000.jpg">
              <Image
                src="https://i.postimg.cc/SRdywZkw/gallery-2-633.jpg"
                height={500}
                width={500}
                alt=""
                className="transition ease-linear duration-500 hover:grayscale"
              />
            </PhotoView>

            <PhotoView src="https://i.postimg.cc/X7NNw0g3/gallery-3-1000.jpg">
              <Image
                src="https://i.postimg.cc/KcDvkYBJ/gallery-3-633.jpg"
                height={500}
                width={500}
                alt=""
                className="transition ease-linear duration-500 hover:grayscale"
              />
            </PhotoView>
          </div>

          {/* image 4 and 5 */}
          <div className="lg:row-span-2">
            <PhotoView src="https://i.postimg.cc/76ywbvLF/gallery-4-1000.jpg">
              <Image
                src="https://i.postimg.cc/Xv5nVNnK/gallery-4-633.jpg"
                height={500}
                width={500}
                alt=""
                className="transition ease-linear duration-500 hover:grayscale"
              />
            </PhotoView>

            <PhotoView src="https://i.postimg.cc/vT0sPcvy/gallery-7-1000.jpg">
              <Image
                src="https://i.postimg.cc/hvDnb9TM/gallery-7-633.jpg"
                height={500}
                width={500}
                alt=""
                className="transition ease-linear duration-500 hover:grayscale"
              />
            </PhotoView>
          </div>

          {/* image 6 and 7 */}
          <div className="lg:row-span-2">
            <PhotoView src="https://i.postimg.cc/PrFHYvxz/gallery-8-1000.jpg">
              <Image
                src="https://i.postimg.cc/285m17zS/gallery-8-633.jpg"
                height={500}
                width={500}
                alt=""
                className="transition ease-linear duration-500 hover:grayscale"
              />
            </PhotoView>

            <PhotoView src="https://i.postimg.cc/sXyCsp6y/gallery-5-1000.jpg">
              <Image
                src="https://i.postimg.cc/9fyH6xBJ/gallery-5-633.jpg"
                height={500}
                width={500}
                alt=""
                className="transition ease-linear duration-500 hover:grayscale"
              />
            </PhotoView>
          </div>

          {/* image 8 */}
          <div className="lg:row-span-1">
            <PhotoView src="https://i.postimg.cc/t4KHm0Fs/gallery-6-1000.jpg">
              <Image
                src="https://i.postimg.cc/MpMSDZfk/gallery-6-500.jpg"
                height={1000}
                width={500}
                alt=""
                className="transition ease-linear duration-500 hover:grayscale"
              />
            </PhotoView>
          </div>
        </div>
      </PhotoProvider>
    </div>
  );
};

export default Gallery;
