import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Modal from '../components/Modal.js'

export default function Home() {
  let [showModel, setShowModel] = useState(false)

  return (
    <div>
      <Head>
        <title>Shiva Hostel Get Pass Form</title>
        <meta lang='en'></meta>
        <meta description='getpass form'></meta>
      </Head>
      {showModel ? <Modal /> : null}
      <div className='flex items-center justify-center mt-12 md:mt-8'>
        <div className='w-12 bg-gray-500 h-0.5 rounded-lg'></div>
        <p className='block uppercase tracking-wide text-gray-700 text-lg font-bold mx-3'>Get Pass Form </p>
        <div className='w-12 bg-gray-500 h-0.5 rounded-lg'></div>
      </div>
      <p className='italic text-xs text-center text-gray-700'>Fill add all the details carefully</p>
      <div className="flex justify-center my-4">
        <form className="w-full max-w-lg mx-5 sm:mx-0" onSubmit={(e) => { e.preventDefault(); setShowModel(true) }}>
          <p className="block uppercase my-7 tracking-wide text-gray-700 text-md font-bold">Your Details</p>
          <div className="flex flex-wrap -mx-3 my-4">
            <div className="w-full md:w-1/2 px-3 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                First Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-600 " id="grid-first-name" type="text" placeholder="Jane"></input>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Last Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-600" id="grid-last-name" type="text" placeholder="Doe"></input>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Mobile No
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-600" id="grid-password" type="number" placeholder="Mobile No"></input>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Year
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-600" id="grid-city" type="number" placeholder="Year"></input>
            </div>
            <div className="w-full md:w-1/2 px-3 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Branch
              </label>
              <div className="relative">
                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-400 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-indigo-600" id="grid-state">
                  <option>Pharma</option>
                  <option>Technology</option>
                  <option>Management</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
            <div className="w-full px-3 my-3 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Room no
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-600" id="grid-zip" type="number" placeholder="103"></input>
            </div>

            <div className="w-full sm:my-6 px-3 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Reason
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-600" id="grid-zip" type="text" placeholder=""></input>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mt-3">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Parents Mobile No*
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-600" type="number" placeholder="Mobile No"></input>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mt-3">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                From Date
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-600"
                type="date" placeholder=""></input>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 my-3">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                To Date
              </label>
              <input className="appearance-none block w-full bg-gray-200  text-gray-400 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-600"
                type="date" placeholder="Date" ></input>
            </div>
          </div>
          <div className='mt-3 flex justify-between items-center gap-3'>
            <div className='flex  items-center gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-indigo-700 rounded-lg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              <a className=' text-indigo-600 tracking-wide text-xs'>Back to home</a>
            </div>
            <button className="bg-transparent hover:bg-indigo-700 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded" type='submit' >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </div >
  )
}

