import Main from "../Componente/Main";
import Snow from "../assets/Snow.jpg";

function Card4() {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-screen  sm:bg-cover  sm:bg-center"
        style={{ backgroundImage: `url(${Snow})` }}
      >
        <div className="flex flex-col items-center justify-center h-full   sm:h-full sm:max-h-full sm:space-y-4">
          <div className="bg-[#1a1a1a7a] text-[#fff] w-64 mx-8 mb-8 flex flex-col items-center px-6 rounded-md  mt-24 max-sm:mt-12 max-sm:w-11/12 max-sm:mx-4">
            <h2 className="text-xl">Snow</h2>
            <p>
              Snow is a pristine white blanket that covers the earth like a
              magical winter dream. When the snow falls, the world becomes a
              peaceful and quiet place, as if nature is donning its pure white
              attire. The sound of your footsteps on the soft snow and the
              crisp, cold air brushing your face create an indescribable feeling
              of warmth and comfort in the heart of winter.
            </p>
          </div>
          <Main />
        </div>
      </div>
    </>
  );
}

export default Card4;
