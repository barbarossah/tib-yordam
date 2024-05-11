import search from "../assets/images/search.svg";
import FilterOption from "../ui/FilterOption";
import sortup from "../assets/images/sort-amount-up.svg";
import searchWhite from "../assets/images/search-white.svg";
import Card from "./Card";
import arrowLeft from "../assets/images/arrow-left-b.svg";
import arrowRight from "../assets/images/arrow-right-b.svg";
import { useEffect, useState } from "react";

const arr = [
  "Аллерголог",
  "Андролог",
  "Венеролог",
  "Врач УЗИ",
  "Гастроэтеролог",
  "Гематолог",
  "Генетик",
  "Гинеколог",
  "Дерматолог",
  "Диетолог",
  "Инфекционист",
  "Кардиолог",
  "ЛОР",
  "Маммолог",
  "Нарколог",
];

function Main() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 720) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    /* handleResize(); */
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="user_container mt-20 flex gap-5">
      <aside className="rounded-[18px] bg-white pt-[30px] pb-[6px] px-5 self-start w-[335px] max-[1140px]:hidden">
        <div className="flex justify-between">
          <h3 className="font-['SF_Pro_Display'] font-medium text-xl leading-[1.1]">
            Фильтрация <br /> по направлениям
          </h3>
          <p className="cursor-pointer self-end text-[#de303a]">
            <span className="text-xl cursor-pointer text-[#de303a]">
              &times;
            </span>
            Сбросить
          </p>
        </div>
        <form action="#" className="flex my-6 h-[clamp(20px,3.38vw,54px)]">
          <input
            type="text"
            placeholder="Поиск направления"
            className={`rounded-s-xl bg-[#f8f8f8] pl-5 flex-grow outline-none`}
          />
          <button className="flex justify-center items-center bg-[#f8f8f8] rounded-e-xl w-[clamp(20px,3.38vw,54px)]">
            {/* p-[clamp(1px,1.2vw,20px)] */}
            <img
              src={search}
              alt=""
              className="cursor-pointer"
              width="14"
              height="14"
            />
          </button>
        </form>

        {arr.map((occupation) => {
          return <FilterOption key={occupation} val={occupation} />;
        })}
      </aside>
      <main className="w-[clamp(500px,69vw,1045px)] max-[1140px]:w-full max-[860px]:px-2">
        <div className="flex gap-6 justify-between max-[720px]:flex-col">
          <h2 className="font-['SF_Pro_Display'] font-medium text-[clamp(28px,3.13vw,50px)] leading-[1.05]">
            Список последних ответов {isSmallScreen ? null : <br />} на вопросы
            <span className="text-[#747474] max-[660px]:block"> (12 493)</span>
          </h2>

          <button className="flex items-center justify-center cursor-pointer rounded-xl bg-white self-end w-[clamp(200px,15.4vw,215px)] h-[clamp(20px,8vw,54px)]">
            <img src={sortup} alt="" className="cursor-pointer" />
            <span className="ml-2 cursor-pointer">Сортировать по</span>
          </button>
        </div>
        <form action="#\" className="my-[34px] flex gap-[10px]">
          <input
            type="text"
            placeholder="Искать по тексту в вопросе"
            className="h-[clamp(40px,8vw,76px)] px-[30px] outline-none rounded-2xl flex-grow"
          />
          <button className="bg-[#0129e3] flex justify-center items-center px-[clamp(15px,4.3vw,60px)] rounded-2xl gap-3">
            <img src={searchWhite} alt="" className="cursor-pointer" />
            <span className="text-white cursor-pointer">Поиск</span>
          </button>
        </form>
        <section className="flex flex-col gap-y-10">
          <Card />
          <Card female />
          <Card />
          <Card female />
          <Card />
        </section>
        <div className="pagination-links flex justify-center mt-[60px] gap-x-[10px]">
          <div className="flex justify-center items-center cursor-pointer rounded-xl w-[54px] h-[54px] bg-[#0129e3] max-[580px]:w-10 max-[580px]:h-10">
            <img className="cursor-pointer" src={arrowLeft} alt="" />
          </div>
          <div className="flex justify-center items-center cursor-pointer bg-white border-[#0129e3] border rounded-xl w-[54px] h-[54px] max-[580px]:w-10 max-[580px]:h-10">
            <span className="cursor-pointer text-[#0129e3]">1</span>
          </div>
          <div className="flex justify-center items-center cursor-pointer bg-white rounded-xl w-[54px] h-[54px] max-[580px]:w-10 max-[580px]:h-10">
            <span className="cursor-pointer">2</span>
          </div>
          <div className="flex justify-center items-center cursor-pointer bg-white rounded-xl w-[54px] h-[54px] max-[580px]:w-10 max-[580px]:h-10">
            <span className="cursor-pointer">3</span>
          </div>
          <div className="flex justify-center items-center cursor-pointer bg-white rounded-xl w-[54px] h-[54px] max-[580px]:w-10 max-[580px]:h-10">
            <span className="cursor-pointer">4</span>
          </div>
          <div className="flex justify-center items-center cursor-pointer bg-white rounded-xl w-[54px] h-[54px] max-[580px]:w-10 max-[580px]:h-10">
            <span className="cursor-pointer">...</span>
          </div>
          <div className="flex justify-center items-center cursor-pointer rounded-xl w-[54px] h-[54px] bg-[#0129e3] max-[580px]:w-10 max-[580px]:h-10">
            <img className="cursor-pointer" src={arrowRight} alt="" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
