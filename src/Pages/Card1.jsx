import sea from "../assets/sea.jpg";
import Main from "../Componente/Main";
function Card1() {
  return (
    <>
         <div
        className="relative bg-cover bg-center h-screen max-sm:h-[100vh]"
        style={{ backgroundImage: `url(${sea})` }}
      >
        <div className="flex flex-col items-center justify-center h-full sm:h-full sm:max-h-full sm:space-y-4">
          <div className="bg-[#1a1a1a7a] text-[#fff] w-64 mx-8 mb-8 flex flex-col items-center px-6 rounded-md mt-24 max-sm:mt-12 max-sm:w-11/12 max-sm:mx-4">
            <h2 className="text-xl">Sea</h2>
            <p className="text-sm sm:text-base">
              The sea is a magical world of beauty and mystery, holding endless
              secrets within its depths. The sound of its crashing waves brings
              peace and tranquility to the soul, and the scent of its salt
              revives cherished memories. Watching the waves break on the shore
              can be a remedy for the spirit and a refuge from the hustle and
              bustle of daily life.
            </p>
          </div>
          <Main />
        </div>
      </div>
    </>
  );
}

export default Card1;
