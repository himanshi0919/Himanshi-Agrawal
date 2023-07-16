import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="px-6 lg:px-16 py-10 rounded-3xl">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
          <div className="flex flex-col gap-5 lg:gap-10">
            <p className="text-2xl sm:text-4xl md:text-5xl lg:text-4xl font-medium font-semibold">
              A Digital Product Agency
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500">
              Leading digital agency with solid design and development
              <br className="lg:flex hidden" />
              expertise. We build readymade websites, mobile applications,
              <br className="lg:flex hidden" />
              and elaborate online business services.
            </p>
            <button
              className="btn btn-sm lg:btn-lg bg-[#2639ED] text-white rounded-full border-none w-70 h-12 lg:w-40 capitalize"
              onClick={() => {
                window.location.href = "/desktop";
              }}
            >
              Contact Now
            </button>
          </div>
          <div>
            <img
              className="absolute top-[70px] left-[520px] w-[120px] h-[120px]"
              src={process.env.PUBLIC_URL + "/assets/Ellipse 85.png"}
              alt=""
            />
            <img
              className="absolute top-[400px] left-[1000px] w-[160px] h-[1600x]"
              src={process.env.PUBLIC_URL + "/assets/Rectangle 23.png"}
              alt=""
            />
            <img
              className="absolute top-[70px] left-[590px] rounded-t-none rounded-br-none rounded-bl-[180px] w-[654px] h-[412px] object-cover"
              src={process.env.PUBLIC_URL + "https://lh3.googleusercontent.com/pw/AIL4fc99dUS7exJwH2geazRLAHnRukyMLzzX2k_Qnjz782YuepaL_9Ep44tLEOzXR3TWQNphk6kfy3gwFeGaosecWWVqIlJxAEnbKjzRZVX30Glw59MgwBBwlFGVgsCsdSzVIuDO4IFnjCf94NMILyiJKeVN69cv-zDoP21V3_A3IGIRbHJPgYVCCe0GVM9LDUpilKVRdxJp-MOD1A1n18wVP-BYT_0yxb5_HFp_WHRghIuzclrxKDQJ3jAnF-gPgVtRuWcCQR5cBA0HbBhAevwbSZkcYLewZ-HZF3yDqVHYzE8zx_bW7umuf0JeCyexJNiC3QJE8F5jqhFzfzc8g_FWrMWvxWO7qsbGS3ozikN2v7UCpzSQ4wpTkJRqPF8SNUaVcIBKhJRYfh9LPWoQB-Ts6pomt_MBJWXHcP_AGoRLW4otprrKxyz8XT6UPBB_FkEQXWLLp9Ra0zvFPjrs1rwPoSLrDJhNNfgSROhmDku8guporFu5Chex8WaW0r0JfXWjPjlsUPi1bkarUTjxIGUaJhE8OR_6zG3oOs9a-BIsRCta4rgD7KMKQEzLbqqEkOH3B1EgioXOw7M0RtcncWn3n3ir_CwpGlNq7hyeWrGcD6OJ4snBMfCIOfXoDB0MaZ7uyvieFlGcAsbYs_1mtORRBMYad8AIYLRSYWKVqglg1XGZMkn93ajDwlzD6RBQmGuZMVnQjtUF3v29tFhArHDv0bmwVct_mYjmFDu-VFwZqQUOHbn-fNz66-YmifYI0hCDLn4CeUsreyG6BC0OGCwSM-4V83RY0EUkOrGWWZFGJS-JrLpG5VI5UVo4WpXLhWhjNpYvR3wB4I1V5h0qH1QnOLXQJ_RrkDgjzheGEgBcqV7-WHJnKOCvAQYzeABw4SUXcZpBPrgdwWxdipbUIXyk=w754-h512-s-no?authuser=0"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;





