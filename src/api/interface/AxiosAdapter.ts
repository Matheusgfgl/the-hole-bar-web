import { theHoleApi } from '@/config/axios/index'
import type HttpClient from './HttpClient'

export default class AxiosAdapter implements HttpClient {
  async get (url: string): Promise<object> {
    const response = await theHoleApi({
      url,
      method: 'GET',
    })

    return response.data
  }

  async post (url: string, data: unknown): Promise<unknown> {
    const response = await theHoleApi({
      url,
      method: 'POST',
      data,
    })

    return response.data
  }

  async put (url: string, data: unknown) {
    await theHoleApi({
      url,
      method: 'PUT',
      data,
    })
  }
}
