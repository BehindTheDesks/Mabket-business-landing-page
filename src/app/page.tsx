import BusinessGlanse from "../component/BusinessGlanse";
import FAQ from "../component/FAQ";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Hero from "../component/Hero";
import Review from "../component/Review";
import WaitlistForm from "../component/WaitlistForm";

export default function Page() {
  return (
    <div className="min-h-screen bg-[var(--color-platinum)] text-[var(--color-carbon-black)] font-sans">
      <Header />
      <main className="space-y-16 pb-24 sm:space-y-32">
        <Hero />
        <BusinessGlanse />

        {/* Mid-Page Waitlist CTA */}
        <section className="px-6 mx-auto w-full max-w-4xl flex flex-col items-center text-center">
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tighter mb-6 text-[var(--color-carbon-black)] leading-none">
            Ready to transform your <br className="hidden sm:block" /> 
            <span className="text-[var(--color-sapphire)]">Business</span>?
          </h2>
          <p className="text-xl sm:text-2xl font-medium opacity-80 mb-12 max-w-2xl">
            Don&apos;t get left behind. Join the exclusive waitlist and be the first to experience the future of business management.
          </p>
          <div className="w-full max-w-lg">
            <WaitlistForm />
          </div>
        </section>
        <Review />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
