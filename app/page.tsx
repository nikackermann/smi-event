import Pricing from "@/components/pricing";
import Hero from "@/components/hero";
import ReactHookForm from "@/components/form";
import About from "@/components/about";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <main className="flex-1">
        {/* Registration and Pricing Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Registration Form - Takes up more space on desktop */}
              <div id="registration" className="lg:col-span-3">
                <ReactHookForm />
              </div>
              {/* Pricing - More compact on desktop */}
              <div className="lg:col-span-2">
                <Pricing />
              </div>
            </div>
          </div>
        </section>

        {/* About and FAQ Section - Wider layout for desktop */}
        <section id="about" className="py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="space-y-16 md:space-y-20 lg:space-y-24">
              <About />
              <FAQ />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
