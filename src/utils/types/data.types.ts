export interface optionTypes {
  //  dataProps
  label: string;
  value: string;
}

export interface managerTypes {
  userName: string;
  _id: string;
  email: string;
}

export interface tabListProps {
  id: string;
  label: string;
}

export interface occupationTypes {
  _id: string;
  name: string;
}

export enum projectTypes {
  Edit = 'Edit',
  Create = 'Create',
  View = 'View',
}
