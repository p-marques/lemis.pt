export interface IEmailJsObject {
  service_id: string;
  template_id: string;
  user_id: string;
  template_params: IEmailJsParams;
}

export interface IEmailJsParams {
  visitorName: string;
  visitorEmail: string;
  visitorMsg: string;
}
