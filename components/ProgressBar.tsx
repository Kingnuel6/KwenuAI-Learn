export default function ProgressBar({
  completed,
  total,
}: {
  completed: number
  total: number
}) {
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <div>
      <div className="mb-2 flex items-center justify-between font-body text-xs text-white/50">
        <span>
          {completed} / {total} lessons complete
        </span>
        <span>{percent}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-dark-border">
        <div
          className="h-full rounded-full bg-brand-purple transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
