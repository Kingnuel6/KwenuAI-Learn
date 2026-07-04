export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <span
      className="flex items-center justify-center rounded-lg bg-brand-purple font-heading font-bold text-white"
      style={{ width: size, height: size, fontSize: size * 0.55 }}
    >
      K
    </span>
  )
}
