import man from "../assets/images/male.svg";
import woman from "../assets/images/female.svg";

// eslint-disable-next-line react/prop-types
function Question({ female }) {
  return (
    <div className="flex gap-x-[14px] mt-6">
      {/* w-[clamp(300px,63vw,1009px)] */}
      <div className="rounded-s-[14px] rounded-ee-[14px] bg-[#f8f8f8] flex-grow py-[18px] px-4">
        <div className="flex justify-between max-[660px]:flex-col-reverse max-[660px]:items-end">
          <p className="text-[#0129e3]">Получено ответов (3)</p>
          <p className="text-[#747474]">
            {female ? "Kimberly Mastrangelo (24 лет)" : "Lorri Warf (26 лет)"}
          </p>
        </div>
        <p className="text-sm leading-[1.4] mt-[22px]">
          &quot;Здравствуйте, доктор. В последнее время я заметил(а), что
          стал(а) быстро уставать и появилась постоянная усталость, несмотря на
          полноценный сон. К тому же, у меня снизился аппетит, и я замечаю
          периодические головные боли. Могли бы вы подсказать, что это может
          быть и какие обследования мне стоит пройти для уточнения...
          <span className="underline text-[#747474] font-medium leading-[1] text-sm cursor-pointer">
            Читать полностью
          </span>
        </p>
      </div>
      <img
        className="self-start max-[860px]:hidden"
        src={female ? woman : man}
        alt=""
      />
    </div>
  );
}

export default Question;
