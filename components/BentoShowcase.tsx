const BentoShowcase = () => {
  return (
    <div className="bg-white w-full mx-auto py-20 px-5 gap-2 h-dvh md:px-10 lg:px-20">
      <div className="w-full h-full hidden justify-center items-center gap-2 md:flex">
        <div className="w-1/3 h-full flex flex-col justify-center items-center gap-2">
          <div className="w-full h-1/2">
            <div className="bg-gray-200 container flex w-full h-full border-2 rounded-lg">
              <video
                src="/videos/SBP_1.mp4"
                className="w-full h-full rounded-lg"
                autoPlay
                loop
                muted
              />
            </div>
          </div>
          <div className="w-full h-1/2 flex justify-center items-center gap-2">
            <div className="w-1/2 h-full">
              <div className="bg-gray-200 container flex w-full h-full border-2 rounded-lg">
                <video
                  src="/videos/SBPShort_1.mp4"
                  className="w-full h-full rounded-lg"
                  autoPlay
                  loop
                  muted
                />
              </div>
            </div>
            <div className="w-1/2 h-full">
              <div className="bg-gray-200 container flex w-full h-full border-2 rounded-lg">
                <video
                  src="/videos/SBP_1.mp4"
                  className="w-full h-full rounded-lg"
                  autoPlay
                  loop
                  muted
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-full flex flex-col justify-center items-center">
          <div className="w-full h-1/3">
            <div className="bg-gray-200 container flex w-full h-full border-2 rounded-lg">
              <video
                src="/videos/MewsGate_3.mp4"
                className="w-full h-full rounded-lg"
                autoPlay
                loop
                muted
              />
            </div>
          </div>
          <div className="w-full h-1/3 flex justify-center items-center">
            <h1 className="text-2xl p-5 font-bold text-center text-black lg:text-2xl lg:p-20">
              Beautifully Designed Homes for Your Family
            </h1>
          </div>
          <div className="w-full h-1/3">
            <div className="bg-gray-200 container flex w-full h-full border-2 rounded-lg">
              <video
                src="/videos/MewsGate_3.mp4"
                className="w-full h-full rounded-lg"
                autoPlay
                loop
                muted
              />
            </div>
          </div>
        </div>
        <div className="w-1/3 h-full flex flex-col justify-center items-center gap-2">
          <div className="w-full h-1/2 flex justify-center items-center gap-2">
            <div className="w-1/2 h-full">
              <div className="bg-gray-200 container flex w-full h-full border-2 rounded-lg">
                <video
                  src="/videos/SBPShort_1.mp4"
                  className="w-full h-full rounded-lg"
                  autoPlay
                  loop
                  muted
                />
              </div>
            </div>
            <div className="w-1/2 h-full">
              <div className="bg-gray-200 container flex w-full h-full border-2 rounded-lg">
                <video
                  src="/videos/SBP_1.mp4"
                  className="w-full h-full rounded-lg"
                  autoPlay
                  loop
                  muted
                />
              </div>
            </div>
          </div>
          <div className="w-full h-1/2">
            <div className="bg-gray-200 container flex w-full h-full border-2 rounded-lg">
              <video
                src="/videos/SBP_1.mp4"
                className="w-full h-full rounded-lg"
                autoPlay
                loop
                muted
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-2 md:hidden">
        <div className="w-full h-1/3 flex justify-center items-center gap-2">
          <div className="w-1/2 h-full flex flex-col gap-2 justify-center items-center">
            <div className="h-1/2 w-full">
              <div className="bg-gray-200 container flex w-full h-full border-2 rounded-lg">
                <video
                  src="/videos/MewsGate_1.mp4"
                  className="w-full h-full rounded-lg"
                  autoPlay
                  loop
                  muted
                />
              </div>
            </div>
            <div className="h-1/2 w-full">
              <div className="bg-gray-200 container flex w-full h-full border-2 rounded-lg">
                <video
                  src="/videos/SBP_1.mp4"
                  className="w-full h-full rounded-lg"
                  autoPlay
                  loop
                  muted
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full">
            <div className="w-full h-full">
              <video
                src="/videos/SBPShort_1.mp4"
                className="w-full h-full rounded-lg"
                autoPlay
                loop
                muted
              />
            </div>
          </div>
        </div>
        <div className="w-full h-1/3 flex justify-center items-center">
          <h1 className="text-2xl font-bold text-center text-black p-10">
            Beautifully Designed Homes for Your Family
          </h1>
        </div>
        <div className="w-full h-1/3 flex justify-center items-center gap-2">
          <div className="w-1/2 h-full">
            <div className="w-full h-full">
              <video
                src="/videos/MewsGate_3.mp4"
                className="w-full h-full rounded-lg"
                autoPlay
                loop
                muted
              />
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col gap-2 justify-center items-center">
            <div className="h-1/2 w-full">
              <div className="bg-gray-200 container flex w-full h-full border-2 rounded-lg">
                <video
                  src="/videos/MewsGate_2.mp4"
                  className="w-full h-full rounded-lg"
                  autoPlay
                  loop
                  muted
                />
              </div>
            </div>
            <div className="h-1/2 w-full">
              <div className="bg-gray-200 container flex w-full h-full border-2 rounded-lg">
                <video
                  src="/videos/SBP_1.mp4"
                  className="w-full h-full rounded-lg"
                  autoPlay
                  loop
                  muted
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoShowcase;
