import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {relayStylePagination} from '@apollo/client/utilities';
import {API_BASEURL} from '../data/baseurl';

const httpLink = createHttpLink({
  uri: API_BASEURL + '/graphql',
});

const authLink = setContext(async (_, {headers}) => {
  const token = await AsyncStorage.getItem('TOKEN');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        projects: relayStylePagination(),
      },
    },
  },
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});
