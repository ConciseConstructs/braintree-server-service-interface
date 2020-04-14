import { IRequest, IResponse } from './LambdaClass.interface'

export interface IBraintreeNonceCreateRequest extends IRequest {
  customerId:string
}


export interface IBraintreeNonceCreateResponse extends IResponse {
  thirdParty: {
    braintree: {
      clientToken:string
    }
  }
}