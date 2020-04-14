import { IRequest, IResponse } from './LambdaClass.interface'

export interface IBraintreeSubscriptionGetRequest extends IRequest {
  subscriptionId:string
}


export interface IBraintreeSubscriptionGetResponse extends IResponse {
  thirdParty: {
    braintree: {
      subscription: {
        addOns:any[]
        balance:string
        billingDayOfMonth:number
        billingPeriodEndDate:string
        billingPeriodStartDate:string
        createdAt:string
        currentBillingCycle:number
        daysPastDue:number
        description:string
        descriptor: {
          name:string
          phone:string|number
          url:string
        }
        discounts:any[]
        failureCount:number
        firstBillingDate:string
        id:string
        merchantAccountId:string
        neverExpires:boolean
        nextBillingAmount:string
        nextBillingDate:string
        nextBillingPeriodAmount:string
        numberOfBillingCycles:number|null
        paidThroughDate:string
        paymentMethodToken:string
        planId:string
        price:string
        status:'Active'|'Canceled'|'Expired'|'PastDue'|'Pending'
        statusHistory:[]
        transactions:[]
        trialDuration:null
        trialDurationUnit:null
        trialPeriod:boolean
        updatedAt:string
      }
    }
  }
}