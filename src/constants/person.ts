export enum PaymentMethodsEnum {
  VISA_MASTERCARD_PAYMENT_METHOD = "1",
}

export const paymentMethods: Person.PaymentMethodsOption[] = [
  {
    value: PaymentMethodsEnum.VISA_MASTERCARD_PAYMENT_METHOD,
    key: "Via Mastercard",
  },
];
