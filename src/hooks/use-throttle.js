import { useEffect , useRef , useState } from "react";

const useThrottle= (value,delay)=>{
    const [throttleValue , setThrottleValue] = useState(value);

    const last=useRef(Date.now());

    useEffect(() => {
      const handler=setTimeout(() => { 
        const now=Date.now();
        const timepass=now-last.current;

        if(timepass>=delay)
        {
            setThrottleValue(value);
            last.current=now;
        }

        return ()=>{
            clearTimeout(handler);
        }

    }, delay-(Date.now()-last.current));
      
    }, [delay,value]);
    
    return throttleValue;
};

export default useThrottle;