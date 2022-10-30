import axios from "axios";
import {  validate, clean, format, getCheckDigit } from 'rut.js'

export const Register = () => {
    const onSumbit = () => {
        const {Name, PLN, SLN, Rut, DOB, Email, Password} = document.forms[0];
        const registerData = {
            name: Name.value,
            PLN: PLN.value,
            SLN: SLN.value,
            Rut: format(Rut.value),
            DOB: DOB.value,
            Email: Email.value,
            Password: Password.value,
        }
        axios.post('http://192.168.100.2:3100/register', {
            registerData
        })
            .then(console.log)
            .catch(console.log)
        console.log(Name.value, PLN.value, SLN.value, format(Rut.value), DOB.value, Email.value, Password.value);
    }
    return (
        <div className={'h-[89.75vh] bg-[#000103]'}>
            <div className={'flex flex-row justify-between h-full font-kanit mr-4 ml-4'}>
                <div className={'flex flex-col justify-around w-[45%] px-5'}>
                    <form onSubmit={(event) => {event.preventDefault(); onSumbit()}}>
                        <div className={'flex flex-col'}>
                            <label className={'text-lg'}>Name</label>
                            <input type="text" placeholder="Jonathan" className="input input-bordered w-full" name={'Name'}/>
                        </div>
                        <div className={'flex flex-row justify-between w-full py-2'}>
                            <div className={'flex flex-col w-[48%]'}>
                                <label className={'text-lg'}>Primary Last Name</label>
                                <input type="text" placeholder="Frez" className="input input-bordered" name={'PLN'}/>
                            </div>
                            <div className={'flex flex-col w-[48%]'}>
                                <label className={'text-lg'}>Secondary Last Name</label>
                                <input type="text" placeholder="Zachary" className="input input-bordered" name={'SLN'}/>
                            </div>
                        </div>
                        <div className={'flex flex-col'}>
                            <label className={'text-lg'}>RUT</label>
                            <input type="text" placeholder={'xx.xxx.xxx-x'} className="input input-bordered w-full" name={'Rut'}/>
                        </div>
                        <div className={'flex flex-col'}>
                            <label className={'text-lg'}>Date of birth</label>
                            <input type="date" className="input input-bordered w-full" name={'DOB'}/>
                        </div>
                        <div className={'flex flex-col'}>
                            <label className={'text-lg'}>Email</label>
                            <input type="email" placeholder="email@example.dom" className="input input-bordered w-full" name={'Email'}/>
                        </div>
                        <div className={'flex flex-col py-2'}>
                            <label className={'text-lg'}>Password</label>
                            <input type="password" placeholder="password" className="input input-bordered w-full" name={'Password'}/>
                        </div>
                        <div className={'py-1'}>
                            <button className={'btn btn-primary btn-block mt-3'}>
                                Register
                            </button>
                        </div>
                    </form>
                </div>
                <div className="divider divider-horizontal divider"></div>
                <div className={'w-[50%]'}></div>
            </div>
        </div>
    )
}