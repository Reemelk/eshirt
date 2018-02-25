import gql from 'graphql-tag';

export const AllJerseys = gql`
  query Jerseys {
    jerseys {
      image
      teamname
      price
      friendly_url
    }
  }
`;

export const JerseyDetails = gql`
  query Jersey($fdly_url: String!) {
    jersey(friendly_url: $fdly_url) {
      image
      teamname
      year
      price
      type
      color
      friendly_url
      stocks: [Stock]
    }
  }
`;

