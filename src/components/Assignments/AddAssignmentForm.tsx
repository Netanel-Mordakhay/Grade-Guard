import { Button, MultiSelect, NativeSelect, TextInput } from "@mantine/core";
import InfoCard from "../InfoCard";
import { DateInput } from "@mantine/dates";
import { useState } from "react";

const AddAssignmentForm = () => {
  const [dateValue, setDateValue] = useState<Date | null>(null);

  return (
    <InfoCard title="Add A New Assignment">
      <TextInput
        label="Assignment name"
        placeholder="Assignment name"
        required
      />
      <DateInput
        value={dateValue}
        onChange={setDateValue}
        label="Due date"
        placeholder="Due date"
        mt="md"
      />
      <NativeSelect
        label="Input label"
        data={[
          "Not Assigned",
          "Quantom Physics",
          "Data Structures",
          "History 101",
        ]}
        mt="md"
      />
      <MultiSelect
        label="Share assignment with friends"
        data={["Eli Elkhazov", "עומר כחלון", "Johhnny Barda"]}
        nothingFoundMessage="None found"
        searchable
        mt="md"
      />
      <Button fullWidth mt="md">
        Add
      </Button>
    </InfoCard>
  );
};

export default AddAssignmentForm;
