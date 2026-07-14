export default function PageBanner({ badge, title, description, backgroundImage = "/images/banner-bg.jpg" }) {
  return (
    <section 
      className="py-16 md:py-28 px-6 md:px-12 mt-17 sm:mt-16 lg:mt-20 bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${backgroundImage}')`,
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          {badge && (
            <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-semibold mb-4 backdrop-blur-sm">
              {badge}
            </span>
          )}

          {title && (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              {title}
            </h1>
          )}

          {description && (
            <p className="text-base md:text-lg text-gray-100 max-w-4xl mx-auto drop-shadow-md">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
