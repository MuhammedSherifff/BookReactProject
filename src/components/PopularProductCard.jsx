import { star } from "../assets/icons";

const PopularProductCard = ({ id, title, price, description, image }) => {
  return (
    <div className="flex group flex-1 flex-col w-full max-sm:w-full max-sm:items-centerc rounded-xl shadow-2xl p-4 hover:shadow-slate-400 cursor-pointer hover:scale-105 duration-200 min-w-2">
      <img
        src={image}
        alt={title}
        className="w-[270px] h-[240px] rounded-2xl self-center"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <p className="font-montserrat text-xl leading-normal text-slate-gray dark:text-slate-300 text-ellipsis overflow-hidden whitespace-nowrap">
          {title}
        </p>
      </div>
      <h3 className="s mt-2 text-2xl leading-normal font-semibold font-palanquin dark:text-white text-ellipsis overflow-hidden whitespace-nowrap">
        {description}
      </h3>
      <div className="flex justify-between">
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal ">
          ${price}
        </p>
        <div className="group-hover:flex text-gray-50  w-[60%] rounded-xl content-center justify-around items-center flex-row p-1 mt-2">
          <button className=" p-1 rounded-xl border dark:border-slate-700 w-full border-slate-300 dark:text-white text-black font-montserrat dark:hover:bg-green-800 hover:bg-green-600 hover:text-white duration-75 ">
            buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard