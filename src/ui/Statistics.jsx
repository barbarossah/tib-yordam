// eslint-disable-next-line react/prop-types
function Statistics({ children }) {
  return (
    <div className="flex flex-col justify-center border-[1px] border-[rgba(255,255,255,.5)] rounded-[20px] backdrop-blur-[15px] bg-[rgba(255,255,255,0.15)] pl-6 h-[133px] w-[clamp(150px,20.18vw,323px)] max-[1024px]:col-span-2 max-[1024px]:w-[323px] max-[720px]:w-[260px] max-[580px]:w-[380px] max-[580px]:h-[80px] max-[580px]:items-center max-[580px]:p-0">
      {children}
    </div>
  );
}

export default Statistics;
