/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getBares = /* GraphQL */ `query GetBares($id: ID!) {
  getBares(id: $id) {
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
` as GeneratedQuery<APITypes.GetBaresQueryVariables, APITypes.GetBaresQuery>;
export const listBares = /* GraphQL */ `query ListBares(
  $filter: ModelBaresFilterInput
  $limit: Int
  $nextToken: String
) {
  listBares(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListBaresQueryVariables, APITypes.ListBaresQuery>;
export const getEventos = /* GraphQL */ `query GetEventos($id: ID!) {
  getEventos(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetEventosQueryVariables,
  APITypes.GetEventosQuery
>;
export const listEventos = /* GraphQL */ `query ListEventos(
  $filter: ModelEventosFilterInput
  $limit: Int
  $nextToken: String
) {
  listEventos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEventosQueryVariables,
  APITypes.ListEventosQuery
>;
