export default function ShortcutCardSkeleton() {
  return (
    <div className="w-1/4 h-16 bg-[#2a2a2a] rounded-md flex justify-between">
      <section className="bg-gradient-to-l from-[#363636] to-[#494949] w-1/6 h-full rounded-md animate-pulse" />
      <section className="w-full flex items-center p-4">
        <div className="w-full h-4 bg-gradient-to-l from-[#363636] to-[#494949] rounded-lg animate-pulse"  />
      </section>
    </div>
  )
}
