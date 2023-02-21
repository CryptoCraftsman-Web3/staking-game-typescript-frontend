import clsx from 'clsx'
import React from 'react'
import HeaderCard from '../components/common/HeaderCard'

type Props = {}

const StashHousePage = (props: Props) => {
    return (
        <div className="h-full relative flex flex-col items-center">
            <HeaderCard />
            <div className="w-full py-20 relative flex flex-col justify-center items-center gap-8 mt-8 lg:mt-0">
                <h1 className="Dashboard_heading__SF4VX font-pricedown text-4xl md:text-6xl text-white relative pb-4 mb-4">Stash House</h1>
                <div className="w-full flex justify-center gap-8">
                    <div className="Dashboard_card__2gsFM relative bg-darky text-white text-center flex flex-col w-full md:w-4/5 2xl:w-1/2 p-6"><div className="flex w-full flex-col"><div className="flex justify-between">
                        <div className="opacity-50">Stake</div>
                        <div className="cursor-pointer">
                            <span className="opacity-50">Max</span>
                            <span className="text-pinky ml-2">0</span>
                        </div>
                    </div>
                        <div className="flex items-center justify-center border-b border-pinky">
                            <input className="h-full z-20 w-full flex-1 outline-none bg-transparent py-3 opacity-100 disabled:cursor-not-allowed" />
                        </div>
                    </div>
                        <div className="flex flex-col w-full text-sm pt-6">
                            <div className="w-full flex justify-between">
                                <p className="opacity-50">Daily ROI</p>
                                <p>1.50%</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center w-full pt-6">
                            <button className="Dashboard_button font-medium w-3/4 py-2 rounded-sm relative z-10">Approve</button>
                        </div>
                    </div>
                </div>
                <h1 className="Dashboard_heading font-pricedown text-4xl md:text-6xl text-white relative pb-4 mb-4">your staking</h1>
                <div className="Dashboard_card__2gsFM relative bg-darky text-white text-center flex flex-col flex-1 w-full md:w-4/5 2xl:w-1/2 p-6">
                    <div className="flex w-full justify-between">
                        <div className="flex w-full flex-col items-start">
                            <p className="opacity-50">Total Staked</p>
                            <p className="text-lg">0.0 BUSD</p>
                        </div>
                        <div className="flex w-full flex-col items-end">
                            <p className="opacity-50">Available Rewards</p>
                            <p className="text-lg">0.00000 BUSD</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full text-sm pt-6">
                        <div className="w-full flex justify-between">
                            <p className="opacity-50">Daily ROI</p>
                            <p>0.00000 BUSD</p>
                        </div>
                        <div className="w-full flex justify-between">
                            <p className="opacity-50">Available Claims</p>
                            <p>0</p>
                        </div>
                        <div className="w-full flex justify-between">
                            <p className="opacity-50">Total Deposited</p>
                            <p>0.0 BUSD</p>
                        </div>
                        <div className="w-full flex justify-between">
                            <p className="opacity-50">Total Compounded</p>
                            <p>0.0 BUSD</p>
                        </div>
                        <div className="w-full flex justify-between">
                            <p className="opacity-50">Total Claimed</p>
                            <p>0.0 BUSD</p>
                        </div>
                        <div className="w-full flex justify-between">
                            <p className="opacity-50">Cutoff in</p><p>--</p>
                        </div>
                        <div className="w-full flex justify-between">
                            <p className="opacity-50">Last Action</p><p>--</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full pt-6 gap-4">
                        <div className="flex flex-col w-3/4">
                            <p className="opacity-50 text-right">5% tax</p>
                            <button className="Dashboard_button font-medium w-full py-2 rounded-sm relative z-10">Compound</button>
                        </div>
                        <div className="flex flex-col w-3/4">
                            <p className="opacity-50 text-right">10% tax</p>
                            <button className="Dashboard_button font-medium w-full py-2 rounded-sm relative z-10">Claim</button>
                        </div>
                    </div>
                </div>
                <h1 className="Dashboard_heading__SF4VX font-pricedown text-4xl md:text-6xl text-white relative pb-4 mb-4">rewards wallet</h1>
                <div className="w-full flex justify-center gap-8">
                    <div className="Dashboard_card__2gsFM relative bg-darky text-white text-center flex flex-col w-full md:w-4/5 2xl:w-1/2 p-6">
                        <div className="flex flex-col w-full text-sm">
                            <div className="w-full flex justify-between">
                                <p className="opacity-50">Total Comission</p><p>0 BUSD</p></div><div className="w-full flex justify-between"><p className="opacity-50">Claimed Comission</p><p>0 BUSD</p></div><div className="w-full flex justify-between"><p className="opacity-50">Available Comission</p><p>0 BUSD</p></div><div className="flex justify-center items-center w-full pt-6 gap-4"><div className="flex flex-col w-3/4"><p className="opacity-50 text-right">0% tax</p><button className="Dashboard_button font-medium w-full py-2 rounded-sm relative z-10">Compound</button></div><div className="flex flex-col w-3/4"><p className="opacity-50 text-right">30% tax</p><button className="Dashboard_button font-medium w-full py-2 rounded-sm relative z-10">Claim</button></div></div></div></div></div><h1 className="Dashboard_heading__SF4VX font-pricedown text-4xl md:text-6xl text-white relative pb-4 mb-4">how it works</h1><div className="w-full flex justify-center gap-8"><div className="Dashboard_card__2gsFM relative bg-darky text-white flex flex-col w-full md:w-4/5 2xl:w-1/2 p-6"><div className="flex flex-col w-full text-sm"><ul><li>- Stash House pays 1.5% daily ROI up to 300% of your BUSD deposits.</li><li>- Players Receive 1:1 Ratio on Deposits</li><li>- 7% Tax on all Deposits paid by the contract. (5% Buyback $BANDIT, 2% Referral Commissions)</li><li>- 10% Tax on Claims. (2% Buyback $BANDIT, 8% Rewards pool)</li><li>- 5% Tax on Compounds. (5% Rewards Pool)</li><li>- One claim is made available for every three compounds. This is cumulative. Build up your claimable days and use them as you please.</li><li>- Compound or Claim once every 24hrs. No restrictions on Deposits</li><li>- Claims decrease the total amount staked by the amount being withdrawn.</li><li>- The total amount staked will never dip below the player's real deposits.</li><li>- Pending rewards stop accumulating after a 48-hour cutoff.</li><br /><li>*Disclaimer</li><li>This is a high-risk, high-reward game. The contract will continue to pay players as long as there are funds on the contract. Once the contract balance hits zero, the game is over. </li><li>Contract address: 0xfb5D4104DB785B3438B5Bd28d062FEbd85E5a714</li></ul></div></div></div></div>
        </div>
    )
}

export default StashHousePage