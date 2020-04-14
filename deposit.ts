import { IRequest, IResponse } from './LambdaClass.interface'

export interface Request extends IRequest {
  accountId:string
  paymentMethodNonce:string
  amount:string
}


export interface Response extends IResponse { }