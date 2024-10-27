import { Button, MultiSelect, NativeSelect, TextInput } from "@mantine/core";
import InfoCard from "../InfoCard";
import { DateInput } from "@mantine/dates";
import { useState } from "react";
import { courses, friends } from "../../constants";

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
      <NativeSelect label="Input label" data={courses} mt="md" />
      <MultiSelect
        label="Share assignment with friends"
        data={friends.map((friend) => friend.name)}
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
