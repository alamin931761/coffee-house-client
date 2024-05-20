import HorizontalLine from "./HorizontalLine";

const SectionTitle = ({ sectionTitle }: { sectionTitle: string }) => {
  return (
    <div className="text-center">
      <h6 className="capitalize text-lg">what happens here</h6>
      <h2 className="text-4xl uppercase mt-2">{sectionTitle}</h2>
      <HorizontalLine className="w-28 border-b-2" />
    </div>
  );
};

export default SectionTitle;
