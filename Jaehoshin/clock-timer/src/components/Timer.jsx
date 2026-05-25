import { useState, useEffect } from 'react';
import bombImage from "../assets/bomb.png"
function Timer() {
    const [sec, setSec] = useState(10);
    //useState로 남은 시간 저장
    useEffect(() => {
        const id = setInterval(() => {
            setSec((prev) => {
               if (prev <= 1) {
                    clearInterval(id);
                    console.log('타이머 정리됨');
                    return 0;
                }
                return prev - 1;

            });
        }, 1000); 
        // 1초마다 시각 자동 갱신

        return () => {
            clearInterval(id);
        }; 
    }, []);
    //컴포넌트가 사라지면 setinterval도 멈춤

    //아래에서 flex 사용함
    return(
        <div className="bg-gray-100 flex items-center justify-center px-30 py-8">
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8">
        
        <div className="flex items-center gap-4 mb-4">
            <img src={bombImage} alt="bomb-img"
            className='w-16 h-16 bg-pink-100 rounded-3xl' />
            <div className='text-left'>
                <h1 className="font-bold">카운트다운</h1>
                <p className="text-xs text-gray-500">10초부터 0초까지 감소합니다</p>
            </div>
        </div>

        <div className='bg-gray-100 rounded-xl py-5'>
            <p className="text-3xl font-bold text-center">
                {sec > 0 ? `${sec}초` : "💥시간 종료!"}
            </p>
        </div>

    </div>
</div>
//0초가 되면 시간종료 메시지 출력
    )
}
export default Timer