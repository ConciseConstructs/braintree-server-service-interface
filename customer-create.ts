import { IRequest, IResponse } from './LambdaClass.interface'

export interface IBraintreeCustomerCreateRequest extends IRequest {
  firstName:string
  lastName:string
  email:string
}


export interface IBraintreeCustomerCreateResponse extends IResponse {
  thirdParty: {
    braintree: {
      success:boolean
      customer: {
        addresses:any[]
        company:null|string
        createdAt:string
        creditCards:any[]
        customFields:string
        email:string
        fax:null
        firstName:string
        globalId:string
        id:string
        lastName:string
        merchantId:string
        paymentMethods:any[]
        phone:null
        updatedAt:string
        website:null
      }
    }
  }
}