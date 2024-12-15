import { useEffect, useState } from "react";

import GetSifre from "../../services/GetSifre";
import GetKolone from "../../services/GetKolone";
import Sidebar from "../sideBar";
import { ColumnVisibility, Sirina } from "../../types";

const Table = () => {
  const [sifre, setSifre] = useState<Sirina[]>([]);
  const [kolone, setKolone] = useState<Sirina[]>([]);
  const [filteredSifre, setFilteredSifre] = useState<Sirina[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchID, setSearchID] = useState<string>("");
  const [searchKlasifikacija, setSearchKlasifikacija] = useState<string>("");
  const [searchNaziv, setSearchNaziv] = useState<string>("");
  const [searchKarakteristikaA, setSearchKarakteristikaA] =
    useState<string>("");
  const [searchKarakteristikaB, setSearchKarakteristikaB] =
    useState<string>("");
  const [searchKarakteristikaC, setSearchKarakteristikaC] =
    useState<string>("");
  const [searchKarakteristikaD, setSearchKarakteristikaD] =
    useState<string>("");
  const [searchKarakteristikaE, setSearchKarakteristikaE] =
    useState<string>("");
  const [columnVisibility, setColumnVisibility] = useState<ColumnVisibility>({
    id: true,
    klasifikacija: true,
    naziv: true,
    karakteristikaA: true,
    karakteristikaB: true,
    karakteristikaC: false,
    karakteristikaD: false,
    karakteristikaE: false,
  });

  const toggleColumnVisibility = (
    columnName: keyof typeof columnVisibility
  ) => {
    setColumnVisibility((prevVisibility) => ({
      ...prevVisibility,
      [columnName]: !prevVisibility[columnName],
    }));
  };

  useEffect(() => {
    getSirine();
    getKolone();
  }, []);

  const getSirine = async () => {
    try {
      const response = await GetSifre();
      setSifre(response.data);
      setFilteredSifre(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching sirine", error);
      setLoading(false);
    }
  };

  const getKolone = async () => {
    try {
      const response = await GetKolone();
      setKolone(response.data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (
      searchID.length >= 3 ||
      searchKlasifikacija.length >= 3 ||
      searchNaziv.length >= 3 ||
      searchKarakteristikaA.length >= 3 ||
      searchKarakteristikaB.length >= 3 ||
      searchKarakteristikaC.length >= 3 ||
      searchKarakteristikaD.length >= 3 ||
      searchKarakteristikaE.length >= 3
    ) {
      const filtered = sifre.filter(
        (sirina) =>
          sirina.id &&
          sirina.id.includes(searchID) &&
          sirina.klasifikacija &&
          sirina.klasifikacija.includes(searchKlasifikacija) &&
          sirina.naziv &&
          sirina.naziv.includes(searchNaziv) &&
          sirina.karakteristikaA &&
          sirina.karakteristikaA.includes(searchKarakteristikaA) &&
          sirina.karakteristikaB &&
          sirina.karakteristikaB.includes(searchKarakteristikaB) &&
          sirina.karakteristikaC &&
          sirina.karakteristikaC.includes(searchKarakteristikaC) &&
          sirina.karakteristikaD &&
          sirina.karakteristikaD.includes(searchKarakteristikaD) &&
          sirina.karakteristikaE &&
          sirina.karakteristikaE.includes(searchKarakteristikaE)
      );
      setFilteredSifre(filtered);
    } else {
      setFilteredSifre(sifre);
    }
  };
  useEffect(() => {
    handleSearch();
  }, [
    searchID,
    searchKlasifikacija,
    searchNaziv,
    searchKarakteristikaA,
    searchKarakteristikaB,
    searchKarakteristikaC,
    searchKarakteristikaD,
    searchKarakteristikaE,
  ]);

  if (loading) {
    return (
      <div role="status">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  const columnsToDisplay: any = [
    "id",
    "klasifikacija",
    "naziv",
    "karakteristikaA",
    "karakteristikaB",
    "karakteristikaC",
    "karakteristikaD",
    "karakteristikaE",
  ];

  const filteredColumns = columnsToDisplay.filter(
    (column: any) => columnVisibility[column as keyof ColumnVisibility]
  );
  return (
    <div className="flex justify-between">
      <div className="relative overflow-x-auto w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {filteredColumns.map((kolone: any, index: any) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {kolone}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredSifre.map((sifre) => (
              <tr
                key={sifre.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                {columnVisibility.id && (
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {sifre.id}
                  </th>
                )}
                {columnVisibility.klasifikacija && (
                  <td className="px-6 py-4">{sifre.klasifikacija}</td>
                )}
                {columnVisibility.naziv && (
                  <td className="px-6 py-4">{sifre.naziv}</td>
                )}
                {columnVisibility.karakteristikaA && (
                  <td className="px-6 py-4">{sifre.karakteristikaA}</td>
                )}
                {columnVisibility.karakteristikaB && (
                  <td className="px-6 py-4">{sifre.karakteristikaB}</td>
                )}
                {columnVisibility.karakteristikaC && (
                  <td className="px-6 py-4">{sifre.karakteristikaC}</td>
                )}
                {columnVisibility.karakteristikaD && (
                  <td className="px-6 py-4">{sifre.karakteristikaD}</td>
                )}
                {columnVisibility.karakteristikaE && (
                  <td className="px-6 py-4">{sifre.karakteristikaE}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Sidebar
        searchID={searchID}
        searchKlasifikacija={searchKlasifikacija}
        searchNaziv={searchNaziv}
        searchKarakteristikaA={searchKarakteristikaA}
        searchKarakteristikaB={searchKarakteristikaB}
        searchKarakteristikaC={searchKarakteristikaC}
        searchKarakteristikaD={searchKarakteristikaD}
        searchKarakteristikaE={searchKarakteristikaE}
        setSearchID={setSearchID}
        setSearchKlasifikacija={setSearchKlasifikacija}
        setSearchNaziv={setSearchNaziv}
        setSearchKarakteristikaA={setSearchKarakteristikaA}
        setSearchKarakteristikaB={setSearchKarakteristikaB}
        setSearchKarakteristikaC={setSearchKarakteristikaC}
        setSearchKarakteristikaD={setSearchKarakteristikaD}
        setSearchKarakteristikaE={setSearchKarakteristikaE}
        toggleColumnVisibility={toggleColumnVisibility}
      />
    </div>
  );
};

export default Table;
