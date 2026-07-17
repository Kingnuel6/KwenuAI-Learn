import Image from 'next/image'

const LOGO_ASPECT_RATIO = 949 / 298

export default function Logo({ height = 28 }: { height?: number }) {
  return (
    <Image
      src="/kwenuai-logo-black.png"
      alt="KwenuAI"
      width={Math.round(height * LOGO_ASPECT_RATIO)}
      height={height}
      priority
    />
  )
}
