import Storypanel from './storypanel';
import { useEffect } from 'react'
import  Link  from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-sans">
	    <Link href="/codemagic/chapter-1">Code Magic</Link>
	</main>
  );
}