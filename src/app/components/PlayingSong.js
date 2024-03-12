import Image from 'next/image'


export default function PlayingSong(){
    let audioFile = '/audio/O Descobridor Dos Sete Mares.mp3'
    return (
        <div className='flex flex-col items-center text-center my-80'>
            <Image src='/sample.png' width={110} height={110} alt='Pic of the author' className='rounded-lg border-2 border-rose-500' />
            <h1 className='text-2xl my-2'>Song Title</h1>
            <audio controls>
                <source src={audioFile} type='audio/mp3' />
            </audio>
        </div>
    );
}