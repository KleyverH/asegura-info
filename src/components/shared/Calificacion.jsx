import { Rating, RatingStar } from "flowbite-react";

export function Calificacion({value}) {
  const numValue = typeof value === "string" ? parseFloat(value.replace(",", "."))  : value;
  return (
    <Rating>
      <RatingStar filled={numValue >= 1}  />
      <RatingStar filled={numValue >= 2} />
      <RatingStar filled={numValue >= 3} />
      <RatingStar filled={numValue >= 4} />
      <RatingStar filled={numValue >= 5} />
    </Rating>
  );
}