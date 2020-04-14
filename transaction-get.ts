import { IRequest, IResponse } from './LambdaClass.interface'

export interface Request extends IRequest {
  id:string
}


export interface Response extends IResponse { }