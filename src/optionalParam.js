function printCar(car) {
    var str = "".concat(car.make, " ").concat(car.model, " (").concat(car.year, ")");
    car.chargeVoltage;
    if (typeof car.chargeVoltage !== "undefined")
        str += "// ".concat(car.chargeVoltage, "v");
    console.log(str);
}
printCar({
    make: "Tesla",
    model: "Model 3",
    year: 2020,
    chargeVoltage: 220
});
