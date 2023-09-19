import { getAPIKeyEntity } from '../repos/api-key-query-repo'
// Write your get api key code here

export async function getAPIKey() {
  const apiKey = await getAPIKeyEntity('123')
  return { apiKey }
}
