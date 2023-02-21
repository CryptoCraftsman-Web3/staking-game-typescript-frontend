import clsx from "clsx";
import HeaderCard from "../components/common/HeaderCard";

type Props = {};

const DiceRollPage = (props: Props) => {
    return (
        <div className="h-full relative flex flex-col items-center">
            <HeaderCard />

            <div className="w-full h-screen relative flex flex-col justify-center items-center gap-8 mt-8 lg:mt-0">
                <div className="w-full py-20 relative flex flex-col justify-center items-center gap-8 mt-8 lg:mt-0">
                    <h1 className="Dashboard_heading__SF4VX font-pricedown text-4xl md:text-6xl text-white relative pb-4 mb-4">
                        dice roll
                    </h1>
                    <div className="w-full flex justify-center gap-8">
                        <div className="shadow-[0_0_60px_15px_rgba(202,138,4,1)] shadow-yellow-600 bg-darky border-2 border-dashed border-yellow-600 text-white text-center flex flex-col w-full md:w-4/5 2xl:w-1/2 p-6">
                            <div className="flex flex-col font-bungee">
                                <h1 className="text-2xl">JACKPOT</h1>
                                <p className="text-4xl">50.0 $BANDIT</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center gap-8">
                        <div className="Dashboard_card relative bg-darky text-white text-center flex flex-col w-full md:w-4/5 2xl:w-1/2 p-6">
                            <div className="flex w-full flex-col">
                                <div className="flex justify-between">
                                    <div className="opacity-50">Bet amount</div>
                                    <div>
                                        <span className="opacity-50">Max</span>
                                        <span className="text-pinky ml-2 cursor-pointer">0</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center border-b border-pinky">
                                    <input
                                        className=" h-full z-20 w-full flex-1 outline-none bg-transparent py-3 opacity-100 disabled:cursor-not-allowed"
                                        placeholder="Enter value here"

                                    />
                                    <select className="bg-transparent outline-none py-3">
                                        <option className="bg-black text-white" value="BANDIT">
                                            BANDIT
                                        </option>
                                        <option className="bg-black text-white" value="BNB">
                                            BNB
                                        </option>
                                        <option className="bg-black text-white" value="BUSD">
                                            BUSD
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-center items-center w-full py-6 gap-4">
                                <button className="Dashboard_button cursor-pointer font-medium w-3/4 py-2 rounded-sm relative z-10 opacity-100 hover:opacity-100 transition-all">
                                    Even
                                </button>
                                <button className="Dashboard_button font-medium w-3/4 py-2 rounded-sm relative z-10 opacity-50 hover:opacity-100 transition-all">
                                    Odd
                                </button>
                            </div>
                            <div className="flex flex-col w-full text-sm">
                                <div className="w-full flex justify-between">
                                    <p className="opacity-50">Min</p>
                                    <p>0.5 $BANDIT</p>
                                </div>
                                <div className="w-full flex justify-between">
                                    <p className="opacity-50">Max</p>
                                    <p>50.0 $BANDIT</p>
                                </div>
                                <div className="w-full flex justify-between">
                                    <p className="opacity-50">Min bet for jackpot</p>
                                    <p>1.0 $BANDIT</p>
                                </div>
                                <div className="w-full flex justify-between">
                                    <p className="opacity-50">Multiplier</p>
                                    <p>x 2.00</p>
                                </div>
                                <div className="w-full flex justify-between">
                                    <p className="opacity-50">House fee</p>
                                    <p>3.00%</p>
                                </div>
                                <div className="w-full flex justify-between">
                                    <p className="opacity-50">On win</p>
                                    <p>0 $BANDIT</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center w-full pt-6">
                                <button className="Dashboard_button font-medium w-3/4 py-2 rounded-sm relative z-10">
                                    Approve
                                </button>
                            </div>
                        </div>
                    </div>
                    <h1 className="Dashboard_heading__SF4VX font-pricedown text-4xl md:text-6xl text-white relative pb-4 mb-4">
                        history
                    </h1>
                    <div className="w-full flex justify-center gap-8">
                        <div className="Dashboard_card relative bg-darky text-white text-center flex flex-col w-full md:w-4/5 2xl:w-1/2 p-6">
                            <table className="table-fixed w-full">
                                <thead>
                                    <tr className="opacity-50 text-sm border-b border-pinky pb-2">
                                        <th className="font-medium hidden lg:table-cell">Token</th>
                                        <th className="font-medium hidden lg:table-cell">Amount</th>
                                        <th className="font-medium hidden lg:table-cell">Even</th>
                                        <th className="font-medium hidden lg:table-cell">Result</th>
                                        <th className="font-medium hidden lg:table-cell">Payout</th>
                                    </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiceRollPage;
