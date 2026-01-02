import { useState,useEffect } from "react";

function useCurrencyInfo(curr){
    
    const [data,setData] = useState(0)

    useEffect(()=>{
        
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curr}.json`
        
        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res[curr]))

        console.log(data)
    },[curr,data])

    return data

}

export default useCurrencyInfo;