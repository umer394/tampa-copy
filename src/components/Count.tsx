"use client"
import CountUp, { useCountUp } from 'react-countup';

export default function Count() {
  useCountUp({
    ref: 'counter',
    end: 10,
    enableScrollSpy: true,
    
  });

  return (
    <div className='flex justify-between px-20 max-w-[1200px] mx-auto my-10'>
        <div className='flex flex-col  items-center'>
            <div className='text-[#01306E] font-bold text-6xl flex'>
                <CountUp end={1200} enableScrollSpy />
                <h1>+</h1>
                <br />
                <span id="counter" className='hidden' />
            </div>
            <h2 className='text-[#01306E] text-lg'>Number of Clients</h2>
        </div>
        <div className='flex flex-col  items-center'>
            <div className='text-[#01306E] font-bold text-6xl flex'>
                <CountUp end={10} delay={1.5} enableScrollSpy />
                <h1>+</h1>
                <br />
                <span id="counter" className='hidden' />
            </div>
            <h2 className='text-[#01306E] text-lg'>Years Of Experience</h2>
        </div>
        <div className='flex flex-col  items-center'>
            <div className='text-[#01306E] font-bold text-6xl flex'>
                <CountUp end={21} delay={1.5} enableScrollSpy />
                <h1>+</h1>
                <br />
                <span id="counter" className='hidden' />
            </div>
            <h2 className='text-[#01306E] text-lg'>Locations Served</h2>
        </div>
        <div className='flex flex-col  items-center'>
            <div className='text-[#01306E] font-bold text-6xl flex'>
                <CountUp end={14} delay={1.5} enableScrollSpy />
                <h1>+</h1>
                <br />
                <span id="counter" className='hidden' />
            </div>
            <h2 className='text-[#01306E] text-lg'>Certifications Or Awards</h2>
        </div>
    </div>
  );
}