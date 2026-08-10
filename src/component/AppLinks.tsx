import React from 'react'
import Link from "next/link";
function AppLinks() {
  return (
    <>
    {/* CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 mt-2 mb-16 z-20 relative pt-2">
          <Link href="https://apps.apple.com/ng/app/mabket/id6785292328" target="_blank" rel="noopener noreferrer">
            <button className="flex md:text-2xl lg:text-3xl items-center gap-3 rounded-full bg-[var(--color-sapphire)] px-8 py-4 font-display font-bold text-[var(--color-carbon-black)] brutalist-shadow border-2 border-[var(--color-carbon-black)] transition-transform hover:-translate-y-1 active:translate-y-1">
              <img src="/image/Vector.png" alt="" className="h-5 w-5" aria-hidden="true" />
                Get on iOS
            </button>
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.mabketbusiness.mabketvendor" target="_blank" rel="noopener noreferrer">
            <button className="flex md:text-2xl lg:text-3xl items-center gap-3 rounded-full bg-white px-8 py-4 font-display font-bold text-[var(--color-carbon-black)] brutalist-shadow border-2 border-[var(--color-carbon-black)] transition-transform hover:-translate-y-1 active:translate-y-1">
              <img src="/image/Vector1.png" alt="" className="h-5 w-5" aria-hidden="true" />
              Get on Android
            </button>
          </Link>
        </div>
    </>
  )
}

export default AppLinks
