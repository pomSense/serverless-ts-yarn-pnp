import { apiKeyEntity } from '../../infra/models/api-key-entity'

// Add your dynamoDB toolbox functions here:

export async function getAPIKeyEntity(apiKey: string) {
  // your save api key code here

  await apiKeyEntity.get({ apiKey: apiKey })
  return apiKey
}
