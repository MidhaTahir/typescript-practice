function printCar(car: {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number;
}) {
  let str = `${car.make} ${car.model} (${car.year})`;
  car.chargeVoltage;

  if (typeof car.chargeVoltage !== "undefined")
    str += `// ${car.chargeVoltage}v`;

  console.log(str);
}

printCar({
  make: "Tesla",
  model: "Model 3",
  year: 2020,
  chargeVoltage: 220,
});
