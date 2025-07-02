// types/express/index.d.ts
import { UserPayload } from '../../types/UserPayload';

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}
