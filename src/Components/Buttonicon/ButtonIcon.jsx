import btnIcon from "../../assets/button-icon.png";
const ButtonIcon = ({ text }) => {
  return (
    <div>
      <button className="flex gap-2 items-center text-sm text-amber-600">
        {text} <img src={btnIcon} alt="btn-icon" />
      </button>
    </div>
  );
};

export default ButtonIcon;
