"use client";

import { useEffect, useState } from "react";
import {
  VStack,
  Heading,
  Box,
  Spinner,
  Text,
  Container,
} from "@chakra-ui/react";
import CountrySelector from "./components/CountrySelector";
import MeasureSelector from "./components/MeasureSelector";
import { getCountries } from "../app/lib/getCountries";
import { getCubeData } from "../app/lib/getCubeData";
import { measures } from "./lib/measures";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Country {
  id: string;
  name: string;
  iso2: { value: string }[];
}

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedMeasure, setSelectedMeasure] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [cubeData, setCubeData] = useState<{ year: number; value: number }[]>(
    [],
  );
  const [cubeLoading, setCubeLoading] = useState(false);
  useEffect(() => {
    getCountries().then((data) => {
      setCountries(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (selectedCountry && selectedMeasure) {
      setCubeLoading(true);
      getCubeData(selectedCountry.toLowerCase(), selectedMeasure)
        .then((data) => {
          setCubeData(data);
        })
        .finally(() => {
          setCubeLoading(false);
        });
    }
  }, [selectedCountry, selectedMeasure]);

  const handleCountrySelect = (countryName: string) => {
    setSelectedCountry(countryName);
  };

  const handleMeasureSelect = (measureId: string) => {
    setSelectedMeasure(measureId);
  };

  if (loading) return <Spinner />;

  return (
    <>
      <Container maxW="container.md" py={10}>
        <VStack align="stretch">
          <Heading size="lg" textAlign="center">
            Country Dashboard
          </Heading>

          <Box maxW="800px" width="100%" mx="auto" mb={10}>
            <CountrySelector
              countries={countries}
              onSelect={handleCountrySelect}
              selectedCountry={selectedCountry ?? ""}
            />
            <MeasureSelector
              measures={measures}
              onSelect={handleMeasureSelect}
              selectedMeasure={selectedMeasure ?? ""}
            />
          </Box>

          {selectedCountry && selectedMeasure && (
            <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
              <Text fontWeight="bold" mb={2}>
                {selectedMeasure} in {selectedCountry} over time
              </Text>

              {cubeLoading ? (
                <Spinner />
              ) : cubeData.length > 0 ? (
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={cubeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#3182CE"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <Text>No data available.</Text>
              )}
            </Box>
          )}
        </VStack>
      </Container>
    </>
  );
}
