import axios from "axios";

  const GetSifre = async () => {
    let baseUrl = "http://77.78.198.63:252/"
    const res = await axios.get(baseUrl + `sifre`,);
    return res;
  };
  



export default GetSifre;
