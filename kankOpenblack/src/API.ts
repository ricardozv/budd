/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBaresInput = {
  id?: string | null,
  nome: string,
  endereco: string,
  latitude?: number | null,
  longitude?: number | null,
  imagem_url?: string | null,
  horarioFuncionamento?: string | null,
  nomeResponsavel?: string | null,
  rgResponsavel?: string | null,
  cpfResponsavel?: string | null,
  pixResponsavel?: string | null,
  enderecoResponsavel?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelBaresConditionInput = {
  nome?: ModelStringInput | null,
  endereco?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  imagem_url?: ModelStringInput | null,
  horarioFuncionamento?: ModelStringInput | null,
  nomeResponsavel?: ModelStringInput | null,
  rgResponsavel?: ModelStringInput | null,
  cpfResponsavel?: ModelStringInput | null,
  pixResponsavel?: ModelStringInput | null,
  enderecoResponsavel?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBaresConditionInput | null > | null,
  or?: Array< ModelBaresConditionInput | null > | null,
  not?: ModelBaresConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Bares = {
  __typename: "Bares",
  id: string,
  nome: string,
  endereco: string,
  latitude?: number | null,
  longitude?: number | null,
  imagem_url?: string | null,
  horarioFuncionamento?: string | null,
  nomeResponsavel?: string | null,
  rgResponsavel?: string | null,
  cpfResponsavel?: string | null,
  pixResponsavel?: string | null,
  enderecoResponsavel?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateBaresInput = {
  id: string,
  nome?: string | null,
  endereco?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  imagem_url?: string | null,
  horarioFuncionamento?: string | null,
  nomeResponsavel?: string | null,
  rgResponsavel?: string | null,
  cpfResponsavel?: string | null,
  pixResponsavel?: string | null,
  enderecoResponsavel?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteBaresInput = {
  id: string,
};

export type CreateEventosInput = {
  id?: string | null,
  nome: string,
  endereco: string,
  latitude?: number | null,
  longitude?: number | null,
  image_url?: string | null,
  horarioFuncionamento?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelEventosConditionInput = {
  nome?: ModelStringInput | null,
  endereco?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  image_url?: ModelStringInput | null,
  horarioFuncionamento?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEventosConditionInput | null > | null,
  or?: Array< ModelEventosConditionInput | null > | null,
  not?: ModelEventosConditionInput | null,
};

export type Eventos = {
  __typename: "Eventos",
  id: string,
  nome: string,
  endereco: string,
  latitude?: number | null,
  longitude?: number | null,
  image_url?: string | null,
  horarioFuncionamento?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateEventosInput = {
  id: string,
  nome?: string | null,
  endereco?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  image_url?: string | null,
  horarioFuncionamento?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteEventosInput = {
  id: string,
};

export type ModelBaresFilterInput = {
  id?: ModelIDInput | null,
  nome?: ModelStringInput | null,
  endereco?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  imagem_url?: ModelStringInput | null,
  horarioFuncionamento?: ModelStringInput | null,
  nomeResponsavel?: ModelStringInput | null,
  rgResponsavel?: ModelStringInput | null,
  cpfResponsavel?: ModelStringInput | null,
  pixResponsavel?: ModelStringInput | null,
  enderecoResponsavel?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBaresFilterInput | null > | null,
  or?: Array< ModelBaresFilterInput | null > | null,
  not?: ModelBaresFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBaresConnection = {
  __typename: "ModelBaresConnection",
  items:  Array<Bares | null >,
  nextToken?: string | null,
};

export type ModelEventosFilterInput = {
  id?: ModelIDInput | null,
  nome?: ModelStringInput | null,
  endereco?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  image_url?: ModelStringInput | null,
  horarioFuncionamento?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEventosFilterInput | null > | null,
  or?: Array< ModelEventosFilterInput | null > | null,
  not?: ModelEventosFilterInput | null,
};

export type ModelEventosConnection = {
  __typename: "ModelEventosConnection",
  items:  Array<Eventos | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionBaresFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  nome?: ModelSubscriptionStringInput | null,
  endereco?: ModelSubscriptionStringInput | null,
  latitude?: ModelSubscriptionFloatInput | null,
  longitude?: ModelSubscriptionFloatInput | null,
  imagem_url?: ModelSubscriptionStringInput | null,
  horarioFuncionamento?: ModelSubscriptionStringInput | null,
  nomeResponsavel?: ModelSubscriptionStringInput | null,
  rgResponsavel?: ModelSubscriptionStringInput | null,
  cpfResponsavel?: ModelSubscriptionStringInput | null,
  pixResponsavel?: ModelSubscriptionStringInput | null,
  enderecoResponsavel?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBaresFilterInput | null > | null,
  or?: Array< ModelSubscriptionBaresFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionEventosFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  nome?: ModelSubscriptionStringInput | null,
  endereco?: ModelSubscriptionStringInput | null,
  latitude?: ModelSubscriptionFloatInput | null,
  longitude?: ModelSubscriptionFloatInput | null,
  image_url?: ModelSubscriptionStringInput | null,
  horarioFuncionamento?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEventosFilterInput | null > | null,
  or?: Array< ModelSubscriptionEventosFilterInput | null > | null,
};

export type CreateBaresMutationVariables = {
  input: CreateBaresInput,
  condition?: ModelBaresConditionInput | null,
};

export type CreateBaresMutation = {
  createBares?:  {
    __typename: "Bares",
    id: string,
    nome: string,
    endereco: string,
    latitude?: number | null,
    longitude?: number | null,
    imagem_url?: string | null,
    horarioFuncionamento?: string | null,
    nomeResponsavel?: string | null,
    rgResponsavel?: string | null,
    cpfResponsavel?: string | null,
    pixResponsavel?: string | null,
    enderecoResponsavel?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateBaresMutationVariables = {
  input: UpdateBaresInput,
  condition?: ModelBaresConditionInput | null,
};

export type UpdateBaresMutation = {
  updateBares?:  {
    __typename: "Bares",
    id: string,
    nome: string,
    endereco: string,
    latitude?: number | null,
    longitude?: number | null,
    imagem_url?: string | null,
    horarioFuncionamento?: string | null,
    nomeResponsavel?: string | null,
    rgResponsavel?: string | null,
    cpfResponsavel?: string | null,
    pixResponsavel?: string | null,
    enderecoResponsavel?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteBaresMutationVariables = {
  input: DeleteBaresInput,
  condition?: ModelBaresConditionInput | null,
};

export type DeleteBaresMutation = {
  deleteBares?:  {
    __typename: "Bares",
    id: string,
    nome: string,
    endereco: string,
    latitude?: number | null,
    longitude?: number | null,
    imagem_url?: string | null,
    horarioFuncionamento?: string | null,
    nomeResponsavel?: string | null,
    rgResponsavel?: string | null,
    cpfResponsavel?: string | null,
    pixResponsavel?: string | null,
    enderecoResponsavel?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type CreateEventosMutationVariables = {
  input: CreateEventosInput,
  condition?: ModelEventosConditionInput | null,
};

export type CreateEventosMutation = {
  createEventos?:  {
    __typename: "Eventos",
    id: string,
    nome: string,
    endereco: string,
    latitude?: number | null,
    longitude?: number | null,
    image_url?: string | null,
    horarioFuncionamento?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateEventosMutationVariables = {
  input: UpdateEventosInput,
  condition?: ModelEventosConditionInput | null,
};

export type UpdateEventosMutation = {
  updateEventos?:  {
    __typename: "Eventos",
    id: string,
    nome: string,
    endereco: string,
    latitude?: number | null,
    longitude?: number | null,
    image_url?: string | null,
    horarioFuncionamento?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteEventosMutationVariables = {
  input: DeleteEventosInput,
  condition?: ModelEventosConditionInput | null,
};

export type DeleteEventosMutation = {
  deleteEventos?:  {
    __typename: "Eventos",
    id: string,
    nome: string,
    endereco: string,
    latitude?: number | null,
    longitude?: number | null,
    image_url?: string | null,
    horarioFuncionamento?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type GetBaresQueryVariables = {
  id: string,
};

export type GetBaresQuery = {
  getBares?:  {
    __typename: "Bares",
    id: string,
    nome: string,
    endereco: string,
    latitude?: number | null,
    longitude?: number | null,
    imagem_url?: string | null,
    horarioFuncionamento?: string | null,
    nomeResponsavel?: string | null,
    rgResponsavel?: string | null,
    cpfResponsavel?: string | null,
    pixResponsavel?: string | null,
    enderecoResponsavel?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListBaresQueryVariables = {
  filter?: ModelBaresFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBaresQuery = {
  listBares?:  {
    __typename: "ModelBaresConnection",
    items:  Array< {
      __typename: "Bares",
      id: string,
      nome: string,
      endereco: string,
      latitude?: number | null,
      longitude?: number | null,
      imagem_url?: string | null,
      horarioFuncionamento?: string | null,
      nomeResponsavel?: string | null,
      rgResponsavel?: string | null,
      cpfResponsavel?: string | null,
      pixResponsavel?: string | null,
      enderecoResponsavel?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEventosQueryVariables = {
  id: string,
};

export type GetEventosQuery = {
  getEventos?:  {
    __typename: "Eventos",
    id: string,
    nome: string,
    endereco: string,
    latitude?: number | null,
    longitude?: number | null,
    image_url?: string | null,
    horarioFuncionamento?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListEventosQueryVariables = {
  filter?: ModelEventosFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventosQuery = {
  listEventos?:  {
    __typename: "ModelEventosConnection",
    items:  Array< {
      __typename: "Eventos",
      id: string,
      nome: string,
      endereco: string,
      latitude?: number | null,
      longitude?: number | null,
      image_url?: string | null,
      horarioFuncionamento?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBaresSubscriptionVariables = {
  filter?: ModelSubscriptionBaresFilterInput | null,
};

export type OnCreateBaresSubscription = {
  onCreateBares?:  {
    __typename: "Bares",
    id: string,
    nome: string,
    endereco: string,
    latitude?: number | null,
    longitude?: number | null,
    imagem_url?: string | null,
    horarioFuncionamento?: string | null,
    nomeResponsavel?: string | null,
    rgResponsavel?: string | null,
    cpfResponsavel?: string | null,
    pixResponsavel?: string | null,
    enderecoResponsavel?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateBaresSubscriptionVariables = {
  filter?: ModelSubscriptionBaresFilterInput | null,
};

export type OnUpdateBaresSubscription = {
  onUpdateBares?:  {
    __typename: "Bares",
    id: string,
    nome: string,
    endereco: string,
    latitude?: number | null,
    longitude?: number | null,
    imagem_url?: string | null,
    horarioFuncionamento?: string | null,
    nomeResponsavel?: string | null,
    rgResponsavel?: string | null,
    cpfResponsavel?: string | null,
    pixResponsavel?: string | null,
    enderecoResponsavel?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteBaresSubscriptionVariables = {
  filter?: ModelSubscriptionBaresFilterInput | null,
};

export type OnDeleteBaresSubscription = {
  onDeleteBares?:  {
    __typename: "Bares",
    id: string,
    nome: string,
    endereco: string,
    latitude?: number | null,
    longitude?: number | null,
    imagem_url?: string | null,
    horarioFuncionamento?: string | null,
    nomeResponsavel?: string | null,
    rgResponsavel?: string | null,
    cpfResponsavel?: string | null,
    pixResponsavel?: string | null,
    enderecoResponsavel?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateEventosSubscriptionVariables = {
  filter?: ModelSubscriptionEventosFilterInput | null,
};

export type OnCreateEventosSubscription = {
  onCreateEventos?:  {
    __typename: "Eventos",
    id: string,
    nome: string,
    endereco: string,
    latitude?: number | null,
    longitude?: number | null,
    image_url?: string | null,
    horarioFuncionamento?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateEventosSubscriptionVariables = {
  filter?: ModelSubscriptionEventosFilterInput | null,
};

export type OnUpdateEventosSubscription = {
  onUpdateEventos?:  {
    __typename: "Eventos",
    id: string,
    nome: string,
    endereco: string,
    latitude?: number | null,
    longitude?: number | null,
    image_url?: string | null,
    horarioFuncionamento?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteEventosSubscriptionVariables = {
  filter?: ModelSubscriptionEventosFilterInput | null,
};

export type OnDeleteEventosSubscription = {
  onDeleteEventos?:  {
    __typename: "Eventos",
    id: string,
    nome: string,
    endereco: string,
    latitude?: number | null,
    longitude?: number | null,
    image_url?: string | null,
    horarioFuncionamento?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};
