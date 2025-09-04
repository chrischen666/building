import img1 from "./assets/img/img1.png";
import img2 from "./assets/img/img2.png";
import img3 from "./assets/img/img3.png";
import img4 from "./assets/img/img4.png";
import img5 from "./assets/img/img5.png";
import img6 from "./assets/img/img6.png";
import b1 from "./assets/img/b1.png";
import b2 from "./assets/img/b2.png";
import txt1 from "./assets/img/txt1.png";
import txt2 from "./assets/img/txt2.png";

function App() {
  return (
    <>
      <section className="bg-[url('./assets/img/bg.png')] h-[100vh] w-screen">
        {/* <img src={img2} alt="corner" className="absolute top-0 left-0" /> */}
        {/* 左上 */}
        <img
          src={img2}
          alt="corner"
          className="absolute w-[45%] z-10 md:w-[30%] "
        />
        <img src={img3} alt="corner" className="absolute  w-[33%] md:w-[19%]" />
        <img
          src={b2}
          className="absolute right-[21vw] top-[25vh] w-[30%] md:w-[11%] md:right-[30vw]"
          alt=""
        />
        {/* 左下 */}
        <img
          src={img1}
          alt="corner"
          className="absolute bottom-0 left-0 w-[45%] md:w-[26%] object-contain"
        />
        <img
          src={b1}
          alt="corner"
          className="absolute bottom-0 left-0 z-10 w-[25%] object-contain md:w-[11%]"
        />
        {/* 右下 */}
        <img
          src={img4}
          alt="corner"
          className="absolute bottom-0 right-0 w-[45%] z-10 md:w-[32%]"
        />
        <img
          src={img5}
          alt="corner"
          className="absolute bottom-0 right-0 w-[45%] md:w-[30%]"
        />
        <img
          src={img6}
          alt="corner"
          className="absolute bottom-0 right-0 w-[45%] md:w-[30%]"
        />
        <h1>header</h1>
        <div className="flex flex-col items-center justify-center h-full">
          <img src={txt1} className="w-1/2 md:w-1/4" alt="" />
          <p className="text-[5.7vw] md:text-[2vw] text-[#205940] border-b-2 border-[#40210f] font-bold">
            湖景公園 完全學區
          </p>
          <p className="text-[5vw] md:text-[1.73vw] text-[#6b3307] border-b-2 border-[#40210f] font-bold">
            雙車位 四大房 輕奢墅
          </p>
          <div className="flex justify-center items-center mt-[3vw] w-fit">
            <p className="px-[4px] py-[4px] md:py-[5px] md:px-[5px] bg-[#ffe175] text-[#205940] font-bold text-xl rounded-[10px]">
              全新
              <br />
              落成
            </p>
            <img src={txt2} className="self-center w-1/2" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
