type Props = {
  btnText: string;
};

const ButtonPrimary = ({ btnText }: Props) => {
  return (
    <button className="w-20 h-7 text-sm font-semibold rounded-full bg-blue text-white hover:bg-hoverBg duration-300">
      {btnText}
    </button>
  );
};

export default ButtonPrimary;
