import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className='flex flex-col gap-2 col-start-1 col-end-3 row-start-1 row-end-12'>
      <section className='bg-darkestGray flex flex-col gap-6 p-6 rounded-md font-bold'>
        <Link
          href="/home"
        >
          Inicio
        </Link>

        <Link
          href="/search"
        >
          Buscar
        </Link>
      </section>

      <section className='flex-1 bg-darkestGray p-6 rounded-md'>
        <div className='flex flex-col gap-6'>
          <div className='flex justify-between items-center' />

          <div className='flex justify-start gap-2 mb-2' />

        </div>

        <div className='overflow-visible overflow-y-hidden hover:overflow-y-auto'>
          <div className='flex justify-between p-3' />

          <div className='flex flex-col gap-2' />
        </div>
      </section>
    </aside>
  )
}
