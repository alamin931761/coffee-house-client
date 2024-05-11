"use client";

import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="cursor-pointer">
      <PhotoProvider
        speed={() => 800}
        easing={(type) =>
          type === 2
            ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
            : "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }
      >
        <div className="grid grid-rows-3 lg:grid-rows-1 grid-flow-col">
          {/* image 1 */}
          <div className="col-span-2 lg:row-span-2">
            <PhotoView src="https://i.ibb.co/QQjdcnn/gallery-1-1000.jpg">
              <Image
                src="https://i.ibb.co/QQjdcnn/gallery-1-1000.jpg"
                height={1000}
                width={1000}
                alt=""
              />
            </PhotoView>
          </div>

          {/* image 2 and 3 */}
          <div className="lg:row-span-2">
            <PhotoView src="https://i.ibb.co/T8KSrfX/gallery-2-1000.jpg">
              <Image
                src="https://i.ibb.co/mvYhWsB/gallery-2-633.jpg"
                height={500}
                width={500}
                alt=""
              />
            </PhotoView>

            <PhotoView src="https://i.ibb.co/xSSX3nK/gallery-3-1000.jpg">
              <Image
                src="https://i.ibb.co/Mgn7Bf7/gallery-3-633.jpg"
                height={500}
                width={500}
                alt=""
              />
            </PhotoView>
          </div>

          {/* image 4 and 5 */}
          <div className="lg:row-span-2">
            <PhotoView src="https://i.ibb.co/p42FkpG/gallery-4-1000.jpg">
              <Image
                src="https://i.ibb.co/6swj25Y/gallery-4-633.jpg"
                height={500}
                width={500}
                alt=""
              />
            </PhotoView>

            <PhotoView src="https://i.ibb.co/nn5HJJY/gallery-7-1000.jpg">
              <Image
                src="https://i.ibb.co/Jsd8zpp/gallery-7-633.jpg"
                height={500}
                width={500}
                alt=""
              />
            </PhotoView>
          </div>

          {/* image 6 and 7 */}
          <div className="lg:row-span-2">
            <PhotoView src="https://i.ibb.co/W0Vv4vX/gallery-8-1000.jpg">
              <Image
                src="https://i.ibb.co/jJ2nHkM/gallery-8-633.jpg"
                height={500}
                width={500}
                alt=""
              />
            </PhotoView>

            <PhotoView src="https://i.ibb.co/YXW3QPK/gallery-5-1000.jpg">
              <Image
                src="https://i.ibb.co/Wxb94tn/gallery-5-633.jpg"
                height={500}
                width={500}
                alt=""
              />
            </PhotoView>
          </div>

          {/* image 8 */}
          <div className="lg:row-span-1">
            <PhotoView src="https://i.ibb.co/1zFdK5h/gallery-6-1000.jpg">
              <Image
                src="https://i.ibb.co/vcmxd5V/gallery-6-500.jpg"
                height={1000}
                width={500}
                alt=""
              />
            </PhotoView>
          </div>
        </div>
      </PhotoProvider>
    </div>
  );
};

export default Gallery;
