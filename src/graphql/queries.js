/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWatchList = /* GraphQL */ `
  query GetWatchList($id: ID!) {
    getWatchList(id: $id) {
      id
      name
      contents
      createdAt
      updatedAt
    }
  }
`;
export const listWatchLists = /* GraphQL */ `
  query ListWatchLists(
    $filter: ModelWatchListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWatchLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        contents
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
