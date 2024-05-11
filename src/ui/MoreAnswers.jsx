import arrow from "../assets/images/Arrow_down.svg";

function MoreAnswers() {
  return (
    <div className="flex items-center justify-center gap-x-2 py-5 bg-[#f8f8f8] rounded-xl mt-6">
      <p className="text-[#747474] text-sm font-medium leading-[1] cursor-pointer">
        Смотреть все ответы (2)
      </p>
      <img className="cursor-pointer" src={arrow} alt="" />
    </div>
  );
}

export default MoreAnswers;
