export enum ISeverity {
  critical = 'CRITICAL',
  warning = 'WARNING',
}

export interface IErrorMessageBox {
  severity?: ISeverity
}
