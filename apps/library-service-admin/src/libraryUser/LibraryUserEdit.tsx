import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const LibraryUserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="password" source="password" />
      </SimpleForm>
    </Edit>
  );
};
