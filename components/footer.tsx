import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="KeyLimePie Logo" width={24} height={24} className="rounded-full" />
            <span className="text-sm text-muted-foreground">KeyLimePie · Método de Bisección</span>
          </div>

          <div className="text-sm text-muted-foreground">Sitio educativo sobre métodos numéricos</div>
        </div>
      </div>
    </footer>
  )
}
