import {Inject, Service} from 'typedi';
import {IBmi, IBmiInfo, IBmiOutput} from "../interfaces/IBmi";

@Service()
export default // @ts-ignore
class BMICalcService {
    numberOfOWPersons=0;
    constructor(@Inject('logger') private logger) {
    }

    public async calculate(bmiInputs: IBmi[]): Promise<{ bmiOutput: IBmiOutput }> {
        try {
            let bmiOutput: IBmiOutput = {};
            Array.prototype.forEach.call( bmiInputs,person=>{
                let bmi = this.calculateBMI(person);
                let bmiInfo: IBmiInfo = {};
                bmiInfo.height = person.HeightCm;
                bmiInfo.weight = person.WeightKg;
                bmiInfo.gender = person.Gender;
                this.deriveBMICategoryAndHealthRisk(bmi, bmiInfo);
                if (Array.isArray(bmiOutput.bmiInfo)) {
                    bmiOutput.bmiInfo.push(bmiInfo);
                } else {
                    bmiOutput.bmiInfo = [bmiInfo];
                }
            });
            bmiOutput.numberOfOWPersons=this.numberOfOWPersons;
            return {bmiOutput};
        } catch (e) {
            throw e;
        }
    }

    public calculateBMI(person) {
        var height = person.HeightCm / 100;
        var weight = person.WeightKg;
        var bmi = (weight / (height * height)).toFixed(2);
        return bmi;
    }

    deriveBMICategoryAndHealthRisk(bmi, bmiInfo) {
        if (bmi <= 18.4) {
            bmiInfo.bmiCategory = 'Underweight';
            bmiInfo.healthRisk = 'Malnutrition risk';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiInfo.bmiCategory = 'Normal weight';
            bmiInfo.healthRisk = 'Low risk';
        } else if (bmi >= 25 && bmi <= 29.9) {
            bmiInfo.bmiCategory = 'Overweight';
            bmiInfo.healthRisk = 'Enhanced risk';
            this.numberOfOWPersons = this.numberOfOWPersons + 1;
        } else if (bmi >= 30 && bmi <= 34.9) {
            bmiInfo.bmiCategory = 'Moderately obese';
            bmiInfo.healthRisk = 'Medium risk';
        } else if (bmi >= 35 && bmi <= 39.9) {
            bmiInfo.bmiCategory = 'Severely obese';
            bmiInfo.healthRisk = 'High risk';
        } else if (bmi >= 40) {
            bmiInfo.bmiCategory = 'Very severely obese';
            bmiInfo.healthRisk = 'Very high risk';
        }
    }
}
