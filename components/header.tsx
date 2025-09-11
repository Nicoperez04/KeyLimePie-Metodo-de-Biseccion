"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
// import { Calculator, BookOpen, FlaskConical, HelpCircle, Cpu } from 'lucide-react'

const navigation = [
  { name: "Inicio", href: "/", icon: "🏠" },
  { name: "Teoría", href: "/teoria", icon: "📚" },
  { name: "SIMULACIÓN", href: "/practica", icon: "🧪" },
  { name: "Ejercicios", href: "/ejercicios", icon: "❓" },
  { name: "Tecnologías", href: "/tecnologias", icon: "💻" },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-border dark:border-white/20">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="KeyLimePie Logo"
            width={32}
            height={32}
            className="rounded-full"
            priority
          />
          <span className="font-bold text-lg">KeyLimePie | Método de Bisección</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

            return (
              <Button
                key={item.name}
                variant={isActive ? "default" : "ghost"}
                size="sm"
                asChild
                className={cn("transition-colors", isActive && "bg-primary text-primary-foreground")}
              >
                <Link href={item.href} className="flex items-center space-x-2">
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </Button>
            )
          })}
        </nav>

        <div className="flex items-center space-x-2"><ThemeToggle /></div>
      </div>
    </header>
  )
}
