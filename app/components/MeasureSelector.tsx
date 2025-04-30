"use client";

import { createListCollection, Select } from "@chakra-ui/react";

interface Measure {
  id: string;
  label: string;
}

type MeasureSelectorProps = {
  measures: Measure[];
  onSelect: (measureId: string) => void;
  selectedMeasure: string;
};

export default function MeasureSelector({
  measures,
  onSelect,
  selectedMeasure,
}: MeasureSelectorProps) {
  const collection = createListCollection({
    items: measures.map((measure) => ({
      value: measure.id,
      label: measure.label,
    })),
  });
  const value = selectedMeasure ? [selectedMeasure] : [];
  return (
    <Select.Root
      onValueChange={(details) => onSelect(details.value[0])}
      collection={collection}
      value={value}
    >
      <Select.HiddenSelect />
      <Select.Label>Select a measure</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select measure" />
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
