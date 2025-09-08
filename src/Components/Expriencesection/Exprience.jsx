import exprienceImg from "../../assets/expricences.png";
import ButtonIcon from "../Buttonicon/ButtonIcon";
const Exprience = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-6">
        <div className=" my-24 flex flex-col lg:flex-row lg:justify-between items-center md:gap-20 gap-8">
          <div className="w-full">
            <img src={exprienceImg} alt="" />
          </div>
          <div>
            <h5 className="text-amber-600 capitalize tracking-wide font-semibold mb-3 text-base">
              experiences
            </h5>
            <h2 className="sm:font-semibold md:font-bold text-[25px] mb-3 capitalize lg:w-1/2 ">
              we provide you the best experience
            </h2>
            <p className="text-base text-gray-700 mb-3 sm:text-left">
              You don’t have to worry about the result because all of these
              interiors are made by people who are professionals in their fields
              with an elegant and lucurious style and with premium quality
              materials
            </p>
            <ButtonIcon text="More Info" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exprience;
