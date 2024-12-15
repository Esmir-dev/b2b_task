export interface Column {
  id: string;
  name: string;
}

export interface Row {
  [key: string]: string;
}

export interface DataResponse {
  columns: Column[];
  rows: Row[];
}

export interface ColumnVisibility {
  id: boolean;
  klasifikacija: boolean;
  naziv: boolean;
  karakteristikaA: boolean;
  karakteristikaB: boolean;
  karakteristikaC: boolean;
  karakteristikaD: boolean;
  karakteristikaE: boolean;
}
export interface SidebarProps {
  searchID: string;
  searchKlasifikacija: string;
  searchNaziv: string;
  searchKarakteristikaA: string;
  searchKarakteristikaB: string;
  searchKarakteristikaC: string;
  searchKarakteristikaD: string;
  searchKarakteristikaE: string;
  setSearchID: React.Dispatch<React.SetStateAction<string>>;
  setSearchKlasifikacija: React.Dispatch<React.SetStateAction<string>>;
  setSearchNaziv: React.Dispatch<React.SetStateAction<string>>;
  setSearchKarakteristikaA: React.Dispatch<React.SetStateAction<string>>;
  setSearchKarakteristikaB: React.Dispatch<React.SetStateAction<string>>;
  setSearchKarakteristikaC: React.Dispatch<React.SetStateAction<string>>;
  setSearchKarakteristikaD: React.Dispatch<React.SetStateAction<string>>;
  setSearchKarakteristikaE: React.Dispatch<React.SetStateAction<string>>;
  toggleColumnVisibility: (columnName: keyof ColumnVisibility) => void;
}

export interface Sirina {
  id: string;
  klasifikacija: string;
  naziv: string;
  karakteristikaA: string;
  karakteristikaB: string;
  karakteristikaC: string;
  karakteristikaD: string;
  karakteristikaE: string;
}
