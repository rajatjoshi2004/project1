import React from "react";
import { isMobile } from "react-device-detect";

function MobileLastQuiz() {
  return (
    <div className="w-full bg-hello">
      <div className="opactiy-bg">
        <div className="container mx-auto h-[500px] flex flex-col items-center justify-center">
        
            <div
              style={{ width: "100%", display: "flex" }}
              className="bg-white "
            >
              <div style={{left:"auto",marginLeft:"auto",width:"100%",padding:"10px"}} className="">
                <div style={{marginRight:"20px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                  <h3 className="text-4xl font-bold quizCount">
                    5 <span className="text-xl">/</span>
                    <span style={{color:"#212121"}} className="text-[20px]">5</span>
                  </h3>
                 
                  <div style={{display:"flex",flexDirection:"column"}}>
                  <p style={{color:"#A0A0A0"}}> answerd - <span style={{color:"#000000"}}>5</span></p>
                  <p style={{color:"#A0A0A0"}}> not answerd - <span style={{color:"#000000"}}>2</span></p>
                  </div>
                 
                  </div>
              </div>
            </div>
      
          <div className="bg-white  flex justify-evenly">
            <div className="w-[3%] py-4">
              <p>5.</p>
            </div>
            <div style={{marginBottom:"20px"}} className="w-[70%] py-4">
              <h3>
                Who invented the first electronic computer, and in what year was
                it invented?
              </h3>
              {/* Chack radio */}

              <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600 ">
                  <div className="flex items-center pl-3">
                    <input
                      id="list-radio-license"
                      type="radio"
                      value=""
                      name="list-radio"
                    />
                    <label
                      for="list-radio-license"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Johnson Huges at 1923-32{" "}
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600 ">
                  <div className="flex items-center pl-3">
                    <input
                      id="list-radio-id"
                      type="radio"
                      value=""
                      name="list-radio"
                    />
                    <label
                      for="list-radio-id"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      John Vincent Atanasoff at 1937–42.
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="list-radio-millitary"
                      type="radio"
                      value=""
                      name="list-radio"
                    />
                    <label
                      for="list-radio-millitary"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Robert Brown at 1954-34
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="list-radio-passport"
                      type="radio"
                      value=""
                      name="list-radio"
                    />
                    <label
                      for="list-radio-passport"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Charles Babbage at 1932 - 23
                    </label>
                  </div>
                </li>
              </ul>

              {/* end */}
              <div style={{marginTop:"20px"}} className="text-center">
                  <button
                    type="button"
                    className="bg-[#171717] text-[#CFCFCF] focus:ring-4 focus:ring-blue-300 font-medium block mx-auto  text-sm px-5 py-1  dark:bg-blue-600 dark:hover:bg-[#CFCFCF] focus:outline-none dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </div>
            </div>

          
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileLastQuiz;
