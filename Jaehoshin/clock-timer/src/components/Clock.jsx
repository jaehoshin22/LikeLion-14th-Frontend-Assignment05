import { useState, useEffect } from 'react';
import bombImage from "../assets/clock.webp"
function Clock() {
    const [time, setTime] = useState(new Date()); //new Date()가 브라우저에서 현재 시간을 가져옴
    //useState로 현재 시각 저장
useEffect(() => {
  const id = setInterval(() => {
    setTime(new Date());
  }, 1000); // 1초마다 계속 new Date()로 시간을 새로 가져옴

  return () => clearInterval(id);
}, []);

const timeString = time.toLocaleTimeString(); // 오후 몇시 : 몇분 : 몇초 이런 형식으로 변환해줌

    return(
        <div className="bg-gray-100 flex items-center justify-center px-30 py-8">
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8">
        
        <div className="flex items-center gap-4 mb-4">
            <img src={bombImage} alt="bomb-img"
            className='w-16 h-16 bg-pink-100 rounded-3xl' />
            <div className='text-left'>
                <h1 className="font-bold">현재 시각</h1>
                <p className="text-xs text-gray-500">1초마다 시간이 업데이트됩니다</p>
            </div>
        </div>

        <div className='bg-gray-100 rounded-xl py-5'>
            <p className="text-3xl font-bold text-center">
                {timeString}
            </p>
        </div>

    </div>
</div>
    )
}
export default Clock