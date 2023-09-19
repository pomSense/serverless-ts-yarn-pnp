import { DocumentNode, GraphQLScalarType } from 'graphql'

import { createAPIKeyController } from '../../command/auth/auth-controller'
import { Context } from '../server'
import { getAPIKeyController } from '../../query/api-key-controller'

type Input<T> = { input: T }

/**
 * @resolvers are a thin layer which lead to a controller
 */
export const resolvers = {
  Query: {
    getAPIKey: (_: DocumentNode, { input }: Input<{ accountID: string }>, context: Context) => {
      const metadata = context.metadata
      return getAPIKeyController({ ...input, metadata })
    }
  },
  // Upload: GraphQLUpload as any,
  Mutation: {
    createAPIKey: (_: DocumentNode, { input }: Input<{ accountID: string }>, context: Context) => {
      const metadata = context.metadata
      return createAPIKeyController({ ...input, metadata })
    }
  }
}
