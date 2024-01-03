"use client"

import { gql, useQuery } from '@apollo/client';
import client from '@/services/apollo-client'
import { NextPage } from 'next';
import {GetFoods} from '@/interfaces/GetFoods';
import {GET_FOODS} from '@/services/queries';




const Home: NextPage = () => {
  const { loading, error, data } = useQuery<GetFoods>(GET_FOODS, { client });


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      {data?.foods.data.map(({ id, attributes }) => (
        <div key={id}>
          <h2>{attributes.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Home;
