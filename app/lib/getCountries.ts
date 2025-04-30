import { client } from "./graphqlClient";

const query = `
  query Countries {
    item(where: { class_id: { _eq: "Country" } }) {
      id
      name: name(path: "en")
      iso2: statements(where: { property_id: { _eq: "iso2" } }) {
        value: postgres_varchar
      }
    }
  }
`;

export async function getCountries() {
  const data = await client.request<{
    item: { id: string; name: string; iso2: { value: string }[] }[];
  }>(query);
  return data.item;
}
