export const Login = () => {
    return (
        <div className={'h-[89.75vh] bg-[#000103]'}>
            <div className={'flex flex-row justify-between h-full font-kanit mr-4 ml-4'}>
                <div className={'flex flex-col justify-around w-[45%] px-5'}>
                    <form>
                        <div className={'flex flex-col'}>
                            <label className={'text-lg'}>Email</label>
                            <input type="email" placeholder="email@example.dom" className="input input-bordered w-full" />
                        </div>
                        <div className={'flex flex-col py-2'}>
                            <label className={'text-lg'}>Password</label>
                            <input type="password" placeholder="password" className="input input-bordered w-full" />
                        </div>
                        <div className={'py-2'}>
                            <button className={'btn btn-primary btn-block mt-2'}>
                                Log in
                            </button>
                        </div>
                    </form>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className={'w-[50%]'}></div>
            </div>
        </div>
    )
}