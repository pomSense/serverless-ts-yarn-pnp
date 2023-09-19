export const Schema = `

  input AcountIDInput{
    accountID: String!
  }


  type Mutation {
    createAPIKey(input: AcountIDInput!): APIKey
  }

  type APIKey {
    apiKey: String
  }

  type APIKeyResponse {
    apiKey: String
  }
  
  type Query {
    getAPIKey(input: AcountIDInput!): APIKeyResponse
  }
  `
