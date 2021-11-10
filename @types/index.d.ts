export class ServiceDoesNotExists extends Error {}
export class InternalServerError extends Error {}

export class Shoutrrr {
  constructor(url: string)
  send(serviceName: string, message: string): Promise<void>
}
