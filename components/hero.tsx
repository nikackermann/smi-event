/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3saR25qhRF3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export default function Component() {
  return (
    <div>
      <div className="flex items-center justify-center gap-4 md:gap-6 bg-white px-4 md:px-6 py-3 md:py-4 shadow-sm border-b border-border/50">
        <div className="flex items-center gap-4 md:gap-6">
          <img
            src="/logo-blue.svg"
            width="130"
            height="50"
            alt="WAFIOS Logo"
            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center w-20 md:w-32"
          />
          <span className="text-xs font-medium text-muted-foreground whitespace-nowrap tracking-wide uppercase">
            In Collaboration With
          </span>
        </div>
        <img
          src="/nesma-new-logo.png"
          width="150"
          height="20"
          alt="NESMA Logo"
          className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center w-24 md:w-36"
        />
      </div>
      <section className="w-full py-16 md:py-20 lg:py-24 text-white relative overflow-hidden min-h-[500px] md:min-h-[600px] bg-gradient-to-br from-brand-600 to-brand-800">
        {/* Video background with proper fallback */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            <source src="/hero-video-compressed.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-600/70 to-brand-800/70"></div>
        </div>
        <div className="container flex flex-col items-center justify-center gap-6 md:gap-8 px-4 md:px-6 relative z-10 max-w-5xl mx-auto h-full">
          <div className="space-y-6 md:space-y-8 text-center">
            <div className="inline-flex items-center px-3 md:px-4 py-2 rounded-full bg-electricGreen/10 border border-electricGreen/20 backdrop-blur-sm">
              <span className="text-electricGreen font-semibold text-xs md:text-sm tracking-wide">
                September 23rd • 9 AM - 5 PM • WAFIOS Machinery Corporation,
                Branford, CT
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
              Spring End Grinding
              <span className="block text-electricGreen">Training Course</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base md:text-lg lg:text-xl text-white/90 leading-relaxed text-pretty">
              Join our comprehensive Spring End Grinding Training Course to gain
              in-depth knowledge on machinery, processes, technology,
              automation, and software. Enhance your understanding, optimize
              costs, and receive a certificate of completion with provided
              lunch.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-2 md:pt-4">
              <a
                href="#registration"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 bg-electricGreen hover:bg-electricGreen/90 text-brand-900 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Register Now
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/20 backdrop-blur-sm transition-all duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
