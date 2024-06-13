/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateBares = /* GraphQL */ `subscription OnCreateBares($filter: ModelSubscriptionBaresFilterInput) {
  onCreateBares(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBaresSubscriptionVariables,
  APITypes.OnCreateBaresSubscription
>;
export const onUpdateBares = /* GraphQL */ `subscription OnUpdateBares($filter: ModelSubscriptionBaresFilterInput) {
  onUpdateBares(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBaresSubscriptionVariables,
  APITypes.OnUpdateBaresSubscription
>;
export const onDeleteBares = /* GraphQL */ `subscription OnDeleteBares($filter: ModelSubscriptionBaresFilterInput) {
  onDeleteBares(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBaresSubscriptionVariables,
  APITypes.OnDeleteBaresSubscription
>;
export const onCreateEventos = /* GraphQL */ `subscription OnCreateEventos($filter: ModelSubscriptionEventosFilterInput) {
  onCreateEventos(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEventosSubscriptionVariables,
  APITypes.OnCreateEventosSubscription
>;
export const onUpdateEventos = /* GraphQL */ `subscription OnUpdateEventos($filter: ModelSubscriptionEventosFilterInput) {
  onUpdateEventos(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEventosSubscriptionVariables,
  APITypes.OnUpdateEventosSubscription
>;
export const onDeleteEventos = /* GraphQL */ `subscription OnDeleteEventos($filter: ModelSubscriptionEventosFilterInput) {
  onDeleteEventos(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEventosSubscriptionVariables,
  APITypes.OnDeleteEventosSubscription
>;
