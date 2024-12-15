import React from "react";
import { SidebarProps } from "../../types";

const Sidebar: React.FC<SidebarProps> = ({
  searchID,
  searchKlasifikacija,
  searchNaziv,
  searchKarakteristikaA,
  searchKarakteristikaB,
  searchKarakteristikaC,
  searchKarakteristikaD,
  searchKarakteristikaE,
  setSearchID,
  setSearchKlasifikacija,
  setSearchNaziv,
  setSearchKarakteristikaA,
  setSearchKarakteristikaB,
  setSearchKarakteristikaC,
  setSearchKarakteristikaD,
  setSearchKarakteristikaE,
  toggleColumnVisibility,
}) => {
  return (
    <div className="w-64 lg:w-96  bg-gray-100 shadow-xl rounded-lg flex overflow-x-auto custom-scrollbar border-l-[2px]">
      <div className="w-64 lg:w-96  px-4">
        <div className="px-2 pt-4 pb-8 border-r border-gray-300 flex flex-col space-y-[50%] ">
          <ul className="space-y-2">
            <li>
              <input
                type="text"
                value={searchKarakteristikaC}
                onChange={(e) => setSearchKarakteristikaC(e.target.value)}
                onDoubleClick={() => toggleColumnVisibility("karakteristikaC")}
                placeholder="Pretraga po Karakteristika C"
                className="px-4 py-2 border-red-500 border-[1px] rounded-md w-full"
              />
            </li>
            <li>
              <input
                type="text"
                value={searchKarakteristikaD}
                onChange={(e) => setSearchKarakteristikaD(e.target.value)}
                onDoubleClick={() => toggleColumnVisibility("karakteristikaD")}
                placeholder="Pretraga po Karakteristika D"
                className="px-4 py-2 border-red-500 border-[1px]  rounded-md w-full"
              />
            </li>
            <li>
              <input
                type="text"
                value={searchKarakteristikaE}
                onChange={(e) => setSearchKarakteristikaE(e.target.value)}
                placeholder="Pretraga po Karakteristika E"
                onDoubleClick={() => toggleColumnVisibility("karakteristikaE")}
                className="px-4 py-2 border-red-500 border-[1px]  rounded-md w-full"
              />
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <input
                type="text"
                value={searchID}
                onChange={(e) => setSearchID(e.target.value)}
                onDoubleClick={() => toggleColumnVisibility("id")}
                placeholder="Pretraga po ID"
                className="px-4 py-2 border-green-300 border-[1px]  rounded-md w-full"
              />
            </li>
            <li>
              <input
                type="text"
                value={searchKlasifikacija}
                onDoubleClick={() => toggleColumnVisibility("klasifikacija")}
                onChange={(e) => setSearchKlasifikacija(e.target.value)}
                placeholder="Pretraga po Klasifikaciji"
                className="px-4 py-2 border-green-300 border-[1px]  rounded-md w-full"
              />
            </li>
            <li>
              <input
                type="text"
                value={searchNaziv}
                onChange={(e) => setSearchNaziv(e.target.value)}
                onDoubleClick={() => toggleColumnVisibility("naziv")}
                placeholder="Pretraga po Nazivu"
                className="px-4 py-2 border-green-300 border-[1px]  rounded-md w-full"
              />
            </li>
            <li>
              <input
                type="text"
                value={searchKarakteristikaA}
                onChange={(e) => setSearchKarakteristikaA(e.target.value)}
                onDoubleClick={() => toggleColumnVisibility("karakteristikaA")}
                placeholder="Pretraga po Karakteristika A"
                className="px-4 py-2 border-green-300  border-[1px]  rounded-md w-full"
              />
            </li>
            <li>
              <input
                type="text"
                value={searchKarakteristikaB}
                onChange={(e) => setSearchKarakteristikaB(e.target.value)}
                onDoubleClick={() => toggleColumnVisibility("karakteristikaB")}
                placeholder="Pretraga po Karakteristika B"
                className="px-4 py-2 border-green-300 border-[1px]  rounded-md w-full"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
