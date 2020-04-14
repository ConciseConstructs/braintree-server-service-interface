import { IRequest, IResponse } from './LambdaClass.interface'

export interface IBraintreeSubscriptionCreateRequest extends IRequest {
  paymentMethodToken:string
}


export interface IBraintreeSubscriptionCreateResponse extends IResponse {
  thirdParty: {
    braintree: {
      subscriptionData:string
    }
  }
}