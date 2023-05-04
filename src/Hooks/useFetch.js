import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [err, setErr] = useState(null)

    useEffect(() => {
        //Abort controller
        const abortCont = new AbortController()

        //Main Logic
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false)
                }).catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('Fetch aborted!')
                    }
                    else {
                        console.log(err)
                        setErr(err.message)
                    }
                })
        }, 1000);

        //Cleanup Function
        return () => {
            console.log('Cleanup function is running')
            abortCont.abort()
        }
    }, [url])

    return { data, isPending, err }
}

export default useFetch