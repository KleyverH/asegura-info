import { TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";

export function FiltroAseguradora({
  searchTerm,
  onSearchTermChange,
  selectedType,
  onSelectedTypeChange,
  tiposSeguro,
}) {
  return (
    <div className="space-y-6 rounded-none border border-gray-200 bg-white p-6 shadow-sm">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Directorio de aseguradoras
        </h1>

        <p className="mt-1 text-sm text-gray-600">
          Encuentre y compare aseguradoras y sus productos disponibles.
        </p>
      </div>

      <div>
        <label
          htmlFor="search"
          className="mb-1 block text-xs font-semibold text-gray-600"
        >
          Aseguradora
        </label>

        <TextInput
          id="search"
          type="text"
          icon={HiSearch}
          placeholder="Buscar aseguradora o ramo..."
          value={searchTerm}
          onChange={(event) => onSearchTermChange(event.target.value)}
        />
      </div>

      <div className="flex flex-wrap items-center gap-2 border-t border-gray-100 pt-4">
        <span className="mr-2 text-xs font-semibold text-gray-500">
          Tipo de seguro:
        </span>

        {tiposSeguro.map((tipo) => (
          <button
            key={tipo}
            type="button"
            onClick={() => onSelectedTypeChange(tipo)}
            className={`rounded-none border px-3 py-1 text-xs font-semibold transition-colors duration-300 ${
              selectedType === tipo
                ? "border-vinotinto bg-vinotinto text-white"
                : "border-gray-200 bg-white text-gray-600 hover:border-vinotinto/40 hover:text-vinotinto"
            }`}
          >
            {tipo}
          </button>
        ))}
      </div>
    </div>
  );
}