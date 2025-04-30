import { client } from "./graphqlClient";

const query = `
  query CubeData($country: String!, $measure: String!) {
    cube_cube_M6Lh5is0FtqUhZ(
      where: {
        country: { _eq: $country },
        measure: { _eq: $measure }
      }
    ) {
      value
      year
    }
  }
`;

type CubeDataResponse = {
  cube_cube_M6Lh5is0FtqUhZ: { value: number; year: number }[];
};

export async function getCubeData(country: string, measure: string) {
  const variables = { country, measure };
  const data = await client.request<CubeDataResponse>(query, variables);
  return data.cube_cube_M6Lh5is0FtqUhZ;
}
