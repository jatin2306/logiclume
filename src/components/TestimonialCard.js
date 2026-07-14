import { FaStar } from 'react-icons/fa';

export default function TestimonialCard({ name, designation, company, image, text, rating = 5 }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" size={16} />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 mb-6 italic">"{text}"</p>

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] flex items-center justify-center text-white font-bold text-lg">
          {image ? (
            <img src={image} alt={name} className="w-full h-full rounded-full object-cover" />
          ) : (
            name.charAt(0)
          )}
        </div>
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{designation}</p>
          {company && <p className="text-xs text-gray-500">{company}</p>}
        </div>
      </div>
    </div>
  );
}
