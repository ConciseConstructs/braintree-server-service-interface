import { IRequest, IResponse } from './LambdaClass.interface'

export interface IBraintreeCustomerGetRequest extends IRequest {
  customerId:string
}

export interface IBraintreeCustomerCreateResponse extends IResponse {
  thirdParty: {
    braintree: {
      success:boolean
      customer:any
    }
  }
}