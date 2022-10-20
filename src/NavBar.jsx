import {Link, Outlet} from "react-router-dom";

export const NavBar = () => {
    return (
        <div className={'h-[10vh] bg-[#12130F]'}>
            <div className={'h-full text-[#E6E8E6] flex flex-col justify-center font-kanit'}>
                <div className={'flex flex-row justify-between mr-4 ml-4'}>
                    <div className={'text-4xl flex justify-center w-[25%]'}>
                        <Link to={"/"}>
                            Mika's Store
                        </Link>
                    </div>
                    <div className={'text-2xl flex justify-around py-1 text-[#B3B5BB] w-[48%]'}>
                        <Link to={"/"}>D1</Link>
                        <Link to={"/"}>D2</Link>
                        <Link to={"/"}>D3</Link>
                    </div>
                    <div className={'text-3xl flex justify-center w-[25%]'}>
                        <Link to={"/login"} className={"px-4 py-0.5 rounded-lg bg-[#DF2935]"}>Button</Link>
                    </div>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}