// eslint-disable-next-line react/prop-types
function FilterOption({ val }) {
  return (
    <div className="flex font-normal leading-[1.3] mb-6">
      <input id={val} type="checkbox" className="w-5 h-5 rounded-[5px]" />
      <label htmlFor={val} className="flex-grow ml-3">
        {val}
      </label>
      <span className="font-normal text-[#747474]">(12 312)</span>
    </div>
  );
}

export default FilterOption;
