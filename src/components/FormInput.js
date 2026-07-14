export default function FormInput({
  label,
  type = "text",
  placeholder,
  className = "",
  ...props
}) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2 text-[var(--color-black)]">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full h-12 px-4 rounded-lg border border-gray-300 outline-none focus:border-[var(--color-primary)] bg-white ${className}`}
        {...props}
      />
    </div>
  );
}
