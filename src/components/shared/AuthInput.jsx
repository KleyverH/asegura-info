export default function AuthInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = true,
  autoComplete,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-gris/70"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-gris/20 bg-blanco px-3 py-2 text-sm text-gris placeholder-gris/50 outline-none transition-colors focus:border-vinotinto focus:ring-1 focus:ring-vinotinto/30"
      />
    </div>
  );
}