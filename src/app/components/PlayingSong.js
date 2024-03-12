import Image from 'next/image'


export default function PlayingSong(){
    let audioFile = '/audio/O Descobridor Dos Sete Mares.mp3'
    let imgFile = '/timmaidescobridordossetemares.jpg'
    let songTitle = 'Descobridor Dos Sete Mares'
    return (
        <div className='flex flex-col items-center text-center my-14 md:my-80'>
            <Image src={imgFile} width={110} height={110} alt='Pic of the author' className='rounded-lg border-2 border-black' />
            <h1 className='text-2xl my-2'>{songTitle}</h1>
            <audio controls>
                <source src={audioFile} type='audio/mp3' />
            </audio>
        </div>
    );
}