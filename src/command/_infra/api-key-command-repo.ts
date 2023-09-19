import { apiKeyEntity } from '../../infra/models/api-key-entity'

// Add your dynamoDB toolbox functions here:

export async function saveAPIKey(apiKey: string) {
  // your save api key code here

  await apiKeyEntity.put({ apiKey: apiKey })
  return apiKey
}
