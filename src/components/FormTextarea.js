export default function FormTextarea({
  label,
  placeholder,
  rows = 5,
  className = "",
  ...props
}) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2 text-[var(--color-black)]">
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        rows={rows}
        className={`w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-[var(--color-primary)] bg-white resize-none ${className}`}
        {...props}
      />
    </div>
  );
}
