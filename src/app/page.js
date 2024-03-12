import PlayingSong from './components/PlayingSong'
import NavBar from './components/NavBar'

export default function HomePage(){

    return (
    <main className=''>
        <NavBar />
        <div className='grid grid-flow-row grid-cols-2'>
            <div className='flex flex-col  items-center text-center m-4'>
                <h1 className='text-3xl'>List of songs</h1>
                <div className='m-8 text-xl bg-slate-900 bg-opacity-50 p-4 w-full h-full rounded-lg'>
                    <ul>
                        <li>Song 1 <button className='bg-red-500 rounded-lg p-2 text-white font-semibold mx-5 text-lg'>DELETE</button></li>
                    </ul>
                </div>
            </div>
            <PlayingSong />
        </div>
    </main>
    )
}