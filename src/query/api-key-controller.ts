import { getAPIKey } from './api-key'

/**
 * Gets a user's own details
 *
 * @param id the user's UUID
 */
export const getAPIKeyController = async (input: {
  accountID: string
  metadata: { userID: string; workspaceID: string }
}): Promise<{ apiKey: string }> => {
  try {
    console.log('Inside of getAPIKeyController', input)
    console.log('⚠️ Code will ERROR if you do not have a dynamoDB table set up')
    const result = await getAPIKey()
    return {
      apiKey: result.apiKey
    }
  } catch (e) {
    console.log(e)
    return { apiKey: 'Error' }
  }
}
