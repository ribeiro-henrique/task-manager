import type { Metadata } from 'next';
import { Dosis } from 'next/font/google';
import Image from 'next/image';
import './globals.css';

const dosis = Dosis({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gerenciador de Tarefas',
  description: 'Controle seus hábitos de forma simples!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dosis.className} flex items-center flex-col mt-10 bg-neutral-900`}>
        <Image src='/images/logo.svg' width={200} height={200} />
        {children}</body>
    </html>
  )
}
