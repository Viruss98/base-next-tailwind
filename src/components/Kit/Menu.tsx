const KitMenu = () => {
  return (
    <div className="mx-auto">
      <h4 className="text-2xl font-normal leading-normal mt-0 mb-2 text-lightBlue-800">
        Menu
      </h4>
      <div className="flex flex-wrap py-2">
        <div className="w-full px-4">
          <nav className="relative flex flex-wrap items-center justify-between px-2 navbar-expand-lg bg-blueGray-500 rounded">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white" href="#pablo">
                  blueGray Menu
                </a>
                <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                  <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                  <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                  <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                </button>
              </div>
              <div className="flex lg:flex-grow items-center" id="example-navbar-info">
                <ul className="flex flex-col lg:flex-row list-none ml-auto">
                  <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                      Discover
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                      Settings
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default KitMenu;
