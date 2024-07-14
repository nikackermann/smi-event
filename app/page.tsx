import Pricing from '@/components/pricing';
import Hero from '@/components/hero';
import ReactHookForm from '@/components/form';
import About from '@/components/about';
import FAQ from '@/components/faq';
import Footer from '@/components/footer';

export default function Component() {
    return (
        <div className="flex flex-col">
            <Hero />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-6xl mx-auto py-12 md:py-16 px-4 md:px-6">
                <ReactHookForm />
                <Pricing />
                <About />
                <FAQ />
                <Footer />
            </div>
        </div>
    );
}
