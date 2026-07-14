import SectionHeading from "./SectionHeading";

export default function HeroSection() {
  return (
    <section className="py-8 bg-slate-50 overflow-hidden">
      <div className="container-fluid mx-auto px-4 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">

          {/* LEFT CONTENT */}
          <div className="p-8 lg:p-12">

            <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm mb-4">
              🚀 Complete IT Solutions
            </span>

            <SectionHeading
              centered={false}
              title="Build Modern Websites & Powerful Digital Solutions"
              twoColor={true}
              coloredWords={2}
              description={[
                "DeopersIndia helps startups, businesses, and enterprises establish a strong online presence through modern website development, custom software, mobile applications, and UI/UX design.",

                "From responsive business websites to scalable web applications, our team delivers fast, secure, and SEO-friendly solutions using the latest technologies.",

                "We focus on clean design, excellent user experience, high performance, and long-term business growth while providing reliable support after project delivery."
              ]}
            />

            {/* SERVICES */}
            <div className="grid grid-cols-2 gap-3 mt-6">

              <div className="bg-slate-100 rounded-lg p-3">
                🌐 Website Development
              </div>

              <div className="bg-slate-100 rounded-lg p-3">
                🛒 E-Commerce Solutions
              </div>

              <div className="bg-slate-100 rounded-lg p-3">
                📱 Mobile App Development
              </div>

              <div className="bg-slate-100 rounded-lg p-3">
                🎨 UI / UX Design
              </div>

              <div className="bg-slate-100 rounded-lg p-3">
                💻 Custom Software
              </div>

              <div className="bg-slate-100 rounded-lg p-3">
                📈 SEO & Digital Marketing
              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-8">

              <a
                href="#services"
                className="px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition"
              >
                Our Services
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
              >
                Get Free Quote
              </a>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-full min-h-[350px] lg:min-h-[600px] bg-gradient-to-br from-blue-50 to-orange-50">

            <img
              src="/images/banner.png"
              alt="DeopersIndia"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}