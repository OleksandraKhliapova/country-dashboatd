"use client";

import { createListCollection, Select } from "@chakra-ui/react";
import type { SelectValueChangeDetails } from "@chakra-ui/react";

type Country = {
  id: string;
  name: string;
  iso2: { value: string }[];
};

type CountrySelectorProps = {
  countries: Country[];
  onSelect: (countryName: Country["name"]) => void;
  selectedCountry: string;
};

export default function CountrySelector({
  countries,
  onSelect,
  selectedCountry,
}: CountrySelectorProps) {
  const value = selectedCountry ? [selectedCountry] : [];
  const collection = createListCollection({
    items: countries.map((country) => ({
      value: country.name,
      label: country.name,
    })),
  });

  return (
    <Select.Root
      onValueChange={(
        details: SelectValueChangeDetails<{ value: string; label: string }>,
      ) => onSelect(details.value[0])}
      my={4}
      value={value}
      collection={collection}
    >
      <Select.HiddenSelect />
      <Select.Label>Select a country</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select country" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
          <Select.ClearTrigger />
        </Select.IndicatorGroup>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          {collection.items.map((item) => (
            <Select.Item key={item.value} item={item}>
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  );
}
