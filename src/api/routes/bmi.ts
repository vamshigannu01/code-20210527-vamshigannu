import express, {NextFunction, Request, Response, Router} from 'express';
import {Container} from 'typedi';
import BMICalcService from '../../services/bmi';
import {IBmi} from '../../interfaces/IBmi';
import Logger from '../../loaders/logger';
import {celebrate, Joi} from 'celebrate';
const router: Router = express.Router();

router.post(
    '/calculate',
    celebrate({
        body: Joi.array().items(Joi.object({
            Gender: Joi.string().required(),
            HeightCm: Joi.number().required(),
            WeightKg: Joi.number().required()
        }))
    }),
    async (req: Request, res: Response, next: NextFunction) => {
        Logger.debug('Calling Calculate endpoint with body: %o', req.body);
        try {
            const bmiCalcService = Container.get(BMICalcService);
            const {bmiOutput} = await bmiCalcService.calculate(req.body as IBmi[]);
            return res.status(200).json({bmiOutput});
        } catch (e) {
            Logger.error('🔥 error: %o', e);
            return next(e);
        }
    },
);


module.exports = router;
