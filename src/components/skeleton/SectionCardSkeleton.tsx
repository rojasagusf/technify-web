import CardSkeleton from './CardSkeleton';

export default function SectionCardSkeleton() {
  return(
    <section>
      <div className='bg-gradient-to-l from-[#363636] to-[#494949] w-1/5 h-6 rounded-lg mb-4 animate-pulse' />
      <div className='flex gap-6'>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </section>
  )
}
