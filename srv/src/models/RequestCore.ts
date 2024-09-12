import express from 'express';
import * as core from 'express-serve-static-core'

interface Query extends core.Query { }

interface Params extends core.ParamsDictionary { }

interface Request<
  ReqBody = any,
  ReqQuery = Query,
  URLParams extends Params = core.ParamsDictionary,
>
  extends express.Request<URLParams, any, ReqBody, ReqQuery> {
}

export { Request, Query, Params }