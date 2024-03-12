//import { pool } from '@/utils/dbConnect '
//import dbConnect from './utils/dbConnect'

import PlayingSong from './components/PlayingSong'
import NavBar from './components/NavBar'

export default function HomePage(){

    let songTitle = 'Descobridor dos Sete Mares'

    return (
    <main className='w-full'>
        <NavBar />
        <div className='grid  md:grid-flow-row md:grid-cols-2'>
            <div className='order-2 md:order-1 flex flex-col  items-center text-center m-4'>
                <h1 className='text-3xl'>List of songs</h1>
                <div className='m-8 text-xl bg-slate-900 bg-opacity-50 p-4 w-full h-full rounded-lg'>
                    <ul>
                        <li>{songTitle}<button className='bg-red-500 rounded-lg p-2 text-white font-semibold mx-5 text-lg'>DELETE</button></li>
                    </ul>
                </div>
            </div>
            <div className='order-1 md:order-3'><PlayingSong/></div>
        </div>
    </main>
    )
}