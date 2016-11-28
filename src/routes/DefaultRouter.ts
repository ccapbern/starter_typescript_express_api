import {Router, Request, Response} from 'express';

export class DefaultRouter {
    private router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private sayHello(req: Request, res: Response): void {
        res.status(200).json({
            message: 'Hello, World!'
        });
    }

    private init(): void {
        this.router.get('/', this.sayHello);
    }

    public getRouter(): Router {
        return this.router;
    }
}

export default new DefaultRouter().getRouter();