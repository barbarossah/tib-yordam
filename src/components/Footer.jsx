import logo from "../assets/images/Logo-footer.svg";

function Footer() {
  return (
    <div className="mt-20 bg-[#050b2b] pt-[clamp(40px,5.7vw,80px)]">
      <div className="user_container flex flex-wrap max-[1024px]:px-3 max-[882px]:flex-col">
        <div className=" max-[1250px]:w-full">
          <img className="cursor-pointer" src={logo} alt="" />
          <p className="leading-[1.3] text-[#f8f8f8] mt-5 max-[1180px]:text-[clamp(16,1.25vw,20px)] max-[1180px]:mt-2">
            Консультация от врачей
          </p>
          <ul className="max-[1180px]:mt-10 hidden mt-8">
            <li className="text-[#f8f8f8] mb-6 leading-[1.3]">Проект</li>
            <li className="mb-[18px]">
              <a
                className="font-['SF_Pro_Display'] font-medium leading-[1.1]  text-white text-xl focus:text-[#0129e3] tracking-tight"
                href="#\"
              >
                {/* text-[clamp(16px,1.25vw,20px)] */}
                Информация о проекте
              </a>
            </li>
            <li className="mb-[18px]">
              <a
                className="font-['SF_Pro_Display'] font-medium leading-[1.1]  text-white text-xl focus:text-[#0129e3] tracking-tight"
                href="#\"
              >
                {/* text-[clamp(16px,1.25vw,20px)] */}
                Сотрудничество
              </a>
            </li>
            <li>
              <a
                className="font-['SF_Pro_Display'] font-medium leading-[1.1]  text-white text-xl focus:text-[#0129e3] tracking-tight"
                href="#\"
              >
                {/* text-[clamp(16px,1.25vw,20px)] */}
                Контакты для связи
              </a>
            </li>
          </ul>
        </div>
        <ul className="max-[1340px]:mr-20 max-[1250px]:mt-10 max-[1024px]:ml-0 ml-[clamp(5px,8.2vw,115px)] mr-[clamp(10px,6.8vw,95px)]">
          <li className="text-[#f8f8f8] mb-6 leading-[1.3]">Каталог услуг</li>
          <li className="mb-[18px]">
            <a
              className="font-['SF_Pro_Display'] font-medium leading-[1.1]  text-white text-xl focus:text-[#0129e3] tracking-tight"
              href="#\"
            >
              Медицинская консультация
            </a>
          </li>
          <li className="mb-[18px]">
            <a
              className="font-['SF_Pro_Display'] font-medium leading-[1.1]  text-white text-xl focus:text-[#0129e3] tracking-tight"
              href="#\"
            >
              Справочник лекарств
            </a>
          </li>
          <li className="mb-[18px]">
            <a
              className="font-['SF_Pro_Display'] font-medium leading-[1.1]  text-white text-xl focus:text-[#0129e3] tracking-tight"
              href="#\"
            >
              Справочник болезней
            </a>
          </li>
          <li className="mb-[18px]">
            <a
              className="font-['SF_Pro_Display'] font-medium leading-[1.1]  text-white text-xl focus:text-[#0129e3] tracking-tight"
              href="#\"
            >
              Справочник лекарств
            </a>
          </li>
          <li className="mb-[18px]">
            <a
              className="font-['SF_Pro_Display'] font-medium leading-[1.1]  text-white text-xl focus:text-[#0129e3] tracking-tight"
              href="#\"
            >
              Справочник Врачей и Клиник
            </a>
          </li>
        </ul>
        <ul className="max-[1250px]:mt-10">
          <li className="text-[#f8f8f8] mb-6 leading-[1.3]">Выполнить</li>
          <li className="mb-[18px]">
            <a
              className="font-['SF_Pro_Display'] font-medium leading-[1.1]  text-white text-xl focus:text-[#0129e3] tracking-tight"
              href="#\"
            >
              Задать вопрос
            </a>
          </li>
          <li className="mb-[18px]">
            <a
              className="font-['SF_Pro_Display'] font-medium leading-[1.1]  text-white text-xl focus:text-[#0129e3] tracking-tight"
              href="#\"
            >
              Лучшие консультанты
            </a>
          </li>
          <li className="mb-[18px]">
            <a
              className="font-['SF_Pro_Display'] font-medium leading-[1.1]  text-white text-xl focus:text-[#0129e3] tracking-tight"
              href="#\"
            >
              Популярные вопросы
            </a>
          </li>
          <li className="mb-[18px]">
            <a
              className="font-['SF_Pro_Display'] font-medium leading-[1.1]  text-white text-xl focus:text-[#0129e3] tracking-tight"
              href="#\"
            >
              Регистрация
            </a>
          </li>
          <li className="mb-[18px]">
            <a
              className="font-['SF_Pro_Display'] font-medium leading-[1.1]  text-white text-xl focus:text-[#0129e3] tracking-tight"
              href="#\"
            >
              Вход в личный кабинет
            </a>
          </li>
        </ul>
        <ul className="max-[1340px]:ml-16 max-[1250px]:mt-10 max-[940px]:ml-12 max-[882px]:ml-0 ml-[clamp(10px,9.5vw,152px)]">
          <li className="text-[#f8f8f8] mb-6 leading-[1.3]">Проект</li>
          <li className="mb-[18px]">
            <a
              className="font-['SF_Pro_Display'] font-medium leading-[1.1]  text-white text-xl focus:text-[#0129e3] tracking-tight"
              href="#\"
            >
              Информация о проекте
            </a>
          </li>
          <li className="mb-[18px]">
            <a
              className="font-['SF_Pro_Display'] font-medium leading-[1.1]  text-white text-xl focus:text-[#0129e3] tracking-tight"
              href="#\"
            >
              Сотрудничество
            </a>
          </li>
          <li className="mb-[18px]">
            <a
              className="font-['SF_Pro_Display'] font-medium leading-[1.1]  text-white text-xl focus:text-[#0129e3] tracking-tight"
              href="#\"
            >
              Контакты для связи
            </a>
          </li>
        </ul>
      </div>
      <div className="user_container flex justify-between items-center border-t-[1px] border-[rgba(255,255,255,.1)] h-20 mt-[clamp(30px,5.7vw,80px)] max-[860px]:px-4 max-[760px]:py-4 max-[760px]:h-32 max-[760px]:flex-col">
        <p className="text-sm leading-[1.4] text-[#f8f8f8]">
          MedYordam 2024 - Все права защищены
        </p>
        <p className="text-sm leading-[1.4] text-[#f8f8f8]">Обработка данных</p>
        <p className="text-sm leading-[1.4] text-[#f8f8f8]">
          Условия использования
        </p>
      </div>
    </div>
  );
}

export default Footer;
