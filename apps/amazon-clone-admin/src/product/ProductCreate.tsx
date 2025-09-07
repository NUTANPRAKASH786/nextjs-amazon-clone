import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { OrderTitle } from "../order/OrderTitle";
import { RatingTitle } from "../rating/RatingTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <div />
        <div />
        <NumberInput label="discountedprice" source="discountedprice" />
        <div />
        <ReferenceInput source="order.id" reference="Order" label="orders">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <ReferenceInput source="ratings.id" reference="Rating" label="ratings">
          <SelectInput optionText={RatingTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
        <NumberInput label="titleprice" source="titleprice" />
      </SimpleForm>
    </Create>
  );
};
