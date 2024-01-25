export default function LibraryCardSkeleton() {
  return (
    <div className="flex justify-normal items-center gap-4">
      <div className="bg-gradient-to-b from-[#2c2c2c] via-[#2b2b2b] to-[#2a2a2a] w-12 h-12 rounded-md" />

      <div className="flex flex-col gap-1">
        <div className="bg-[#2c2c2c] h-4 w-36 rounded-md" />
        <div className="bg-[#2c2c2c] h-4 w-28 rounded-md" />
      </div>
    </div>
  )
}

