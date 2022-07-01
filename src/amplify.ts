const config = {
  aws_appsync_graphqlEndpoint:
    'https://qcg7pu37czf4bdhrgye26xt7s4.appsync-api.ap-northeast-2.amazonaws.com/graphql',
  aws_appsync_region: 'ap-northeast-2',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: 'da2-c7x4a455r5dpvm7tqe3abbq5ky',
};

const channel = 'etherNewBlock';

const subscribeDoc = `
  subscription Subscribe($name: String!){
    subscribe(name: $name){
      data
      name
    }
  }
`;

export default {
  config,
  subscribeDoc,
  channel,
};
