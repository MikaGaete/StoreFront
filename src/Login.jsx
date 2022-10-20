export const Login = () => {
    return (
        <div className={'h-[90vh] bg-[#E6E8E6]'}>
            <div className={'flex flex-row justify-between h-full font-kanit mr-4 ml-4'}>
                <div className={'flex flex-col justify-around w-[45%] px-5'}>
                    <form>
                        <div className={'flex flex-col'}>
                            <label className={'text-lg'}>Email</label>
                            <input type="email" className={'w-full py-1 text-2xl rounded-lg'}/>
                        </div>
                        <div className={'flex flex-col py-2'}>
                            <label className={'text-lg'}>Password</label>
                            <input type="password" className={'w-full py-1 text-2xl rounded-lg'}/>
                        </div>
                        <div className={'py-2'}>
                            <button className={'w-full py-2 mt-1 text-2xl rounded-lg bg-[#DF2935]'}>
                                Log in
                            </button>
                        </div>
                    </form>
                </div>
                <div className={'w-[5%]'}></div>
                <div className={'w-[50%]'}></div>
            </div>
        </div>
    )
}