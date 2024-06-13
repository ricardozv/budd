/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createBares = /* GraphQL */ `mutation CreateBares(
  $input: CreateBaresInput!
  $condition: ModelBaresConditionInput
) {
  createBares(input: $input, condition: $condition) {
    id
    nome
    endereco
    latitude
    longitude
    imagem_url
    horarioFuncionamento
    nomeResponsavel
    rgResponsavel
    cpfResponsavel
    pixResponsavel
    enderecoResponsavel
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBaresMutationVariables,
  APITypes.CreateBaresMutation
>;
export const updateBares = /* GraphQL */ `mutation UpdateBares(
  $input: UpdateBaresInput!
  $condition: ModelBaresConditionInput
) {
  updateBares(input: $input, condition: $condition) {
    id
    nome
    endereco
    latitude
    longitude
    imagem_url
    horarioFuncionamento
    nomeResponsavel
    rgResponsavel
    cpfResponsavel
    pixResponsavel
    enderecoResponsavel
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBaresMutationVariables,
  APITypes.UpdateBaresMutation
>;
export const deleteBares = /* GraphQL */ `mutation DeleteBares(
  $input: DeleteBaresInput!
  $condition: ModelBaresConditionInput
) {
  deleteBares(input: $input, condition: $condition) {
    id
    nome
    endereco
    latitude
    longitude
    imagem_url
    horarioFuncionamento
    nomeResponsavel
    rgResponsavel
    cpfResponsavel
    pixResponsavel
    enderecoResponsavel
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBaresMutationVariables,
  APITypes.DeleteBaresMutation
>;
export const createEventos = /* GraphQL */ `mutation CreateEventos(
  $input: CreateEventosInput!
  $condition: ModelEventosConditionInput
) {
  createEventos(input: $input, condition: $condition) {
    id
    nome
    endereco
    latitude
    longitude
    image_url
    horarioFuncionamento
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEventosMutationVariables,
  APITypes.CreateEventosMutation
>;
export const updateEventos = /* GraphQL */ `mutation UpdateEventos(
  $input: UpdateEventosInput!
  $condition: ModelEventosConditionInput
) {
  updateEventos(input: $input, condition: $condition) {
    id
    nome
    endereco
    latitude
    longitude
    image_url
    horarioFuncionamento
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEventosMutationVariables,
  APITypes.UpdateEventosMutation
>;
export const deleteEventos = /* GraphQL */ `mutation DeleteEventos(
  $input: DeleteEventosInput!
  $condition: ModelEventosConditionInput
) {
  deleteEventos(input: $input, condition: $condition) {
    id
    nome
    endereco
    latitude
    longitude
    image_url
    horarioFuncionamento
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEventosMutationVariables,
  APITypes.DeleteEventosMutation
>;
