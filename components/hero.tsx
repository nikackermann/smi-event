/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3saR25qhRF3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export default function Component() {
    return (
        <div>
            <div className="flex items-center justify-center gap-4 bg-white px-6 shadow">
                <div className="flex items-center gap-6">
                    <img
                        src="/logo-blue.svg"
                        width="130"
                        height="50"
                        alt="Company Logo"
                        className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center -mt-1"
                    />
                    <span className="text-xs font-medium whitespace-nowrap">
                        In Collaboration With
                    </span>
                </div>
                <img
                    src="/smi-logo.png"
                    width="150"
                    height="20"
                    alt="Partner Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
            </div>
            <section className="hero-section w-full py-12 md:py-16 lg:py-24 text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0 hidden lg:block">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover w-full h-full"
                    >
                        <source src="/hero-video.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-[#15458E] bg-opacity-70"></div>
                </div>
                <div className="container flex flex-col items-center gap-6 px-4 md:px-6 relative z-10">
                    <div className="space-y-10 text-center">
                        <div className="inline-block text-electricGreen font-bold px-3 py-1 text-md">
                            August 28th 9 AM - 5 PM - WAFIOS Midwest Technical
                            Center, Mokena, IL
                        </div>
                        <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                            Spring End Grinding Training Course
                        </h1>
                        <p className="mx-auto max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Join our Spring End Grinding Training Course to gain
                            in-depth knowledge on machinery, process,
                            technology, automation, and software. Enhance your
                            understanding of the grinding process, optimize
                            costs, and receive a certificate of completion with
                            a provided lunch.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
