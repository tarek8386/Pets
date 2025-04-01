import homebg from "../../../assets/homebg.png";
const Hero = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${homebg})` }}
        className="bg-cover bg-center h-screen flex items-center justify-center"
      ></div>
    </div>
  );
};

export default Hero;
