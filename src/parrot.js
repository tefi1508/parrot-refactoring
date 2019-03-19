

export class Parrot {
    constructor(numberOfCoconuts, voltage, isNailed) {
        this.loadFactor = 9;
        this.baseSpeed = 12;
        this.numberOfCoconuts = numberOfCoconuts;
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    getSpeed() {
        throw new Error("Should be unreachable");
    }

}

export class African extends Parrot{
    constructor(numberOfCoconuts, voltage, isNailed) {
        super(numberOfCoconuts, voltage, isNailed);
    }

    getSpeed() {
        return Math.max(0, this.baseSpeed - this.loadFactor * this.numberOfCoconuts);
    }
}

export class Norwegian_Blue extends Parrot{
    constructor(numberOfCoconuts, voltage, isNailed) {
        super(numberOfCoconuts, voltage, isNailed);
    }

    getSpeed() {
        return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
    }
    getBaseSpeedWithVoltage(voltage) {
        return Math.min(24, voltage * this.baseSpeed);
    }
}

export class European extends Parrot{
    constructor(numberOfCoconuts, voltage, isNailed) {
        super(numberOfCoconuts, voltage, isNailed);
    }

    getSpeed() {
        return this.baseSpeed;
    }
}