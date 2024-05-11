import LinkElement from "../ui/LinkElement";
import location from "../assets/images/location.svg";
import arrow from "../assets/images/Arrow_down.svg";
import ruLang from "../assets/images/RU.svg";
import logo from "../assets/images/Logo.svg";
import catalogue from "../assets/images/apps.svg";
import { useState } from "react";

function Header() {
  const [isOpened, setIsOpened] = useState(false);

  function handlePopup() {
    setIsOpened(true);
  }

  function handleClose() {
    setIsOpened(false);
    // console.log(e.stopPropagation());
  }

  function handleNotClickable(event) {
    event.stopPropagation();
  }

  return (
    <header>
      <div className="user_container flex justify-between font-medium py-[19px] max-[1140px]:hidden">
        <div className="flex gap-x-3 items-center">
          <img src={location} alt="icon" />
          <p className="cursor-pointer">Ташкент</p>
          <img className="cursor-pointer" src={arrow} alt="icon" />
        </div>
        <div className="flex gap-x-3 items-center">
          <img src={ruLang} alt="flag" />
          <p className="cursor-pointer">
            <span className="text-[#747474]">Язык:</span> Русский
          </p>
          <img className="cursor-pointer" src={arrow} alt="icon" />
        </div>
      </div>
      <div className="user_container flex justify-between items-center max-[1280px]:bg-[white] max-[1280px]:rounded-2xl max-[1140px]:mt-5">
        <LinkElement logo>
          <img
            className="cursor-pointer w-[clamp(180px,14vw,216px)]"
            src={logo}
            alt="logo"
          />
          <span className="text-sm text-[#747474] font-normal leading-[1.4] ml-5">
            Консультация <br /> от врачей
          </span>
        </LinkElement>

        <button
          className="w-9 h-9 mr-8 min-[1140px]:hidden"
          onClick={handlePopup}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>

        <LinkElement catalogue>
          <img className="cursor-pointer" src={catalogue} alt="icon" />
          <p className="text-white ml-3 cursor-pointer">Каталог услуг</p>
        </LinkElement>
        <LinkElement navlinks>
          <ul className="flex gap-x-[26px]">
            <li>
              <a href="#\">О проекте</a>
            </li>
            <li>
              <a href="#\">Партнерство</a>
            </li>
            <li>
              <a href="#\">Контакты</a>
            </li>
            <li className="min-[1280px]:hidden">
              <a href="#\">Каталог услуг</a>
            </li>
          </ul>
        </LinkElement>
        <LinkElement>
          <p className="text-[#0129e3] cursor-pointer">Вход / Регистрация</p>
        </LinkElement>
      </div>

      {isOpened && (
        <div
          className="bg-[rgba(0,0,0,.4)] fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-10"
          onClick={(e) => {
            handleClose(e);
          }}
        >
          <div
            className="bg-white p-6 pb-5 rounded-2xl w-4/5 max-[580px]:w-full max-[580px]:self-end max-[580px]:rounded-b-none max-[580px]:pt-5"
            onClick={handleNotClickable}
          >
            <div className="flex justify-between">
              <div className="flex gap-x-3 items-center">
                <img src={location} alt="icon" />
                <p className="cursor-pointer">Ташкент</p>
                <img className="cursor-pointer" src={arrow} alt="icon" />
              </div>
              <div className="flex gap-x-3 items-center">
                <img src={ruLang} alt="flag" />
                <p className="cursor-pointer">
                  <span className="text-[#747474]">Язык:</span> Русский
                </p>
                <img className="cursor-pointer" src={arrow} alt="icon" />
              </div>
            </div>
            <ul className="flex gap-[20px] mt-10 justify-center max-[1024px]:grid max-[1024px]:grid-cols-2 max-[860px]:grid-cols-1">
              <li className="bg-[#f8f8f8] rounded-3xl w-1/4 flex justify-center text-[16px] py-2 px-2 max-[1024px]:w-full max-[1024px]:col-span-1">
                <a className="" href="#\">
                  О проекте
                </a>
              </li>
              <li className="bg-[#f8f8f8] rounded-3xl w-1/4 flex justify-center text-[16px] py-2 px-2 max-[1024px]:w-full max-[1024px]:col-span-1">
                <a className="" href="#\">
                  Партнерство
                </a>
              </li>
              <li className="bg-[#f8f8f8] rounded-3xl w-1/4 flex justify-center text-[16px] py-2 px-2 max-[1024px]:w-full max-[1024px]:col-span-1">
                <a className="" href="#\">
                  Контакты
                </a>
              </li>
              <li className="bg-[#f8f8f8] rounded-3xl w-1/4 flex justify-center text-[16px] py-2 px-2 max-[1024px]:w-full max-[1024px]:col-span-1">
                <a className="" href="#\">
                  Каталог услуг
                </a>
              </li>
            </ul>
            <form
              action=""
              className="mt-6 flex flex-col items-center gap-[18px] bg-[#f8f8f8] w-3/4 rounded-2xl py-4 mx-auto max-[1024px]:w-full"
            >
              <p>Login</p>
              <input
                className="outline-none px-8 p-2 bg-white rounded-3xl w-4/5 max-[580px]:w-11/12"
                type="text"
                placeholder="@e-mail"
              />
              <input
                className="outline-none px-8 p-2 bg-white rounded-3xl w-4/5 max-[580px]:w-11/12"
                type="password"
                placeholder="Password"
              />
              <button className="w-4/5 rounded-3xl bg-white border-2 py-2">
                Вход / Регистрация
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
