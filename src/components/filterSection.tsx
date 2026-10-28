
type TfilterProp = {
  HandleTabChange : (type : "all" | "frontend" | "backend" | "design") => void
}
const FilterSection = ({HandleTabChange} : TfilterProp) => {
    return (
        <div className='container mx-auto mt-13'>
            <h1 className='text-3xl font-bold'>Find your next developer role</h1>
            <p className='mt-4'>
                search, filter and save the job you like - everything updates instantly
            </p>


            <div className='flex justify-center items-center mt-13 mb-8'>

                <label className="input w-1/1 mr-5 rounded-full">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>

<button onClick={() => HandleTabChange("all")} className="btn btn-neutral rounded-full mr-2">All</button>
<button onClick={() => HandleTabChange("frontend")} className="btn btn-neutral rounded-full mr-2">Frontend</button>
<button onClick={() => HandleTabChange("backend")} className="btn btn-neutral rounded-full mr-2">Backend</button>
<button onClick={() => HandleTabChange("design")} className="btn btn-neutral rounded-full mr-2">Desigin</button>


            </div>
        </div>
    );
};

export default FilterSection;