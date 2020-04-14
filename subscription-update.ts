import { IRequest, IResponse } from './LambdaClass.interface'

export interface Request extends IRequest {
  paymentMethodToken:string
  subscriptionId:string
}


export interface Response extends IResponse { }