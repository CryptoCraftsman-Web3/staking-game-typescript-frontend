import HeaderCard from "../components/common/HeaderCard";
import styles from "./dashboard.module.css"
import clsx from "clsx"
type Props = {};

const DashboardPage = (props: Props) => {
    return (
        <div className=" h-screen relative flex flex-col items-center">
            <HeaderCard />
            <div className=" flex flex-col justify-center items-center w-11/12 flex-1">
                <h1 className={clsx(
                    " font-pricedown text-4xl md:text-6xl text-white relative pb-4 mb-4",
                    styles.Dashboard_heading
                )}>
                    planning board
                </h1>
                <div className={
                    clsx(
                        "w-full flex-col md:flex-row flex justify-between gap-8 my-2",
                    )
                }>
                    <div className={
                        clsx(
                            "relative bg-darky text-white text-center md:w-1/3 py-6",
                            styles.Dashboard_card
                        )
                    }>
                        <h1 className="opacity-50 text-xs">$BANDIT Price</h1>
                        <h1 className="text-lg font-semibold">$0.2102</h1>
                    </div>
                    <div className={
                        clsx(
                            "relative bg-darky text-white text-center md:w-1/3 py-6",
                            styles.Dashboard_card
                        )
                    }>
                        <h1 className="opacity-50 text-xs">Crew Count</h1>
                        <h1 className="text-lg font-semibold">552 / 3000</h1>
                    </div>
                    <div className={
                        clsx(
                            "Dashboard_card relative bg-darky text-white text-center md:w-1/3 py-6",
                            styles.Dashboard_card
                        )
                    }>
                        <h1 className="opacity-50 text-xs">Stash House Balance</h1>
                        <h1 className="text-lg font-semibold">5108.469 $BUSD</h1>
                    </div>
                </div>
                <div className="w-full flex-col md:flex-row flex justify-between gap-8 my-2">
                    <div className={
                        clsx(
                            "Dashboard_card relative bg-darky text-white text-center md:w-1/3 py-6",
                            styles.Dashboard_card
                        )
                    }>
                        <h1 className="opacity-50 text-xs">Total Token Holders</h1>
                        <h1 className="text-lg font-semibold">277</h1>
                    </div>
                    <div className={
                        clsx(
                            "Dashboard_card relative bg-darky text-white text-center md:w-1/3 py-6",
                            styles.Dashboard_card
                        )
                    }>
                        <h1 className="opacity-50 text-xs">Total Supply</h1>
                        <h1 className="text-lg font-semibold">1,000,000</h1>
                    </div>
                    <div className={
                        clsx(
                            "Dashboard_card relative bg-darky text-white text-center md:w-1/3 py-6",
                            styles.Dashboard_card
                        )
                    }>
                        <h1 className="opacity-50 text-xs">Circulating Supply</h1>
                        <h1 className="text-lg font-semibold">188,548</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
