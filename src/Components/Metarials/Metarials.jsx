import ButtonIcon from "../Buttonicon/ButtonIcon";
import meterialImg1 from "../../assets/material1.png";
import meterialImg2 from "../../assets/material2.png";
import meterialImg3 from "../../assets/material3.png";
const Metarials = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-6">
        <div className=" my-24 flex flex-col lg:flex-row lg:justify-between items-center md:gap-20 gap-8">
          <div>
            <h5 className="text-amber-600 capitalize tracking-wide font-semibold mb-3 text-base">
              Materials
            </h5>
            <h2 className="sm:font-semibold md:font-bold text-[25px] mb-3 capitalize lg:w-1/2 ">
              Very serious materials for making furniture
            </h2>
            <p className="text-base text-gray-700 mb-3 sm:text-left">
              Because panto was very serious about designing furniture for our
              environment, using a very expensive and famous capital but at a
              relatively low price
            </p>
            <ButtonIcon text="More Info" />
          </div>
          <div className="md:w-1/2 grid grid-cols-2 md:items-end items-center">
            <div>
              <img src={meterialImg1} alt="meterialImg1" />
              <img src={meterialImg2} alt="meterialImg1" />
            </div>
            <div>
              <img
                src={meterialImg3}
                alt="meterialImg3"
                className="w-full md:h-[450px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Metarials;
