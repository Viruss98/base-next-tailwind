const KitPagination = () => {
  return (
    <div className="mx-auto">
      <h4 className="text-2xl font-normal leading-normal mt-0 mb-2 text-lightBlue-800">
        Pagination
      </h4>
      <div className="py-2">
        <nav className="block">
          <ul className="flex pl-0 rounded list-none flex-wrap">
            <li>
              <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500">
                <i className="fas fa-chevron-left -ml-px"></i>
                <i className="fas fa-chevron-left -ml-px"></i>
              </a>
            </li>
            <li>
              <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500">
                <i className="fas fa-chevron-left -ml-px"></i>
              </a>
            </li>
            <li>
              <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 text-white bg-blueGray-500">
                1
              </a>
            </li>
            <li>
              <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500">
                2
              </a>
            </li>
            <li>
              <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500">
                3
              </a>
            </li>
            <li>
              <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500">
                4
              </a>
            </li>
            <li>
              <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500">
                5
              </a>
            </li>
            <li>
              <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500">
                <i className="fas fa-chevron-right -mr-px"></i>
              </a>
            </li>
            <li>
              <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500">
                <i className="fas fa-chevron-right -mr-px"></i>
                <i className="fas fa-chevron-right -mr-px"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default KitPagination;
