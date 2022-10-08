import React, { useRef, useState } from "react"

import { signIn } from "next-auth/react"
import { useRouter } from "next/router"

export default function AdminLogin() {
    let email = useRef("")
    let password = useRef("")
    const router = useRouter()

    let [showError, setShowError] = useState()
    let [errorMsg, setErrorMsg] = useState("")
    let [showSigninSpin, setShowSigninSpin] = useState(false)

    const signInHandler = async (e) => {
        e.preventDefault()
        setShowSigninSpin(true)
        const res = await signIn("credentials", {
            redirect: false,
            email: email.current.value,
            password: password.current.value
        })

        if (res.error) {
            setShowSigninSpin(false)
            setShowError(true)

            setErrorMsg(res.error)
        } else {
            setShowSigninSpin(false)
            router.replace("/admin/gatepass/")
        }

    }
    return (
        <div>
            <section className="">
                <div className="mt-16 flex justify-center px-6 py-8 mx-auto lg:py-0">
                    <div className=" w-full  rounded-lg border shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Admin access
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={signInHandler}>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Admin username</label>
                                    <input ref={email} type="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="username" required=""></input>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                    <input ref={password} type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required=""></input>
                                </div>
                                {showError && <p className="text-xs font-semibold text-red-400">{errorMsg}</p>}

                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""></input>
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label className="text-gray-500 ">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-indigo-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                {showSigninSpin && <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-1 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                                    <svg aria-hidden="true" role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                    </svg>
                                    Signing in
                                </button>}
                                {!showSigninSpin && <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-1 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                                    Sign in
                                </button>}
                            </form>
                        </div>
                    </div>
                </div >
            </section >
        </div >
    )
}