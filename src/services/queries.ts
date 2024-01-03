import { gql, useQuery } from '@apollo/client';


export const GET_FOODS = gql`
  query GetFoods {
    foods {
      data {
        id
        attributes {
          name
        }
      }
      meta {
        pagination {
          page
          pageSize
          total
          pageCount
        }
      }
    }
  }
`;