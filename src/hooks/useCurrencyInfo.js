import { useState, useEffect } from "react";
// default rule hai hooks ka ki use ke saath likhna hai hooks ho always

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  //the dollar is used for string formatting like f string literals in python
  let url = `https:cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency]);
      });
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
