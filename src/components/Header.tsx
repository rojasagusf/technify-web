import Image from 'next/image';
import arrowBefore from '../assets/icons/arrow-before.svg'
import arrowNext from '../assets/icons/arrow-next.svg'
import heartIcon from '../assets/icons/heart.svg'
import userIcon from '../assets/icons/user.svg'

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-6">
      <section className='flex gap-4'>
        <button type="button" className='bg-absoluteDark p-1 rounded-full flex justify-center items-center'>
          <Image src={arrowBefore} width={25} height={25} alt='arrow before' />
        </button>
        <button type="button" className='bg-absoluteDark p-1 rounded-full flex justify-center items-center'>
          <Image src={arrowNext} width={25} height={25} alt='arrow next' />
        </button>
      </section>
      <section className='flex gap-4'>
        <button type="button" className='bg-absoluteDark p-1 rounded-full flex justify-center items-center'>
          <Image src={heartIcon} width={25} height={25} alt='arrow next' />
        </button>
        <button type="button" className='bg-absoluteDark p-1 rounded-full flex justify-center items-center'>
          <Image src={userIcon} width={25} height={25} alt='arrow next' />
        </button>
      </section>
    </header>
  );
}
