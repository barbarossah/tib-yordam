import LinkElement from "../ui/LinkElement";
import star from "../assets/images/star.svg";
import query from "../assets/images/query.svg";
import answers from "../assets/images/answers.svg";
import Statistics from "../ui/Statistics";

function Showcase() {
  return (
    <div className="mt-5">
      <div className="user_container showcase flex flex-col items-center justify-center min-h-[650px] rounded-[26px] py-6 max-[1024px]:bg-gray-700 max-[860px]:rounded-none">
        <p className="rounded-3xl border w-max text-white py-[10px] px-5 text-[14px] font-normal leading-[1.4]">
          Консультация от врачей
        </p>
        <h1 className="font-['SF_Pro_Display'] font-medium text-[clamp(32px,4.3vw,60px)] text-center text-white leading-[1.05] mt-[15px]">
          Получайте бесплатную консультацию <br /> от лучших специалистов
        </h1>
        <div className="flex gap-x-5 mt-[clamp(20px,4.3vw,60px)] max-[1140px]:gap-9 max-[1024px]:gap-x-44 max-[1024px]:flex-wrap max-[1024px]:justify-center max-[860px]:flex-col">
          <LinkElement showcase>
            <img src={star} alt="" />
            <p className="ml-3 cursor-pointer">Лучшие консультанты</p>
          </LinkElement>
          <LinkElement showcase>
            <img src={query} alt="" />
            <p className="ml-3 cursor-pointer">Задать вопрос</p>
          </LinkElement>
          <LinkElement showcase>
            <img src={answers} alt="" />
            <p className="ml-3 cursor-pointer">Популярные вопросы</p>
          </LinkElement>
        </div>
        <div className="flex gap-[15px] mt-[clamp(20px,6.5vw,90px)] max-[1024px]:grid grid-cols-4 max-[580px]:grid-cols-1">
          <Statistics>
            <p className="text-white font-['SF_Pro_Display'] text-[clamp(24px,3.6vw,50px)] leading-[1.05] self-start max-[580px]:self-center">
              +1 000
            </p>
            <p className="text-white font-normal leading-[1.3] mt-2">
              Врачей различных специализаций
            </p>
          </Statistics>
          <Statistics>
            <p className="text-white font-['SF_Pro_Display'] text-[clamp(24px,3.6vw,50px)] leading-[1.05] self-start max-[580px]:self-center">
              24/7
            </p>
            <p className="text-white font-normal leading-[1.3] mt-2">
              Доступ к медицинской помощи
            </p>
          </Statistics>
          <Statistics>
            <p className="text-white font-['SF_Pro_Display'] text-[clamp(24px,3.6vw,50px)] leading-[1.05] self-start max-[580px]:self-center">
              + 95%
            </p>
            <p className="text-white font-normal leading-[1.3] mt-2">
              Положительных отзывов
            </p>
          </Statistics>
          <Statistics>
            <p className="text-white font-['SF_Pro_Display'] text-[clamp(24px,3.6vw,50px)] leading-[1.05] self-start max-[580px]:self-center">
              +20 000
            </p>
            <p className="text-white font-normal leading-[1.3] mt-2">
              Анкет пользователей
            </p>
          </Statistics>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
