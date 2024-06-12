import Main from "../Componente/Main";
import Nature from "../assets/Nature.jpg";

function Card3() {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-screen  sm:bg-cover  sm:bg-center"
        style={{ backgroundImage: `url(${Nature})` }}
      >
        <div className="flex flex-col items-center justify-center h-full  sm:h-full sm:max-h-full sm:space-y-4">
          <div className="bg-[#1a1a1a7a] text-[#fff] w-64 mx-8 mb-8 flex flex-col items-center px-6 rounded-md  mt-24 max-sm:mt-12 max-sm:w-11/12 max-sm:mx-4">
            <h2 className="text-xl">Nature</h2>
            <p>
              Nature is the sanctuary of life, where the magnificence of
              creation is evident in every corner. From its towering mountains
              to its lush valleys, from its dense forests to its tranquil
              beaches, nature provides us with a sense of peace and harmony. The
              sounds of birds, the scents of flowers, and the gentle breeze all
              enhance our connection to the earth and remind us of the beauty
              and simplicity of life.
            </p>
          </div>
          <Main />
        </div>
      </div>
    </>
  );
}

export default Card3;
