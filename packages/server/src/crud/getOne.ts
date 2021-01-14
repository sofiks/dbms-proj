import Boom from '@hapi/boom';
import { RequestHandler } from 'express';
import { Controller } from '../controllers/controller';

export const getOne = (ctrl: typeof Controller): RequestHandler => async (req, res, next) => {
    try {
        const record = await ctrl.doGetOne({ where: { id: req.params.id } });

        if (!record) {
            return next(Boom.notFound('Record not found'));
        }
        res.jsongo(record);
    } catch (error) {
        next(error);
    }
};
