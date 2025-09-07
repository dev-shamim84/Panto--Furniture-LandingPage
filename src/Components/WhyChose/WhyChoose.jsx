import ButtonIcon from "../Buttonicon/ButtonIcon";

const WhyChoose = () => {
  return (
    <section>
      <div className="container mx-auto  px-4 py-6 ">
        <div className=" my-24 grid  md:grid-cols-2 lg:grid-cols-4 items-center gap-8 md:text-left ">
          <div>
            <h2 className="text-[40px] font-bold">
              Why <br /> Choosing Us
            </h2>
          </div>
          <div>
            <h3 className="text-2xl mb-3 font-semibold">Luxury facilities</h3>
            <p className="mb-3 text-base">
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
            <ButtonIcon text="More Info" />
          </div>
          <div>
            <h3 className="text-2xl mb-3 font-semibold">Luxury facilities</h3>
            <p className="mb-3 text-base">
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
            <ButtonIcon text="More Info" />
          </div>
          <div>
            <h3 className="text-2xl mb-3 font-semibold">Luxury facilities</h3>
            <p className="mb-3 text-base">
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
            <ButtonIcon text="More Info" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
