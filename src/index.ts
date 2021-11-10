import fetch from 'node-fetch'

class ServiceDoesNotExists extends Error {}
class InternalServerError extends Error {}

export class Shoutrrr {
  constructor(private url: string) {}

  async send(serviceName: string, message: string): Promise<void> {
    const response = await fetch(this.url + '/send', {
      method: 'POST',
      body: new URLSearchParams({ service: serviceName, message: message })
    })
    switch (response.status) {
      case 404:
        throw new ServiceDoesNotExists()
      case 500:
        throw new InternalServerError()
      case 204:
        return
      default:
        throw new Error(
          `Error while making shoutrrrd request: ${response.status} ${response.body}`
        )
    }
  }
}
