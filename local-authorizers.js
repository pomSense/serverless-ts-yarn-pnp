const AWS = require('aws-sdk')

/**
 * This method is used only in sls offline to call the remote lambda authorizer
 * {@link https://www.serverless.com/plugins/serverless-offline-local-authorizers-plugin}
 * @param {*} event {@link APIGatewayRequestAuthorizerEvent}
 * @param {*} context {@link Context}
 * @returns
 */
const localAuthProxyFn = async (event) => {
  // Use this until your function is deployed. Once it is, set to false
  process.env.IS_TEST = true
  if (process.env.IS_TEST) {
    console.log('🔒 TEST Authorizer enabled 🔒')
    return {
      principalId: 'user|a1b2c3d4',
      policyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Action: 'execute-api:Invoke',
            Effect: 'Allow',
            Resource: event.methodArn
          }
        ]
      },
      context: {
        scope: 'user',
        userId: 'a1b2c3d4'
      }
    }
  }
  const lambda = new AWS.Lambda()
  const result = await lambda
    .invoke({
      FunctionName: process.env.AUTHORIZER_NAME,
      InvocationType: 'RequestResponse',
      Payload: JSON.stringify(event)
    })
    .promise()

  if (result.StatusCode === 200) {
    return JSON.parse(result.Payload)
  }

  throw Error('Authorizer error')
}

module.exports = { localAuthProxyFn }
