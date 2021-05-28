import BMICalcService from './bmi';
import { expect } from 'chai';
import 'mocha';

describe('Create BMI Info', () => {

    it('should create BMI Info', () => {
        let bmiCalcService : BMICalcService=new BMICalcService();
        let person={
            HeightCm: 200,
            WeightKg: 70,
            Gender: 'Male'
        }
        let bmiInfo=bmiCalcService.createBMIInfo(person)
        expect(person.Gender).to.equal(bmiInfo.gender)
    });

    it('Calculate BMI', () => {
        let bmiCalcService : BMICalcService=new BMICalcService();
        let person={
            HeightCm: 171,
            WeightKg: 96,
            Gender: 'Male'
        }
        let bmi=bmiCalcService.calculateBMI(person);
        expect(bmi).to.equal('32.83')
    });

    it('should create BMI Info', () => {
        let bmiCalcService : BMICalcService=new BMICalcService();
        let person={
            HeightCm: 200,
            WeightKg: 70,
            Gender: 'Male'
        }
        let bmiInfo=bmiCalcService.createBMIInfo(person)
        expect(person.HeightCm).to.equal(bmiInfo.height)
    });

    it('should create BMI Info', () => {
        let bmiCalcService : BMICalcService=new BMICalcService();
        let person={
            HeightCm: 200,
            WeightKg: 70,
            Gender: 'Male'
        }
        let bmiInfo=bmiCalcService.createBMIInfo(person)
        expect(person.WeightKg).to.equal(bmiInfo.weight)
    });

});
