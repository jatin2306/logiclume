export default function FormSelect({
  label,
  options = [],
  placeholder,
  className = "",
  ...props
}) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2 text-[var(--color-black)]">
        {label}
      </label>
      <select
        className={`w-full h-12 px-4 rounded-lg border border-gray-300 outline-none focus:border-[var(--color-primary)] bg-white ${className}`}
        {...props}
      >
        <option key="placeholder" value="">{placeholder || "Select an option"}</option>
        {options && options
          .filter(option => option && (typeof option === 'string' ? option.trim() : option.value?.trim()))
          .map((option) => {
            // Handle both string and object options
            const value = typeof option === 'string' ? option : option.value;
            const label = typeof option === 'string' ? option : option.label;
            return (
              <option key={`opt-${value}`} value={value}>
                {label}
              </option>
            );
          })}
      </select>
    </div>
  );
}
