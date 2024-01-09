import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        //this will swap data of api which is in array format to json format
        .then((res) => res.json())
        //json formatted data will set data into response currency
        .then((res) => setData(res[currency]))
        // console.log(data);
    }, [currency])
    // console.log(data);
    return data;
}

export default useCurrencyInfo;