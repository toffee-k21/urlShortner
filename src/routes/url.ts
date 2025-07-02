// src/routes/urlRouter.ts
import express from 'express';

import {
  HandlePostUrl,
  // HandleGetReq,
  showAllurls,
} from '../controllers/url';

const urlRouter = express.Router();

urlRouter.post('/', HandlePostUrl);
urlRouter.get('/', showAllurls);
// urlRouter.get('/:shortId', HandleGetReq);

export default urlRouter;
