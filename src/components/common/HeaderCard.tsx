import clsx from 'clsx'

type Props = {}

const HeaderCard = (props: Props) => {
    return (
        <div className="w-11/12 relative ">
            <div className={
                clsx(
                    " hidden lg:flex absolute bg-black px-4 h-12 left-0 top-10 text-cyan-400 justify-center items-center Header_card",
                )
            }>
                $0.2102
            </div>
            <div className={clsx(
                " hidden lg:flex justify-self-center  absolute bg-black px-4 h-12 right-0 top-10 text-cyan-400 justify-center items-center cursor-pointer gap-2 Header_card",
            )}>
                <button className="h-full">Connect Wallet</button>
            </div>
        </div>
    )
}

export default HeaderCard