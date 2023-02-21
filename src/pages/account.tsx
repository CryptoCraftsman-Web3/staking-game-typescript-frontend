import HeaderCard from "../components/common/HeaderCard";

type Props = {};

function AccountPage(props: Props) {
  return (
    <div className="h-full relative flex flex-col items-center">
      <HeaderCard />
      <div className=" flex flex-col justify-center items-center w-11/12 flex-1 pt-36 gap-y-5">
        <h1 className="Dashboard_heading__SF4VX font-pricedown text-4xl md:text-6xl text-white relative pb-4 mb-4">
          crew stats
        </h1>
        <div className="w-full flex justify-between gap-8">
          <div className="Dashboard_card__2gsFM relative bg-darky text-white text-center w-1/3 py-6">
            <h1 className="opacity-50 text-xs">Available Rewards</h1>
            <h1 className="text-lg font-semibold">0 $BANDIT</h1>
            <h1 className="opacity-50 text-xs">0 $BUSD</h1>
          </div>
          <div className="Dashboard_card__2gsFM relative bg-darky text-white text-center w-1/3 py-6">
            <h1 className="opacity-50 text-xs">Total Locked</h1>
            <h1 className="text-lg font-semibold">0 $BANDIT</h1>
            <h1 className="opacity-50 text-xs">0 $BUSD</h1>
          </div>
          <div className="Dashboard_card__2gsFM relative bg-darky text-white text-center w-1/3 py-6">
            <h1 className="opacity-50 text-xs">Daily ROI</h1>
            <h1 className="text-lg font-semibold">0 $BANDIT</h1>
            <h1 className="opacity-50 text-xs">0 $BUSD</h1>
          </div>
        </div>
        <div className="relative w-full flex justify-center items-center">
          <h1 className="Dashboard_heading__SF4VX w-fit font-pricedown text-4xl md:text-6xl text-white relative pb-4 mb-4">
            crew members
          </h1>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 pr-[5px] relative mt-2">
          <div className="absolute flex gap-2 left-0 -translate-y-full -top-2 text-white">
            <button className="Dashboard_button font-medium py-2 px-4 rounded-sm relative z-10">
              Claim All
            </button>
            <button className="Dashboard_button font-medium py-2 px-4 rounded-sm relative z-10">
              Compound All
            </button>
          </div>
          <div className="absolute flex gap-2 right-0 -translate-y-full -top-2 text-white">
            <button className="Dashboard_button hidden lg:block font-medium py-2 px-4 rounded-sm relative z-10">
              Select
            </button>
            <label className="Dashboard_button hidden lg:block px-2 py-2 text-white relative cursor-pointer">
              Hide retired
              <input
                type="checkbox"
                name=""
                id=""
                className="accent-pinky"
              />
            </label>
          </div>
          <div className="Dashboard_card__2gsFM relative bg-darky text-white flex items-center justify-between flex-col py-4 px-6">
            <div className="text-center">
              <input
                className="w-full font-semibold bg-transparent outline-none appearance-none border-b border-pinky border-opacity-50 focus:border-opacity-100 transition-all duration-150 text-center"
                placeholder="Name"

              />
              <img
                src="/images/random.png"
                className="py-4"
              />
            </div>
            <div className="w-full">
              <div className="flex flex-col items-start w-full">
                <div className="flex justify-between w-full">
                  <h1 className="text-sm opacity-50">Locked Amount:</h1>
                  <button className="Dashboard_button text-sm px-2 rounded-sm relative z-10 w-[75px]">
                    Max
                  </button>
                </div>
                <div className="flex mt-1">
                  <input
                    className="w-2/3 bg-transparent outline-none appearance-none border-b border-pinky border-opacity-50 focus:border-opacity-100 transition-all duration-150"
                    placeholder="Deposit"

                  />
                  <h1 className="ml-2 font-medium">$BANDIT</h1>
                </div>
              </div>
              <div className="flex-col items-start w-full opacity-0">
                <h1 className="text-sm opacity-50">Current Minimum:</h1>
                <h1 className="font-medium">15.0 $BANDIT</h1>
              </div>
              <div className="flex-col items-start w-full opacity-0">
                <h1 className="text-sm opacity-50">Current Minimum:</h1>
                <h1 className="font-medium">15.0 $BANDIT</h1>
              </div>
              <div className="flex-col items-start w-full cursor-pointer">
                <h1 className="text-sm opacity-50">Current Minimum:</h1>
                <h1 className="font-medium">15.0 $BANDIT</h1>
              </div>
              <div className="flex-col items-start w-full opacity-0">
                <h1 className="text-sm opacity-50">Pending Rewards:</h1>
                <h1 className="font-medium">1.000 $BANDIT</h1>
              </div>
              <div className="flex flex-col items-start w-full">
                <h1 className="text-sm opacity-50">Daily Rewards:</h1>
                <h1 className="font-medium">1.00%</h1>
                <h1 className="font-medium">(0.000 $BANDIT)</h1>
              </div>
            </div>
            <div className="flex w-full gap-2">
              <button className="Dashboard_button font-medium w-full py-2 mt-4 rounded-sm relative z-10">
                Approve
              </button>
            </div>
          </div>
        </div>
        <h1 className="Dashboard_heading__SF4VX font-pricedown text-4xl md:text-6xl text-white relative pb-4 mb-4">
          nft lookup
        </h1>
        <div className="w-3/4 lg:w-1/4 flex flex-col items-center justify-center gap-8 pb-12">
          <div className="Dashboard_card relative bg-darky text-white text-center flex flex-col w-full p-6">
            <div className="flex w-full flex-col">
              <div className="flex justify-between">
                <div className="opacity-50">Look up ID</div>
              </div>
              <div className="flex items-center justify-center border-b border-pinky">
                <input
                  className="h-full z-20 w-full flex-1 outline-none bg-transparent py-3 opacity-100 disabled:cursor-not-allowed"
                  placeholder="0"
                />
              </div>
            </div>
            <div className="flex justify-center items-center w-full pt-6">
              <button className="Dashboard_button font-medium w-full py-2 rounded-sm relative z-10">
                Look up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
