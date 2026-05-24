import { useState } from "react";
import Clock from "./components/Clock";
import Timer from "./components/Timer";


export default function App() {
  const [activeTab, setActiveTab] = useState("clock");
  return(
    <div className="bg-gray-100 text-center pt-10 min-h-screen font-ck"> 
      <p className="text-xs font-bold text-blue-500">
        useEffect 타이머 예제
      </p>
      <h1 className="text-2xl font-bold pt-4">
        실시간 시계 & 카운트다운 타이머
      </h1>
      <p className="text-xs pt-3 pb-8 font-thin">
        컴포넌트 마운트, 언마운트, cleanup 동작을 확인할 수 있는 예제입니다.
      </p>
   <div className="flex justify-center rounded-3xl shadow-3xl gap-2 ">
      <button onClick={() => setActiveTab("시계")}className="p-1.5 rounded-xl shadow-md bg-white text-gray-800 hover:bg-blue-300 active:scale-95 transition">시계 보기</button>
      <button onClick={() => setActiveTab("카운트다운")}className="p-1.5 rounded-xl shadow-md bg-white text-gray-800 hover:bg-blue-300 active:scale-95 transition">타이머 보기</button>
    </div>
    
    <div className="flex justify-center m-5">
      <div className="p-1.5 rounded-3xl shadow-md bg-white text-gray-800 ">현재 보기: {activeTab}</div>
    </div>

    {activeTab === "시계" && <Clock />}
    {activeTab === "카운트다운" && <Timer />}
    </div>
  );
}
 