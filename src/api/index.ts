import { Router } from 'express';
import bmi from './routes/bmi';

// guaranteed to get dependencies
export default () => {
	const app = Router();
	bmi(app);
	return app
}
