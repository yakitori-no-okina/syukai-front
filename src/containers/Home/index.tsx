import React from "react";
import { Link } from "react-router-dom";

const Home: React.VFC = () => (
  <div className="container px-6 py-14 box-border mx-auto h-screen">
      <div className="tablet:w-9/12 mx-auto  flex flex-col items-center text-center my-12 tablet:my-24">
          <img className="inline-block mb-12" src="/images/home/img_home.svg" alt="" />
          <Link to="/login" className="inline-block w-8/12 bg-custom-blue-base text-white font-bold text-sm rounded-3xl py-2 px-8 mb-6">
              ログイン
          </Link>
          <Link to="/signup/step1" className="inline-block w-8/12 bg-custom-black-base text-white font-bold text-sm rounded-3xl py-2 px-8 mb-6">
              新規作成
          </Link>
      </div>
  </div>
);

export default Home;
