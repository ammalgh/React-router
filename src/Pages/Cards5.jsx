import Main from "../Componente/Main";
import forest from "../assets/forest.jpg";
function Cards5() {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-screen   sm:bg-cover  sm:bg-center"
        style={{ backgroundImage: `url(${forest})` }}
      >
        <div className="flex flex-col items-center justify-center h-full  sm:h-full sm:max-h-full sm:space-y-4">
          <div className="bg-[#1a1a1a7a] text-[#fff] w-64 mx-8 mb-8 flex flex-col items-center px-6 rounded-md  mt-24 max-sm:mt-12 max-sm:w-11/12 max-sm:mx-4">
            <h2 className="text-xl">forest</h2>
            <p>
              The forest is a magical place where dense trees form a green
              canopy. The natural sounds of birds and the gentle breeze create
              an atmosphere of peace and tranquility, soothing the soul. The
              forest is a sanctuary for the soul, offering peace and tranquility
              away from the hustle and bustle of everyday life.
            </p>
          </div>
          <Main />
        </div>
      </div>
    </>
  );
}

export default Cards5;
