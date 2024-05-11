// eslint-disable-next-line react/prop-types
function LinkElement({ children, catalogue, navlinks, logo, showcase }) {
  return (
    <div
      className={`rounded-2xl h-[clamp(48px,4.8vw,76px)]  font-medium flex items-center ${
        !logo && !showcase ? "max-[1140px]:hidden" : null
      } ${
        navlinks
          ? "w-[clamp(100px,28vw,416px)] justify-center max-[1280px]:flex-grow"
          : logo
          ? "w-[clamp(130px,28vw,416px)] px-[clamp(10px,1.37vw,22px)] justify-start"
          : showcase
          ? "p-0 w-[clamp(207px,30vw,291px)] justify-center max-[1140px]:px-2 max-[860px]:w-[380px]"
          : "justify-center w-[clamp(100px,17.25vw,276px)]"
      } ${
        catalogue
          ? "bg-[#0129e3] w-[clamp(100px,16.3vw,261px)] max-[1280px]:hidden"
          : "bg-white"
      }`}
    >
      {children}
    </div>
  );
}

export default LinkElement;
