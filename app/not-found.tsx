import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="section aurora-bg">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h1 className="h1 gradient-text">Page not found</h1>
        <p className="mt-3 text-[#0F172A]/70">The page you’re looking for doesn’t exist or was moved.</p>
        <div className="mt-6">
          <Link href="/" className="btn-primary">Back to Home</Link>
        </div>
      </div>
    </main>
  )
}


