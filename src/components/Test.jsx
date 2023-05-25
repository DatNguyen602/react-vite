import React, { useEffect, useRef, useState } from 'react'

const Test = () => {
    const [time,setTime] = useState({
        hh: 0,
        mm: 0,
        ss: 0,
        tt: 0,
    })

    let start  = useRef("");
    const [stateTime,setStateTime] = useState(false);

    useEffect(() => {
        if(time.tt>=100){
            setTime({
                ...time,
                ss: time.ss+1,
                tt: 0,
            })
        }
        if(time.ss>=60){
            setTime({
                ...time,
                mm: time.mm+1,
                ss: 0,
            })
        }
        if(time.mm>=60){
            setTime({
                ...time,
                mm: 0,
                hh: time.hh+1,
            })
        }
        if(time.hh>=24){
            setTime({
                ss: 0,
                mm: 0,
                hh: 0,
            })
        }
    },[time])

    const startTime = () => {
        if(!stateTime){
            start.current = setInterval(()=>{
                setTime(time => ({
                    ...time,
                    tt: time.tt+1,
                }))
            },10);
            setStateTime(true);
        }
    }

    const stopTime = () => {
        clearInterval(start.current);
        setStateTime(false);
    }

    const clearTime = () => {
        clearInterval(start.current);
        setStateTime(false);
        setTime({
            hh: 0,
            mm: 0,
            ss: 0,
            tt: 0,
        })
    }

  return (
    <div className='text-center'>
        <h1>Timer</h1>
        <h2 className='mb-4'>
        <div className='d-flex justify-content-center'>
            <div className='w-14'>{time.hh<10?0:""}{time.hh}</div>
            : 
            <div className='w-14'>{time.mm<10?0:""}{time.mm}</div>
            : 
            <div className='w-14'>{time.ss<10?0:""}{time.ss}</div>
            : 
            <div className='w-14'>{time.tt<10?0:""}{time.tt}</div>
        </div>
        </h2>
        {
        !stateTime?
        <button 
        onClick={startTime}
        className='btn px-5 py-3 fw-bolder text-zinc-500 border'
        type="button">
            Start
        </button>:
        <button 
        onClick={stopTime}
        className='btn px-5 py-3 fw-bolder text-zinc-500 border'
        type="button">
            Stop
        </button>}
        <button 
        onClick={clearTime}
        className='btn px-5 py-3 fw-bolder text-zinc-500 border ms-4'
        type="button">
            Clear
        </button>
    </div>
  )
}

export default Test