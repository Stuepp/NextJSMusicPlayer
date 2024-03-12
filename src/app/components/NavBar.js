import Link from 'next/link'

export default function NavBar(){
    return(
        <div className='flex items-center justify-center px-4 sticky top-0 bg-orange-500'>
            <ul className='flex gap-x-3 text-2xl font-semibold p-3'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/form'}>Create</Link></li>
                <li>Edit</li>
            </ul>
        </div>
    )
}