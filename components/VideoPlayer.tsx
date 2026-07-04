export default function VideoPlayer({ youtubeId }: { youtubeId: string | null }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-dark-border bg-dark-card">
      {youtubeId ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
          title="Lesson video"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <p className="font-body text-white/50">
            Video coming soon. Check back shortly.
          </p>
        </div>
      )}
    </div>
  )
}
