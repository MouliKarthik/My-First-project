import { useState, useEffect } from "react";



const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [ isPending, setIsPending] =  useState(true);
    const [error, setError] = useState(null);

    

    useEffect( () => {
        const abortConst = new AbortController();

        setTimeout( () => {
         fetch(url, {signal: abortConst.signal})
             .then( res => {
                 if(!res.ok){
                     throw Error("couldn't connect to json server");
                 }
                 return res.json();
             })
             .then( data => {
                 setData(data);
                 setIsPending(false);
             })
             .catch(err => {
                if(err.name === "AbortError"){
                    console.log("abort fetched");
                }
                else{ 
                    setError(err.message);
                    setIsPending(false);
                }
            });
        }, 1000);
        
        return () => abortConst.abort();

     },[url]);
     return { data, isPending, error};
}


export default useFetch;