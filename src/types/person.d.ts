declare namespace Person {
  export type Person = {
    id: string;
    name: string;
    email: string;
    payment_method: string;
    total_donated_amount: string;
    pledge_amount: string;
    number_of_campaign: string;
    last_donated: string;
    created_at: string;
    updated_at: string;
    label_id: string;
    label_name: string;
    text_color: string;
    background_color: string;
  };

  export type CreatePerson = {
    name: string;
    email: string;
    payment_method: string;
    label_id: string;
  };

  export type PeopleOfCampaign = {
    id: string;
    name: string;
    email: string;
    payment_method: string;
    total_donated_amount: string;
    pledge_amount: string;
    last_donated: string;
    created_at: string;
    updated_at: string;
    status: string;
    target_high: string;
    target_low: string;
    note: string;
    description: string;
    label_id?: string;
    label_name?: string;
    text_color?: string;
    background_color?: string;
  };

  export type ListPeopleParams = {
    page?: string;
  };

  export type UpdateLabelPersonOfCampaign = {
    person_id: string;
    campaign_id: string;
    label_id: string;
  };

  export type UpdateLabelOfPerson = {
    label_id?: string;
  };

  export type UpdateStatus = {
    person_id: string;
    campaign_id: string;
    status: string;
  };

  export type StatusOption = {
    key: string;
    value: string;
    background_color?: string;
    text_color?: string;
  };

  export type PaymentMethodsOption = {
    key: string;
    value: string;
  };
}
