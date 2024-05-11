import avatar from "../assets/images/doctor.svg";

function Answer() {
  return (
    <div className="flex gap-x-[14px] mt-6">
      {/* w-[clamp(300px,63vw,1009px)] */}
      <img className="self-start max-[860px]:hidden" src={avatar} alt="" />
      <div className="rounded-e-[14px] rounded-b-[14px] bg-[#0129e3] flex-grow py-[18px] px-4">
        <div className="flex justify-between max-[660px]:flex-col">
          <p className="text-white">Mary Freund (Гастроинтеролог)</p>
          <p className="text-white">Январь 28, 2024 9:41 pm</p>
        </div>
        <p className="text-sm leading-[1.4] mt-[22px] text-white">
          &quot;Можете ли вы, пожалуйста, объяснить, какие могут быть причины
          моих текущих симптомов (укажите свои симптомы), какие диагностические
          тесты вы рекомендуете для подтверждения диагноза, и какие методы
          лечения или изменения в образе жизни вы считаете наиболее эффективными
          для улучшения моего...
          <span className="underline text-white font-medium leading-[1] text-sm cursor-pointer">
            Читать полностью
          </span>
        </p>
      </div>
    </div>
  );
}

export default Answer;
