export default function SkeletonCard() {
  return (
    <div
      className="rounded-lg border overflow-hidden"
      style={{ borderColor: 'var(--color-light)', backgroundColor: 'var(--color-surface)' }}
    >
      {/* Image area */}
      <div className="skeleton h-52 w-full" />

      <div className="p-4 space-y-3">
        {/* Product name */}
        <div className="skeleton h-5 w-3/4 rounded" />
        {/* Description */}
        <div className="skeleton h-4 w-full rounded" />
        <div className="skeleton h-4 w-5/6 rounded" />

        {/* Pricing label */}
        <div className="skeleton h-3 w-1/3 rounded mt-4" />

        {/* Pricing rows */}
        <div className="space-y-2 mt-2">
          <div className="flex justify-between">
            <div className="skeleton h-4 w-1/3 rounded" />
            <div className="skeleton h-4 w-1/4 rounded" />
          </div>
          <div className="flex justify-between">
            <div className="skeleton h-4 w-1/3 rounded" />
            <div className="skeleton h-4 w-1/4 rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}
