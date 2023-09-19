import { saveAPIKey } from '../_infra/api-key-command-repo'

// Add your create API Key here and this will be used in the resolvers to set up your graphql api

export async function createAPIKeyController(input: {
  accountID: string
  metadata: { userID: string; workspaceID: string }
}): Promise<{ apiKey: string }> {
  try {
    // your api key creation code here
    console.log('Inside of createAPIKeyController', input)
    console.log('⚠️ Code will ERROR if you do not have a dynamoDB table set up')
    const apiKey = `1234`
    await saveAPIKey(apiKey)

    return { apiKey: apiKey }
  } catch (e) {
    console.log(e)
    return { apiKey: 'Error' }
  }
}
