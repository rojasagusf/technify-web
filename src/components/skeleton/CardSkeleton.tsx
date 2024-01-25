export default function CardSkeleton() {
  return(
    <div className="bg-[#1e1e1e] flex flex-col w-48 h-64 p-4 rounded-md gap-4">
      <div className="bg-gradient-to-l from-[#363636] to-[#494949] w-full h-full rounded-md animate-pulse" />
      <section className="flex flex-col gap-2">
        <div className="w-full h-4 bg-gradient-to-l from-[#363636] to-[#494949] rounded-lg animate-pulse" />
        <div className="w-2/4 h-4 bg-gradient-to-l from-[#363636] to-[#494949] rounded-lg animate-pulse" />
      </section>
    </div>
  )
}
