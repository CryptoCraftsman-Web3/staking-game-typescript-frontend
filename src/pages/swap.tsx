
type Props = {}

const BlackMarketPage = (props: Props) => {
    return (
        <div>
            <div className="w-full h-screen relative flex flex-col justify-center items-center -z-10 gap-8 mt-8 lg:mt-0">
                <h1 className="Dashboard_heading__SF4VX font-pricedown text-4xl md:text-6xl text-white relative pb-4 mb-4">black market</h1><div className="w-full flex justify-center gap-8">
                    <div className="Dashboard_card__2gsFM relative bg-darky text-white text-center flex flex-col w-full md:w-4/5 2xl:w-1/2 p-6">
                        <div className="flex w-full flex-col">
                            <div className="flex justify-between">
                                <div className="opacity-50">From</div>
                            <div>
                        <span className="opacity-50">Max</span>
                        <span className="text-pinky ml-2 cursor-pointer">0.000</span>
                    </div>
                </div>
                <div className="flex items-center justify-center border-b border-pinky">
                    <input className=" h-full z-20 w-full flex-1 outline-none  bg-transparent py-3 opacity-100 disabled:cursor-not-allowed" value="" />
                    <select className="bg-transparent outline-none">
                        <option className="bg-black text-white" value="BUSD">BUSD</option>
                        <option className="bg-black text-white" value="BNB">BNB</option>
                    </select>
                    </div>
                    </div>
                    <div className="flex justify-center items-center w-full py-6">
                        <div className="w-12 h-12 bg-pinky rounded-full cursor-pointer flex justify-center items-center">
                            <img src="/static/media/swap.7ca4a6ca4d6946020ff80f712894583e.svg" className="transform transition-all duration-300 rotate-0" />
                        </div>
                    </div>
                    <div className="flex w-full flex-col">
                        <div className="flex justify-between">
                            <div className="opacity-50">To</div>
                            <div>
                                <span className="opacity-50">Balance</span>
                                <span className="text-pinky ml-2 cursor-pointer">0.000</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-center border-b border-pinky">
                                <input className=" h-full z-20 w-full flex-1 outline-none  bg-transparent py-3 opacity-100 disabled:cursor-not-allowed" value="" />
                                <div>BANDIT</div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full text-sm py-6">
                            <div className="w-full flex justify-between">
                                <p className="opacity-50">Price</p>
                                <p>0 BANDIT per BNB</p>
                            </div>
                            <div className="w-full flex justify-between">
                                <p className="opacity-50">Auto Slippage</p>
                                <p>Active</p>
                            </div>
                            <div className="w-full flex justify-between">
                                <p className="opacity-50">Minimum Received</p>
                                <p>0.000 BANDIT</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center w-full">
                <button className="Dashboard_button__ct62Q font-medium w-3/4 py-2 rounded-sm relative z-10">Exchange</button>
                </div>
                </div>
                </div>
                </div>
        </div>
    )
}

export default BlackMarketPage