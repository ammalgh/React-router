import desert from "../assets/desert.jpg";
import Main from "../Componente/Main";
function Card2() {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-screen  max-sm:h-[100vh]"
        style={{ backgroundImage: `url(${desert})` }}
      >
        <div className="flex flex-col items-center justify-center h-full  sm:h-full sm:max-h-full sm:space-y-4">
          <div className="bg-[#1a1a1a7a] text-[#fff] w-64 mx-8 mb-8 flex flex-col items-center px-6 rounded-md  mt-24 max-sm:mt-12 max-sm:w-11/12 max-sm:mx-4">
            <h2 className="text-xl">Desert</h2>
            <p>
              The desert is a natural canvas where golden sands blend with the
              clear blue sky. In its tranquility and stillness, there is a
              unique kind of beauty that captivates the heart and mind. The
              shifting sand dunes, sculpted by the wind, create stunning shapes,
              while the sunrise and sunset on the horizon give the desert a
              breathtaking scene filled with magic and majesty.
            </p>
          </div>
          <Main />
        </div>
      </div>
    </>
  );
}

export default Card2;
