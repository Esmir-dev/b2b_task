import axios from "axios";

  const GetKolone = async () => {
    let baseUrl = "http://77.78.198.63:252/"
    const res = await axios.get(baseUrl + `kolone`,);
    return res;
  };
  



export default GetKolone;
