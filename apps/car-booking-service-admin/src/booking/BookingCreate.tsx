import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { CarTitle } from "../car/CarTitle";
import { UserTitle } from "../user/UserTitle";

export const BookingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="car.id" reference="Car" label="car">
          <SelectInput optionText={CarTitle} />
        </ReferenceInput>
        <DateTimeInput label="endDate" source="endDate" />
        <DateTimeInput label="startDate" source="startDate" />
        <NumberInput label="totalPrice" source="totalPrice" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
