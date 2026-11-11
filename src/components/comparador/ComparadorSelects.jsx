import { Select } from "flowbite-react";

export default function ComparadorSelects({
  aseguradoras,
  selectedLeftId,
  selectedRightId,
  onChangeLeft,
  onChangeRight,
}) {
  return (
    <div className="grid grid-cols-1 gap-4 border-b border-gris/10 bg-sombra/50 px-5 py-4 md:grid-cols-2">
      <div>
        <label
          htmlFor="select-left"
          className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-gris/70"
        >
          Aseguradora (izquierda)
        </label>
        <Select
          id="select-left"
          value={selectedLeftId}
          onChange={(e) => onChangeLeft(e.target.value)}
          className="text-sm"
        >
          {aseguradoras.map((a) => (
            <option key={a.id} value={a.id}>
              {a.nombre}
            </option>
          ))}
        </Select>
      </div>

      <div>
        <label
          htmlFor="select-right"
          className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-gris/70"
        >
          Aseguradora (derecha)
        </label>
        <Select
          id="select-right"
          value={selectedRightId}
          onChange={(e) => onChangeRight(e.target.value)}
          className="text-sm"
        >
          {aseguradoras.map((a) => (
            <option key={a.id} value={a.id}>
              {a.nombre}
            </option>
          ))}
        </Select>
      </div>
    </div>
  );
}