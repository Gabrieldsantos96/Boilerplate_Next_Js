import { API, BaseAPI } from '@/configs/api'

class ExampleService {
  private readonly main

  constructor(instance: BaseAPI) {
    this.main = instance
  }

  async method() {
    return this.main.axios.get('/categories')
  }
}

export const service = new ExampleService(API)
