import Image from "next/image";

const loading = () => {
  return (
    <div className="h-[calc(100vh-64px)] flex justify-center items-center">
      <Image
        src="https://i.postimg.cc/cJp2LsrW/loading.gif"
        width={100}
        height={100}
        alt="loading"
      />
    </div>
  );
};

export default loading;
