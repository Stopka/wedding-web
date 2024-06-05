import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  EmailAddress: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
};

export type Access = {
  __typename?: 'Access';
  canAccessAdmin: Scalars['Boolean']['output'];
  homePage?: Maybe<HomePageAccess>;
  mainNavigation?: Maybe<MainNavigationAccess>;
  media?: Maybe<MediaAccess>;
  pages?: Maybe<PagesAccess>;
  payload_preferences?: Maybe<Payload_PreferencesAccess>;
  redirects?: Maybe<RedirectsAccess>;
  users?: Maybe<UsersAccess>;
};

export enum FallbackLocaleInputType {
  Cs = 'cs',
  En = 'en',
  None = 'none'
}

export type HomePage = {
  __typename?: 'HomePage';
  _status?: Maybe<HomePage__Status>;
  content?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  image?: Maybe<Media>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type HomePageContentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


export type HomePageImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  where?: InputMaybe<HomePage_Image_Where>;
};

export type HomePageDocAccessFields = {
  __typename?: 'HomePageDocAccessFields';
  _status?: Maybe<HomePageDocAccessFields__Status>;
  content?: Maybe<HomePageDocAccessFields_Content>;
  createdAt?: Maybe<HomePageDocAccessFields_CreatedAt>;
  image?: Maybe<HomePageDocAccessFields_Image>;
  title?: Maybe<HomePageDocAccessFields_Title>;
  updatedAt?: Maybe<HomePageDocAccessFields_UpdatedAt>;
};

export type HomePageDocAccessFields__Status = {
  __typename?: 'HomePageDocAccessFields__status';
  create?: Maybe<HomePageDocAccessFields__Status_Create>;
  delete?: Maybe<HomePageDocAccessFields__Status_Delete>;
  read?: Maybe<HomePageDocAccessFields__Status_Read>;
  update?: Maybe<HomePageDocAccessFields__Status_Update>;
};

export type HomePageDocAccessFields__Status_Create = {
  __typename?: 'HomePageDocAccessFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields__Status_Delete = {
  __typename?: 'HomePageDocAccessFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields__Status_Read = {
  __typename?: 'HomePageDocAccessFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields__Status_Update = {
  __typename?: 'HomePageDocAccessFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_Content = {
  __typename?: 'HomePageDocAccessFields_content';
  create?: Maybe<HomePageDocAccessFields_Content_Create>;
  delete?: Maybe<HomePageDocAccessFields_Content_Delete>;
  read?: Maybe<HomePageDocAccessFields_Content_Read>;
  update?: Maybe<HomePageDocAccessFields_Content_Update>;
};

export type HomePageDocAccessFields_Content_Create = {
  __typename?: 'HomePageDocAccessFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_Content_Delete = {
  __typename?: 'HomePageDocAccessFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_Content_Read = {
  __typename?: 'HomePageDocAccessFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_Content_Update = {
  __typename?: 'HomePageDocAccessFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_CreatedAt = {
  __typename?: 'HomePageDocAccessFields_createdAt';
  create?: Maybe<HomePageDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<HomePageDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<HomePageDocAccessFields_CreatedAt_Read>;
  update?: Maybe<HomePageDocAccessFields_CreatedAt_Update>;
};

export type HomePageDocAccessFields_CreatedAt_Create = {
  __typename?: 'HomePageDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_CreatedAt_Delete = {
  __typename?: 'HomePageDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_CreatedAt_Read = {
  __typename?: 'HomePageDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_CreatedAt_Update = {
  __typename?: 'HomePageDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_Image = {
  __typename?: 'HomePageDocAccessFields_image';
  create?: Maybe<HomePageDocAccessFields_Image_Create>;
  delete?: Maybe<HomePageDocAccessFields_Image_Delete>;
  read?: Maybe<HomePageDocAccessFields_Image_Read>;
  update?: Maybe<HomePageDocAccessFields_Image_Update>;
};

export type HomePageDocAccessFields_Image_Create = {
  __typename?: 'HomePageDocAccessFields_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_Image_Delete = {
  __typename?: 'HomePageDocAccessFields_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_Image_Read = {
  __typename?: 'HomePageDocAccessFields_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_Image_Update = {
  __typename?: 'HomePageDocAccessFields_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_Title = {
  __typename?: 'HomePageDocAccessFields_title';
  create?: Maybe<HomePageDocAccessFields_Title_Create>;
  delete?: Maybe<HomePageDocAccessFields_Title_Delete>;
  read?: Maybe<HomePageDocAccessFields_Title_Read>;
  update?: Maybe<HomePageDocAccessFields_Title_Update>;
};

export type HomePageDocAccessFields_Title_Create = {
  __typename?: 'HomePageDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_Title_Delete = {
  __typename?: 'HomePageDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_Title_Read = {
  __typename?: 'HomePageDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_Title_Update = {
  __typename?: 'HomePageDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_UpdatedAt = {
  __typename?: 'HomePageDocAccessFields_updatedAt';
  create?: Maybe<HomePageDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<HomePageDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<HomePageDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<HomePageDocAccessFields_UpdatedAt_Update>;
};

export type HomePageDocAccessFields_UpdatedAt_Create = {
  __typename?: 'HomePageDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'HomePageDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_UpdatedAt_Read = {
  __typename?: 'HomePageDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomePageDocAccessFields_UpdatedAt_Update = {
  __typename?: 'HomePageDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomePageFields = {
  __typename?: 'HomePageFields';
  _status?: Maybe<HomePageFields__Status>;
  content?: Maybe<HomePageFields_Content>;
  createdAt?: Maybe<HomePageFields_CreatedAt>;
  image?: Maybe<HomePageFields_Image>;
  title?: Maybe<HomePageFields_Title>;
  updatedAt?: Maybe<HomePageFields_UpdatedAt>;
};

export type HomePageFields__Status = {
  __typename?: 'HomePageFields__status';
  create?: Maybe<HomePageFields__Status_Create>;
  delete?: Maybe<HomePageFields__Status_Delete>;
  read?: Maybe<HomePageFields__Status_Read>;
  update?: Maybe<HomePageFields__Status_Update>;
};

export type HomePageFields__Status_Create = {
  __typename?: 'HomePageFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomePageFields__Status_Delete = {
  __typename?: 'HomePageFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomePageFields__Status_Read = {
  __typename?: 'HomePageFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomePageFields__Status_Update = {
  __typename?: 'HomePageFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomePageFields_Content = {
  __typename?: 'HomePageFields_content';
  create?: Maybe<HomePageFields_Content_Create>;
  delete?: Maybe<HomePageFields_Content_Delete>;
  read?: Maybe<HomePageFields_Content_Read>;
  update?: Maybe<HomePageFields_Content_Update>;
};

export type HomePageFields_Content_Create = {
  __typename?: 'HomePageFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomePageFields_Content_Delete = {
  __typename?: 'HomePageFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomePageFields_Content_Read = {
  __typename?: 'HomePageFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomePageFields_Content_Update = {
  __typename?: 'HomePageFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomePageFields_CreatedAt = {
  __typename?: 'HomePageFields_createdAt';
  create?: Maybe<HomePageFields_CreatedAt_Create>;
  delete?: Maybe<HomePageFields_CreatedAt_Delete>;
  read?: Maybe<HomePageFields_CreatedAt_Read>;
  update?: Maybe<HomePageFields_CreatedAt_Update>;
};

export type HomePageFields_CreatedAt_Create = {
  __typename?: 'HomePageFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomePageFields_CreatedAt_Delete = {
  __typename?: 'HomePageFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomePageFields_CreatedAt_Read = {
  __typename?: 'HomePageFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomePageFields_CreatedAt_Update = {
  __typename?: 'HomePageFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomePageFields_Image = {
  __typename?: 'HomePageFields_image';
  create?: Maybe<HomePageFields_Image_Create>;
  delete?: Maybe<HomePageFields_Image_Delete>;
  read?: Maybe<HomePageFields_Image_Read>;
  update?: Maybe<HomePageFields_Image_Update>;
};

export type HomePageFields_Image_Create = {
  __typename?: 'HomePageFields_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomePageFields_Image_Delete = {
  __typename?: 'HomePageFields_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomePageFields_Image_Read = {
  __typename?: 'HomePageFields_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomePageFields_Image_Update = {
  __typename?: 'HomePageFields_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomePageFields_Title = {
  __typename?: 'HomePageFields_title';
  create?: Maybe<HomePageFields_Title_Create>;
  delete?: Maybe<HomePageFields_Title_Delete>;
  read?: Maybe<HomePageFields_Title_Read>;
  update?: Maybe<HomePageFields_Title_Update>;
};

export type HomePageFields_Title_Create = {
  __typename?: 'HomePageFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomePageFields_Title_Delete = {
  __typename?: 'HomePageFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomePageFields_Title_Read = {
  __typename?: 'HomePageFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomePageFields_Title_Update = {
  __typename?: 'HomePageFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomePageFields_UpdatedAt = {
  __typename?: 'HomePageFields_updatedAt';
  create?: Maybe<HomePageFields_UpdatedAt_Create>;
  delete?: Maybe<HomePageFields_UpdatedAt_Delete>;
  read?: Maybe<HomePageFields_UpdatedAt_Read>;
  update?: Maybe<HomePageFields_UpdatedAt_Update>;
};

export type HomePageFields_UpdatedAt_Create = {
  __typename?: 'HomePageFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomePageFields_UpdatedAt_Delete = {
  __typename?: 'HomePageFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomePageFields_UpdatedAt_Read = {
  __typename?: 'HomePageFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomePageFields_UpdatedAt_Update = {
  __typename?: 'HomePageFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomePageReadAccess = {
  __typename?: 'HomePageReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HomePageReadDocAccess = {
  __typename?: 'HomePageReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HomePageReadVersionsAccess = {
  __typename?: 'HomePageReadVersionsAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HomePageReadVersionsDocAccess = {
  __typename?: 'HomePageReadVersionsDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HomePageUpdateAccess = {
  __typename?: 'HomePageUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HomePageUpdateDocAccess = {
  __typename?: 'HomePageUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HomePageVersion = {
  __typename?: 'HomePageVersion';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  latest?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<HomePageVersion_Version>;
};

export type HomePageVersion_Version = {
  __typename?: 'HomePageVersion_Version';
  _status?: Maybe<HomePageVersion_Version__Status>;
  content?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  image?: Maybe<Media>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type HomePageVersion_VersionContentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


export type HomePageVersion_VersionImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  where?: InputMaybe<HomePageVersion_Version_Image_Where>;
};

export type HomePageVersion_Version_Image_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePageVersion_Version_Image_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HomePageVersion_Version_Image_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePageVersion_Version_Image_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type HomePageVersion_Version_Image_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type HomePageVersion_Version_Image_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePageVersion_Version_Image_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePageVersion_Version_Image_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePageVersion_Version_Image_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HomePageVersion_Version_Image_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePageVersion_Version_Image_Where = {
  AND?: InputMaybe<Array<InputMaybe<HomePageVersion_Version_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<HomePageVersion_Version_Image_Where_Or>>>;
  alt?: InputMaybe<HomePageVersion_Version_Image_Alt_Operator>;
  createdAt?: InputMaybe<HomePageVersion_Version_Image_CreatedAt_Operator>;
  filename?: InputMaybe<HomePageVersion_Version_Image_Filename_Operator>;
  filesize?: InputMaybe<HomePageVersion_Version_Image_Filesize_Operator>;
  height?: InputMaybe<HomePageVersion_Version_Image_Height_Operator>;
  id?: InputMaybe<HomePageVersion_Version_Image_Id_Operator>;
  mimeType?: InputMaybe<HomePageVersion_Version_Image_MimeType_Operator>;
  title?: InputMaybe<HomePageVersion_Version_Image_Title_Operator>;
  updatedAt?: InputMaybe<HomePageVersion_Version_Image_UpdatedAt_Operator>;
  url?: InputMaybe<HomePageVersion_Version_Image_Url_Operator>;
  width?: InputMaybe<HomePageVersion_Version_Image_Width_Operator>;
};

export type HomePageVersion_Version_Image_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<HomePageVersion_Version_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<HomePageVersion_Version_Image_Where_Or>>>;
  alt?: InputMaybe<HomePageVersion_Version_Image_Alt_Operator>;
  createdAt?: InputMaybe<HomePageVersion_Version_Image_CreatedAt_Operator>;
  filename?: InputMaybe<HomePageVersion_Version_Image_Filename_Operator>;
  filesize?: InputMaybe<HomePageVersion_Version_Image_Filesize_Operator>;
  height?: InputMaybe<HomePageVersion_Version_Image_Height_Operator>;
  id?: InputMaybe<HomePageVersion_Version_Image_Id_Operator>;
  mimeType?: InputMaybe<HomePageVersion_Version_Image_MimeType_Operator>;
  title?: InputMaybe<HomePageVersion_Version_Image_Title_Operator>;
  updatedAt?: InputMaybe<HomePageVersion_Version_Image_UpdatedAt_Operator>;
  url?: InputMaybe<HomePageVersion_Version_Image_Url_Operator>;
  width?: InputMaybe<HomePageVersion_Version_Image_Width_Operator>;
};

export type HomePageVersion_Version_Image_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<HomePageVersion_Version_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<HomePageVersion_Version_Image_Where_Or>>>;
  alt?: InputMaybe<HomePageVersion_Version_Image_Alt_Operator>;
  createdAt?: InputMaybe<HomePageVersion_Version_Image_CreatedAt_Operator>;
  filename?: InputMaybe<HomePageVersion_Version_Image_Filename_Operator>;
  filesize?: InputMaybe<HomePageVersion_Version_Image_Filesize_Operator>;
  height?: InputMaybe<HomePageVersion_Version_Image_Height_Operator>;
  id?: InputMaybe<HomePageVersion_Version_Image_Id_Operator>;
  mimeType?: InputMaybe<HomePageVersion_Version_Image_MimeType_Operator>;
  title?: InputMaybe<HomePageVersion_Version_Image_Title_Operator>;
  updatedAt?: InputMaybe<HomePageVersion_Version_Image_UpdatedAt_Operator>;
  url?: InputMaybe<HomePageVersion_Version_Image_Url_Operator>;
  width?: InputMaybe<HomePageVersion_Version_Image_Width_Operator>;
};

export type HomePageVersion_Version_Image_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export enum HomePageVersion_Version__Status {
  Draft = 'draft',
  Published = 'published'
}

export type HomePage_Image_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePage_Image_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HomePage_Image_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePage_Image_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type HomePage_Image_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type HomePage_Image_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePage_Image_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePage_Image_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePage_Image_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HomePage_Image_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePage_Image_Where = {
  AND?: InputMaybe<Array<InputMaybe<HomePage_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<HomePage_Image_Where_Or>>>;
  alt?: InputMaybe<HomePage_Image_Alt_Operator>;
  createdAt?: InputMaybe<HomePage_Image_CreatedAt_Operator>;
  filename?: InputMaybe<HomePage_Image_Filename_Operator>;
  filesize?: InputMaybe<HomePage_Image_Filesize_Operator>;
  height?: InputMaybe<HomePage_Image_Height_Operator>;
  id?: InputMaybe<HomePage_Image_Id_Operator>;
  mimeType?: InputMaybe<HomePage_Image_MimeType_Operator>;
  title?: InputMaybe<HomePage_Image_Title_Operator>;
  updatedAt?: InputMaybe<HomePage_Image_UpdatedAt_Operator>;
  url?: InputMaybe<HomePage_Image_Url_Operator>;
  width?: InputMaybe<HomePage_Image_Width_Operator>;
};

export type HomePage_Image_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<HomePage_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<HomePage_Image_Where_Or>>>;
  alt?: InputMaybe<HomePage_Image_Alt_Operator>;
  createdAt?: InputMaybe<HomePage_Image_CreatedAt_Operator>;
  filename?: InputMaybe<HomePage_Image_Filename_Operator>;
  filesize?: InputMaybe<HomePage_Image_Filesize_Operator>;
  height?: InputMaybe<HomePage_Image_Height_Operator>;
  id?: InputMaybe<HomePage_Image_Id_Operator>;
  mimeType?: InputMaybe<HomePage_Image_MimeType_Operator>;
  title?: InputMaybe<HomePage_Image_Title_Operator>;
  updatedAt?: InputMaybe<HomePage_Image_UpdatedAt_Operator>;
  url?: InputMaybe<HomePage_Image_Url_Operator>;
  width?: InputMaybe<HomePage_Image_Width_Operator>;
};

export type HomePage_Image_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<HomePage_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<HomePage_Image_Where_Or>>>;
  alt?: InputMaybe<HomePage_Image_Alt_Operator>;
  createdAt?: InputMaybe<HomePage_Image_CreatedAt_Operator>;
  filename?: InputMaybe<HomePage_Image_Filename_Operator>;
  filesize?: InputMaybe<HomePage_Image_Filesize_Operator>;
  height?: InputMaybe<HomePage_Image_Height_Operator>;
  id?: InputMaybe<HomePage_Image_Id_Operator>;
  mimeType?: InputMaybe<HomePage_Image_MimeType_Operator>;
  title?: InputMaybe<HomePage_Image_Title_Operator>;
  updatedAt?: InputMaybe<HomePage_Image_UpdatedAt_Operator>;
  url?: InputMaybe<HomePage_Image_Url_Operator>;
  width?: InputMaybe<HomePage_Image_Width_Operator>;
};

export type HomePage_Image_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export enum HomePage__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum HomePage__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export enum LocaleInputType {
  Cs = 'cs',
  En = 'en'
}

export type MainNavigation = {
  __typename?: 'MainNavigation';
  _status?: Maybe<MainNavigation__Status>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  items: Array<MainNavigation_Items>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MainNavigationDocAccessFields = {
  __typename?: 'MainNavigationDocAccessFields';
  _status?: Maybe<MainNavigationDocAccessFields__Status>;
  createdAt?: Maybe<MainNavigationDocAccessFields_CreatedAt>;
  items?: Maybe<MainNavigationDocAccessFields_Items>;
  updatedAt?: Maybe<MainNavigationDocAccessFields_UpdatedAt>;
};

export type MainNavigationDocAccessFields__Status = {
  __typename?: 'MainNavigationDocAccessFields__status';
  create?: Maybe<MainNavigationDocAccessFields__Status_Create>;
  delete?: Maybe<MainNavigationDocAccessFields__Status_Delete>;
  read?: Maybe<MainNavigationDocAccessFields__Status_Read>;
  update?: Maybe<MainNavigationDocAccessFields__Status_Update>;
};

export type MainNavigationDocAccessFields__Status_Create = {
  __typename?: 'MainNavigationDocAccessFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields__Status_Delete = {
  __typename?: 'MainNavigationDocAccessFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields__Status_Read = {
  __typename?: 'MainNavigationDocAccessFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields__Status_Update = {
  __typename?: 'MainNavigationDocAccessFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields_CreatedAt = {
  __typename?: 'MainNavigationDocAccessFields_createdAt';
  create?: Maybe<MainNavigationDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<MainNavigationDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<MainNavigationDocAccessFields_CreatedAt_Read>;
  update?: Maybe<MainNavigationDocAccessFields_CreatedAt_Update>;
};

export type MainNavigationDocAccessFields_CreatedAt_Create = {
  __typename?: 'MainNavigationDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MainNavigationDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields_CreatedAt_Read = {
  __typename?: 'MainNavigationDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields_CreatedAt_Update = {
  __typename?: 'MainNavigationDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields_Items = {
  __typename?: 'MainNavigationDocAccessFields_items';
  create?: Maybe<MainNavigationDocAccessFields_Items_Create>;
  delete?: Maybe<MainNavigationDocAccessFields_Items_Delete>;
  fields?: Maybe<MainNavigationDocAccessFields_Items_Fields>;
  read?: Maybe<MainNavigationDocAccessFields_Items_Read>;
  update?: Maybe<MainNavigationDocAccessFields_Items_Update>;
};

export type MainNavigationDocAccessFields_Items_Create = {
  __typename?: 'MainNavigationDocAccessFields_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields_Items_Delete = {
  __typename?: 'MainNavigationDocAccessFields_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields_Items_Fields = {
  __typename?: 'MainNavigationDocAccessFields_items_Fields';
  id?: Maybe<MainNavigationDocAccessFields_Items_Id>;
  title?: Maybe<MainNavigationDocAccessFields_Items_Title>;
  url?: Maybe<MainNavigationDocAccessFields_Items_Url>;
};

export type MainNavigationDocAccessFields_Items_Read = {
  __typename?: 'MainNavigationDocAccessFields_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields_Items_Update = {
  __typename?: 'MainNavigationDocAccessFields_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields_Items_Id = {
  __typename?: 'MainNavigationDocAccessFields_items_id';
  create?: Maybe<MainNavigationDocAccessFields_Items_Id_Create>;
  delete?: Maybe<MainNavigationDocAccessFields_Items_Id_Delete>;
  read?: Maybe<MainNavigationDocAccessFields_Items_Id_Read>;
  update?: Maybe<MainNavigationDocAccessFields_Items_Id_Update>;
};

export type MainNavigationDocAccessFields_Items_Id_Create = {
  __typename?: 'MainNavigationDocAccessFields_items_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields_Items_Id_Delete = {
  __typename?: 'MainNavigationDocAccessFields_items_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields_Items_Id_Read = {
  __typename?: 'MainNavigationDocAccessFields_items_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields_Items_Id_Update = {
  __typename?: 'MainNavigationDocAccessFields_items_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields_Items_Title = {
  __typename?: 'MainNavigationDocAccessFields_items_title';
  create?: Maybe<MainNavigationDocAccessFields_Items_Title_Create>;
  delete?: Maybe<MainNavigationDocAccessFields_Items_Title_Delete>;
  read?: Maybe<MainNavigationDocAccessFields_Items_Title_Read>;
  update?: Maybe<MainNavigationDocAccessFields_Items_Title_Update>;
};

export type MainNavigationDocAccessFields_Items_Title_Create = {
  __typename?: 'MainNavigationDocAccessFields_items_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields_Items_Title_Delete = {
  __typename?: 'MainNavigationDocAccessFields_items_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields_Items_Title_Read = {
  __typename?: 'MainNavigationDocAccessFields_items_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields_Items_Title_Update = {
  __typename?: 'MainNavigationDocAccessFields_items_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields_Items_Url = {
  __typename?: 'MainNavigationDocAccessFields_items_url';
  create?: Maybe<MainNavigationDocAccessFields_Items_Url_Create>;
  delete?: Maybe<MainNavigationDocAccessFields_Items_Url_Delete>;
  read?: Maybe<MainNavigationDocAccessFields_Items_Url_Read>;
  update?: Maybe<MainNavigationDocAccessFields_Items_Url_Update>;
};

export type MainNavigationDocAccessFields_Items_Url_Create = {
  __typename?: 'MainNavigationDocAccessFields_items_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields_Items_Url_Delete = {
  __typename?: 'MainNavigationDocAccessFields_items_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields_Items_Url_Read = {
  __typename?: 'MainNavigationDocAccessFields_items_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields_Items_Url_Update = {
  __typename?: 'MainNavigationDocAccessFields_items_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields_UpdatedAt = {
  __typename?: 'MainNavigationDocAccessFields_updatedAt';
  create?: Maybe<MainNavigationDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<MainNavigationDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<MainNavigationDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<MainNavigationDocAccessFields_UpdatedAt_Update>;
};

export type MainNavigationDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MainNavigationDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MainNavigationDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MainNavigationDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MainNavigationDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields = {
  __typename?: 'MainNavigationFields';
  _status?: Maybe<MainNavigationFields__Status>;
  createdAt?: Maybe<MainNavigationFields_CreatedAt>;
  items?: Maybe<MainNavigationFields_Items>;
  updatedAt?: Maybe<MainNavigationFields_UpdatedAt>;
};

export type MainNavigationFields__Status = {
  __typename?: 'MainNavigationFields__status';
  create?: Maybe<MainNavigationFields__Status_Create>;
  delete?: Maybe<MainNavigationFields__Status_Delete>;
  read?: Maybe<MainNavigationFields__Status_Read>;
  update?: Maybe<MainNavigationFields__Status_Update>;
};

export type MainNavigationFields__Status_Create = {
  __typename?: 'MainNavigationFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields__Status_Delete = {
  __typename?: 'MainNavigationFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields__Status_Read = {
  __typename?: 'MainNavigationFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields__Status_Update = {
  __typename?: 'MainNavigationFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields_CreatedAt = {
  __typename?: 'MainNavigationFields_createdAt';
  create?: Maybe<MainNavigationFields_CreatedAt_Create>;
  delete?: Maybe<MainNavigationFields_CreatedAt_Delete>;
  read?: Maybe<MainNavigationFields_CreatedAt_Read>;
  update?: Maybe<MainNavigationFields_CreatedAt_Update>;
};

export type MainNavigationFields_CreatedAt_Create = {
  __typename?: 'MainNavigationFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields_CreatedAt_Delete = {
  __typename?: 'MainNavigationFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields_CreatedAt_Read = {
  __typename?: 'MainNavigationFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields_CreatedAt_Update = {
  __typename?: 'MainNavigationFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields_Items = {
  __typename?: 'MainNavigationFields_items';
  create?: Maybe<MainNavigationFields_Items_Create>;
  delete?: Maybe<MainNavigationFields_Items_Delete>;
  fields?: Maybe<MainNavigationFields_Items_Fields>;
  read?: Maybe<MainNavigationFields_Items_Read>;
  update?: Maybe<MainNavigationFields_Items_Update>;
};

export type MainNavigationFields_Items_Create = {
  __typename?: 'MainNavigationFields_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields_Items_Delete = {
  __typename?: 'MainNavigationFields_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields_Items_Fields = {
  __typename?: 'MainNavigationFields_items_Fields';
  id?: Maybe<MainNavigationFields_Items_Id>;
  title?: Maybe<MainNavigationFields_Items_Title>;
  url?: Maybe<MainNavigationFields_Items_Url>;
};

export type MainNavigationFields_Items_Read = {
  __typename?: 'MainNavigationFields_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields_Items_Update = {
  __typename?: 'MainNavigationFields_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields_Items_Id = {
  __typename?: 'MainNavigationFields_items_id';
  create?: Maybe<MainNavigationFields_Items_Id_Create>;
  delete?: Maybe<MainNavigationFields_Items_Id_Delete>;
  read?: Maybe<MainNavigationFields_Items_Id_Read>;
  update?: Maybe<MainNavigationFields_Items_Id_Update>;
};

export type MainNavigationFields_Items_Id_Create = {
  __typename?: 'MainNavigationFields_items_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields_Items_Id_Delete = {
  __typename?: 'MainNavigationFields_items_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields_Items_Id_Read = {
  __typename?: 'MainNavigationFields_items_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields_Items_Id_Update = {
  __typename?: 'MainNavigationFields_items_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields_Items_Title = {
  __typename?: 'MainNavigationFields_items_title';
  create?: Maybe<MainNavigationFields_Items_Title_Create>;
  delete?: Maybe<MainNavigationFields_Items_Title_Delete>;
  read?: Maybe<MainNavigationFields_Items_Title_Read>;
  update?: Maybe<MainNavigationFields_Items_Title_Update>;
};

export type MainNavigationFields_Items_Title_Create = {
  __typename?: 'MainNavigationFields_items_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields_Items_Title_Delete = {
  __typename?: 'MainNavigationFields_items_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields_Items_Title_Read = {
  __typename?: 'MainNavigationFields_items_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields_Items_Title_Update = {
  __typename?: 'MainNavigationFields_items_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields_Items_Url = {
  __typename?: 'MainNavigationFields_items_url';
  create?: Maybe<MainNavigationFields_Items_Url_Create>;
  delete?: Maybe<MainNavigationFields_Items_Url_Delete>;
  read?: Maybe<MainNavigationFields_Items_Url_Read>;
  update?: Maybe<MainNavigationFields_Items_Url_Update>;
};

export type MainNavigationFields_Items_Url_Create = {
  __typename?: 'MainNavigationFields_items_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields_Items_Url_Delete = {
  __typename?: 'MainNavigationFields_items_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields_Items_Url_Read = {
  __typename?: 'MainNavigationFields_items_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields_Items_Url_Update = {
  __typename?: 'MainNavigationFields_items_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields_UpdatedAt = {
  __typename?: 'MainNavigationFields_updatedAt';
  create?: Maybe<MainNavigationFields_UpdatedAt_Create>;
  delete?: Maybe<MainNavigationFields_UpdatedAt_Delete>;
  read?: Maybe<MainNavigationFields_UpdatedAt_Read>;
  update?: Maybe<MainNavigationFields_UpdatedAt_Update>;
};

export type MainNavigationFields_UpdatedAt_Create = {
  __typename?: 'MainNavigationFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields_UpdatedAt_Delete = {
  __typename?: 'MainNavigationFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields_UpdatedAt_Read = {
  __typename?: 'MainNavigationFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationFields_UpdatedAt_Update = {
  __typename?: 'MainNavigationFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MainNavigationReadAccess = {
  __typename?: 'MainNavigationReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MainNavigationReadDocAccess = {
  __typename?: 'MainNavigationReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MainNavigationReadVersionsAccess = {
  __typename?: 'MainNavigationReadVersionsAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MainNavigationReadVersionsDocAccess = {
  __typename?: 'MainNavigationReadVersionsDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MainNavigationUpdateAccess = {
  __typename?: 'MainNavigationUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MainNavigationUpdateDocAccess = {
  __typename?: 'MainNavigationUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MainNavigationVersion = {
  __typename?: 'MainNavigationVersion';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  latest?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<MainNavigationVersion_Version>;
};

export type MainNavigationVersion_Version = {
  __typename?: 'MainNavigationVersion_Version';
  _status?: Maybe<MainNavigationVersion_Version__Status>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  items: Array<MainNavigationVersion_Version_Items>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MainNavigationVersion_Version_Items = {
  __typename?: 'MainNavigationVersion_Version_Items';
  id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export enum MainNavigationVersion_Version__Status {
  Draft = 'draft',
  Published = 'published'
}

export type MainNavigation_Items = {
  __typename?: 'MainNavigation_Items';
  id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export enum MainNavigation__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum MainNavigation__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type Media = {
  __typename?: 'Media';
  alt?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDocAccessFields = {
  __typename?: 'MediaDocAccessFields';
  alt?: Maybe<MediaDocAccessFields_Alt>;
  createdAt?: Maybe<MediaDocAccessFields_CreatedAt>;
  filename?: Maybe<MediaDocAccessFields_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Filesize>;
  height?: Maybe<MediaDocAccessFields_Height>;
  mimeType?: Maybe<MediaDocAccessFields_MimeType>;
  title?: Maybe<MediaDocAccessFields_Title>;
  updatedAt?: Maybe<MediaDocAccessFields_UpdatedAt>;
  url?: Maybe<MediaDocAccessFields_Url>;
  width?: Maybe<MediaDocAccessFields_Width>;
};

export type MediaDocAccessFields_Alt = {
  __typename?: 'MediaDocAccessFields_alt';
  create?: Maybe<MediaDocAccessFields_Alt_Create>;
  delete?: Maybe<MediaDocAccessFields_Alt_Delete>;
  read?: Maybe<MediaDocAccessFields_Alt_Read>;
  update?: Maybe<MediaDocAccessFields_Alt_Update>;
};

export type MediaDocAccessFields_Alt_Create = {
  __typename?: 'MediaDocAccessFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Delete = {
  __typename?: 'MediaDocAccessFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Read = {
  __typename?: 'MediaDocAccessFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Update = {
  __typename?: 'MediaDocAccessFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt = {
  __typename?: 'MediaDocAccessFields_createdAt';
  create?: Maybe<MediaDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_CreatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_CreatedAt_Update>;
};

export type MediaDocAccessFields_CreatedAt_Create = {
  __typename?: 'MediaDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Read = {
  __typename?: 'MediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Update = {
  __typename?: 'MediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename = {
  __typename?: 'MediaDocAccessFields_filename';
  create?: Maybe<MediaDocAccessFields_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
  __typename?: 'MediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize = {
  __typename?: 'MediaDocAccessFields_filesize';
  create?: Maybe<MediaDocAccessFields_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height = {
  __typename?: 'MediaDocAccessFields_height';
  create?: Maybe<MediaDocAccessFields_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
  __typename?: 'MediaDocAccessFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType = {
  __typename?: 'MediaDocAccessFields_mimeType';
  create?: Maybe<MediaDocAccessFields_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Title = {
  __typename?: 'MediaDocAccessFields_title';
  create?: Maybe<MediaDocAccessFields_Title_Create>;
  delete?: Maybe<MediaDocAccessFields_Title_Delete>;
  read?: Maybe<MediaDocAccessFields_Title_Read>;
  update?: Maybe<MediaDocAccessFields_Title_Update>;
};

export type MediaDocAccessFields_Title_Create = {
  __typename?: 'MediaDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Title_Delete = {
  __typename?: 'MediaDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Title_Read = {
  __typename?: 'MediaDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Title_Update = {
  __typename?: 'MediaDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt = {
  __typename?: 'MediaDocAccessFields_updatedAt';
  create?: Maybe<MediaDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_UpdatedAt_Update>;
};

export type MediaDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MediaDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url = {
  __typename?: 'MediaDocAccessFields_url';
  create?: Maybe<MediaDocAccessFields_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
  __typename?: 'MediaDocAccessFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width = {
  __typename?: 'MediaDocAccessFields_width';
  create?: Maybe<MediaDocAccessFields_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
  __typename?: 'MediaDocAccessFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields = {
  __typename?: 'MediaFields';
  alt?: Maybe<MediaFields_Alt>;
  createdAt?: Maybe<MediaFields_CreatedAt>;
  filename?: Maybe<MediaFields_Filename>;
  filesize?: Maybe<MediaFields_Filesize>;
  height?: Maybe<MediaFields_Height>;
  mimeType?: Maybe<MediaFields_MimeType>;
  title?: Maybe<MediaFields_Title>;
  updatedAt?: Maybe<MediaFields_UpdatedAt>;
  url?: Maybe<MediaFields_Url>;
  width?: Maybe<MediaFields_Width>;
};

export type MediaFields_Alt = {
  __typename?: 'MediaFields_alt';
  create?: Maybe<MediaFields_Alt_Create>;
  delete?: Maybe<MediaFields_Alt_Delete>;
  read?: Maybe<MediaFields_Alt_Read>;
  update?: Maybe<MediaFields_Alt_Update>;
};

export type MediaFields_Alt_Create = {
  __typename?: 'MediaFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Delete = {
  __typename?: 'MediaFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Read = {
  __typename?: 'MediaFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Update = {
  __typename?: 'MediaFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt = {
  __typename?: 'MediaFields_createdAt';
  create?: Maybe<MediaFields_CreatedAt_Create>;
  delete?: Maybe<MediaFields_CreatedAt_Delete>;
  read?: Maybe<MediaFields_CreatedAt_Read>;
  update?: Maybe<MediaFields_CreatedAt_Update>;
};

export type MediaFields_CreatedAt_Create = {
  __typename?: 'MediaFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Delete = {
  __typename?: 'MediaFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Read = {
  __typename?: 'MediaFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Update = {
  __typename?: 'MediaFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename = {
  __typename?: 'MediaFields_filename';
  create?: Maybe<MediaFields_Filename_Create>;
  delete?: Maybe<MediaFields_Filename_Delete>;
  read?: Maybe<MediaFields_Filename_Read>;
  update?: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  __typename?: 'MediaFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Delete = {
  __typename?: 'MediaFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Read = {
  __typename?: 'MediaFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Update = {
  __typename?: 'MediaFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize = {
  __typename?: 'MediaFields_filesize';
  create?: Maybe<MediaFields_Filesize_Create>;
  delete?: Maybe<MediaFields_Filesize_Delete>;
  read?: Maybe<MediaFields_Filesize_Read>;
  update?: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  __typename?: 'MediaFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Read = {
  __typename?: 'MediaFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Update = {
  __typename?: 'MediaFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height = {
  __typename?: 'MediaFields_height';
  create?: Maybe<MediaFields_Height_Create>;
  delete?: Maybe<MediaFields_Height_Delete>;
  read?: Maybe<MediaFields_Height_Read>;
  update?: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  __typename?: 'MediaFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Delete = {
  __typename?: 'MediaFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Read = {
  __typename?: 'MediaFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Update = {
  __typename?: 'MediaFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType = {
  __typename?: 'MediaFields_mimeType';
  create?: Maybe<MediaFields_MimeType_Create>;
  delete?: Maybe<MediaFields_MimeType_Delete>;
  read?: Maybe<MediaFields_MimeType_Read>;
  update?: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  __typename?: 'MediaFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Title = {
  __typename?: 'MediaFields_title';
  create?: Maybe<MediaFields_Title_Create>;
  delete?: Maybe<MediaFields_Title_Delete>;
  read?: Maybe<MediaFields_Title_Read>;
  update?: Maybe<MediaFields_Title_Update>;
};

export type MediaFields_Title_Create = {
  __typename?: 'MediaFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Title_Delete = {
  __typename?: 'MediaFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Title_Read = {
  __typename?: 'MediaFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Title_Update = {
  __typename?: 'MediaFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt = {
  __typename?: 'MediaFields_updatedAt';
  create?: Maybe<MediaFields_UpdatedAt_Create>;
  delete?: Maybe<MediaFields_UpdatedAt_Delete>;
  read?: Maybe<MediaFields_UpdatedAt_Read>;
  update?: Maybe<MediaFields_UpdatedAt_Update>;
};

export type MediaFields_UpdatedAt_Create = {
  __typename?: 'MediaFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Delete = {
  __typename?: 'MediaFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Read = {
  __typename?: 'MediaFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Update = {
  __typename?: 'MediaFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url = {
  __typename?: 'MediaFields_url';
  create?: Maybe<MediaFields_Url_Create>;
  delete?: Maybe<MediaFields_Url_Delete>;
  read?: Maybe<MediaFields_Url_Read>;
  update?: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  __typename?: 'MediaFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Delete = {
  __typename?: 'MediaFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Read = {
  __typename?: 'MediaFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Update = {
  __typename?: 'MediaFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width = {
  __typename?: 'MediaFields_width';
  create?: Maybe<MediaFields_Width_Create>;
  delete?: Maybe<MediaFields_Width_Delete>;
  read?: Maybe<MediaFields_Width_Read>;
  update?: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  __typename?: 'MediaFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Delete = {
  __typename?: 'MediaFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Read = {
  __typename?: 'MediaFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Update = {
  __typename?: 'MediaFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaReadAccess = {
  __typename?: 'MediaReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Media_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  title?: InputMaybe<Media_Title_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  title?: InputMaybe<Media_Title_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  title?: InputMaybe<Media_Title_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMedia?: Maybe<Media>;
  createPage?: Maybe<Page>;
  createPayloadPreference?: Maybe<PayloadPreference>;
  createRedirect?: Maybe<Redirect>;
  createUser?: Maybe<User>;
  deleteMedia?: Maybe<Media>;
  deletePage?: Maybe<Page>;
  deletePayloadPreference?: Maybe<PayloadPreference>;
  deleteRedirect?: Maybe<Redirect>;
  deleteUser?: Maybe<User>;
  forgotPasswordUser: Scalars['Boolean']['output'];
  loginUser?: Maybe<UsersLoginResult>;
  logoutUser?: Maybe<Scalars['String']['output']>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  restoreVersionHomePage?: Maybe<HomePage>;
  restoreVersionMainNavigation?: Maybe<MainNavigation>;
  restoreVersionPage?: Maybe<Page>;
  unlockUser: Scalars['Boolean']['output'];
  updateHomePage?: Maybe<HomePage>;
  updateMainNavigation?: Maybe<MainNavigation>;
  updateMedia?: Maybe<Media>;
  updatePage?: Maybe<Page>;
  updatePayloadPreference?: Maybe<PayloadPreference>;
  updateRedirect?: Maybe<Redirect>;
  updateUser?: Maybe<User>;
  verifyEmailUser?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreatePageArgs = {
  data: MutationPageInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateRedirectArgs = {
  data: MutationRedirectInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationDeleteMediaArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePageArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteRedirectArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  expiration?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationLoginUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRefreshTokenUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRestoreVersionHomePageArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRestoreVersionMainNavigationArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRestoreVersionPageArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateHomePageArgs = {
  data: MutationHomePageInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateMainNavigationArgs = {
  data: MutationMainNavigationInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationMediaUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdatePageArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPageUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdatePayloadPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadPreferenceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateRedirectArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationRedirectUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type Page = {
  __typename?: 'Page';
  _status?: Maybe<Page__Status>;
  content?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PageContentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


export type PageImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  where?: InputMaybe<Page_Image_Where>;
};

export enum PageUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type PageVersion = {
  __typename?: 'PageVersion';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  latest?: Maybe<Scalars['Boolean']['output']>;
  parent?: Maybe<Page>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<PageVersion_Version>;
};


export type PageVersionParentArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type PageVersion_Version = {
  __typename?: 'PageVersion_Version';
  _status?: Maybe<PageVersion_Version__Status>;
  content?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  image?: Maybe<Media>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PageVersion_VersionContentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


export type PageVersion_VersionImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  where?: InputMaybe<PageVersion_Version_Image_Where>;
};

export type PageVersion_Version_Image_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageVersion_Version_Image_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageVersion_Version_Image_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageVersion_Version_Image_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type PageVersion_Version_Image_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type PageVersion_Version_Image_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageVersion_Version_Image_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageVersion_Version_Image_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageVersion_Version_Image_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageVersion_Version_Image_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageVersion_Version_Image_Where = {
  AND?: InputMaybe<Array<InputMaybe<PageVersion_Version_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PageVersion_Version_Image_Where_Or>>>;
  alt?: InputMaybe<PageVersion_Version_Image_Alt_Operator>;
  createdAt?: InputMaybe<PageVersion_Version_Image_CreatedAt_Operator>;
  filename?: InputMaybe<PageVersion_Version_Image_Filename_Operator>;
  filesize?: InputMaybe<PageVersion_Version_Image_Filesize_Operator>;
  height?: InputMaybe<PageVersion_Version_Image_Height_Operator>;
  id?: InputMaybe<PageVersion_Version_Image_Id_Operator>;
  mimeType?: InputMaybe<PageVersion_Version_Image_MimeType_Operator>;
  title?: InputMaybe<PageVersion_Version_Image_Title_Operator>;
  updatedAt?: InputMaybe<PageVersion_Version_Image_UpdatedAt_Operator>;
  url?: InputMaybe<PageVersion_Version_Image_Url_Operator>;
  width?: InputMaybe<PageVersion_Version_Image_Width_Operator>;
};

export type PageVersion_Version_Image_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PageVersion_Version_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PageVersion_Version_Image_Where_Or>>>;
  alt?: InputMaybe<PageVersion_Version_Image_Alt_Operator>;
  createdAt?: InputMaybe<PageVersion_Version_Image_CreatedAt_Operator>;
  filename?: InputMaybe<PageVersion_Version_Image_Filename_Operator>;
  filesize?: InputMaybe<PageVersion_Version_Image_Filesize_Operator>;
  height?: InputMaybe<PageVersion_Version_Image_Height_Operator>;
  id?: InputMaybe<PageVersion_Version_Image_Id_Operator>;
  mimeType?: InputMaybe<PageVersion_Version_Image_MimeType_Operator>;
  title?: InputMaybe<PageVersion_Version_Image_Title_Operator>;
  updatedAt?: InputMaybe<PageVersion_Version_Image_UpdatedAt_Operator>;
  url?: InputMaybe<PageVersion_Version_Image_Url_Operator>;
  width?: InputMaybe<PageVersion_Version_Image_Width_Operator>;
};

export type PageVersion_Version_Image_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PageVersion_Version_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PageVersion_Version_Image_Where_Or>>>;
  alt?: InputMaybe<PageVersion_Version_Image_Alt_Operator>;
  createdAt?: InputMaybe<PageVersion_Version_Image_CreatedAt_Operator>;
  filename?: InputMaybe<PageVersion_Version_Image_Filename_Operator>;
  filesize?: InputMaybe<PageVersion_Version_Image_Filesize_Operator>;
  height?: InputMaybe<PageVersion_Version_Image_Height_Operator>;
  id?: InputMaybe<PageVersion_Version_Image_Id_Operator>;
  mimeType?: InputMaybe<PageVersion_Version_Image_MimeType_Operator>;
  title?: InputMaybe<PageVersion_Version_Image_Title_Operator>;
  updatedAt?: InputMaybe<PageVersion_Version_Image_UpdatedAt_Operator>;
  url?: InputMaybe<PageVersion_Version_Image_Url_Operator>;
  width?: InputMaybe<PageVersion_Version_Image_Width_Operator>;
};

export type PageVersion_Version_Image_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export enum PageVersion_Version__Status {
  Draft = 'draft',
  Published = 'published'
}

export type Page_Image_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Image_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page_Image_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Image_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Page_Image_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Page_Image_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Image_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Image_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Image_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page_Image_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Image_Where = {
  AND?: InputMaybe<Array<InputMaybe<Page_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Page_Image_Where_Or>>>;
  alt?: InputMaybe<Page_Image_Alt_Operator>;
  createdAt?: InputMaybe<Page_Image_CreatedAt_Operator>;
  filename?: InputMaybe<Page_Image_Filename_Operator>;
  filesize?: InputMaybe<Page_Image_Filesize_Operator>;
  height?: InputMaybe<Page_Image_Height_Operator>;
  id?: InputMaybe<Page_Image_Id_Operator>;
  mimeType?: InputMaybe<Page_Image_MimeType_Operator>;
  title?: InputMaybe<Page_Image_Title_Operator>;
  updatedAt?: InputMaybe<Page_Image_UpdatedAt_Operator>;
  url?: InputMaybe<Page_Image_Url_Operator>;
  width?: InputMaybe<Page_Image_Width_Operator>;
};

export type Page_Image_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Page_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Page_Image_Where_Or>>>;
  alt?: InputMaybe<Page_Image_Alt_Operator>;
  createdAt?: InputMaybe<Page_Image_CreatedAt_Operator>;
  filename?: InputMaybe<Page_Image_Filename_Operator>;
  filesize?: InputMaybe<Page_Image_Filesize_Operator>;
  height?: InputMaybe<Page_Image_Height_Operator>;
  id?: InputMaybe<Page_Image_Id_Operator>;
  mimeType?: InputMaybe<Page_Image_MimeType_Operator>;
  title?: InputMaybe<Page_Image_Title_Operator>;
  updatedAt?: InputMaybe<Page_Image_UpdatedAt_Operator>;
  url?: InputMaybe<Page_Image_Url_Operator>;
  width?: InputMaybe<Page_Image_Width_Operator>;
};

export type Page_Image_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Page_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Page_Image_Where_Or>>>;
  alt?: InputMaybe<Page_Image_Alt_Operator>;
  createdAt?: InputMaybe<Page_Image_CreatedAt_Operator>;
  filename?: InputMaybe<Page_Image_Filename_Operator>;
  filesize?: InputMaybe<Page_Image_Filesize_Operator>;
  height?: InputMaybe<Page_Image_Height_Operator>;
  id?: InputMaybe<Page_Image_Id_Operator>;
  mimeType?: InputMaybe<Page_Image_MimeType_Operator>;
  title?: InputMaybe<Page_Image_Title_Operator>;
  updatedAt?: InputMaybe<Page_Image_UpdatedAt_Operator>;
  url?: InputMaybe<Page_Image_Url_Operator>;
  width?: InputMaybe<Page_Image_Width_Operator>;
};

export type Page_Image_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export enum Page__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum Page__Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export enum Page__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type Page__Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Page__Status_Input>>>;
  equals?: InputMaybe<Page__Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Page__Status_Input>>>;
  not_equals?: InputMaybe<Page__Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Page__Status_Input>>>;
};

export type Page_Content_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type Page_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Image_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Page_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page_Where = {
  AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>;
  _status?: InputMaybe<Page__Status_Operator>;
  content?: InputMaybe<Page_Content_Operator>;
  createdAt?: InputMaybe<Page_CreatedAt_Operator>;
  id?: InputMaybe<Page_Id_Operator>;
  image?: InputMaybe<Page_Image_Operator>;
  slug?: InputMaybe<Page_Slug_Operator>;
  title?: InputMaybe<Page_Title_Operator>;
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Page_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>;
  _status?: InputMaybe<Page__Status_Operator>;
  content?: InputMaybe<Page_Content_Operator>;
  createdAt?: InputMaybe<Page_CreatedAt_Operator>;
  id?: InputMaybe<Page_Id_Operator>;
  image?: InputMaybe<Page_Image_Operator>;
  slug?: InputMaybe<Page_Slug_Operator>;
  title?: InputMaybe<Page_Title_Operator>;
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Page_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>;
  _status?: InputMaybe<Page__Status_Operator>;
  content?: InputMaybe<Page_Content_Operator>;
  createdAt?: InputMaybe<Page_CreatedAt_Operator>;
  id?: InputMaybe<Page_Id_Operator>;
  image?: InputMaybe<Page_Image_Operator>;
  slug?: InputMaybe<Page_Slug_Operator>;
  title?: InputMaybe<Page_Title_Operator>;
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Pages = {
  __typename?: 'Pages';
  docs?: Maybe<Array<Maybe<Page>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PagesCreateAccess = {
  __typename?: 'PagesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesCreateDocAccess = {
  __typename?: 'PagesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDeleteAccess = {
  __typename?: 'PagesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDeleteDocAccess = {
  __typename?: 'PagesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDocAccessFields = {
  __typename?: 'PagesDocAccessFields';
  _status?: Maybe<PagesDocAccessFields__Status>;
  content?: Maybe<PagesDocAccessFields_Content>;
  createdAt?: Maybe<PagesDocAccessFields_CreatedAt>;
  image?: Maybe<PagesDocAccessFields_Image>;
  slug?: Maybe<PagesDocAccessFields_Slug>;
  title?: Maybe<PagesDocAccessFields_Title>;
  updatedAt?: Maybe<PagesDocAccessFields_UpdatedAt>;
};

export type PagesDocAccessFields__Status = {
  __typename?: 'PagesDocAccessFields__status';
  create?: Maybe<PagesDocAccessFields__Status_Create>;
  delete?: Maybe<PagesDocAccessFields__Status_Delete>;
  read?: Maybe<PagesDocAccessFields__Status_Read>;
  update?: Maybe<PagesDocAccessFields__Status_Update>;
};

export type PagesDocAccessFields__Status_Create = {
  __typename?: 'PagesDocAccessFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields__Status_Delete = {
  __typename?: 'PagesDocAccessFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields__Status_Read = {
  __typename?: 'PagesDocAccessFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields__Status_Update = {
  __typename?: 'PagesDocAccessFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Content = {
  __typename?: 'PagesDocAccessFields_content';
  create?: Maybe<PagesDocAccessFields_Content_Create>;
  delete?: Maybe<PagesDocAccessFields_Content_Delete>;
  read?: Maybe<PagesDocAccessFields_Content_Read>;
  update?: Maybe<PagesDocAccessFields_Content_Update>;
};

export type PagesDocAccessFields_Content_Create = {
  __typename?: 'PagesDocAccessFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Content_Delete = {
  __typename?: 'PagesDocAccessFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Content_Read = {
  __typename?: 'PagesDocAccessFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Content_Update = {
  __typename?: 'PagesDocAccessFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt = {
  __typename?: 'PagesDocAccessFields_createdAt';
  create?: Maybe<PagesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PagesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PagesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PagesDocAccessFields_CreatedAt_Update>;
};

export type PagesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PagesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PagesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PagesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PagesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Image = {
  __typename?: 'PagesDocAccessFields_image';
  create?: Maybe<PagesDocAccessFields_Image_Create>;
  delete?: Maybe<PagesDocAccessFields_Image_Delete>;
  read?: Maybe<PagesDocAccessFields_Image_Read>;
  update?: Maybe<PagesDocAccessFields_Image_Update>;
};

export type PagesDocAccessFields_Image_Create = {
  __typename?: 'PagesDocAccessFields_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Image_Delete = {
  __typename?: 'PagesDocAccessFields_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Image_Read = {
  __typename?: 'PagesDocAccessFields_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Image_Update = {
  __typename?: 'PagesDocAccessFields_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug = {
  __typename?: 'PagesDocAccessFields_slug';
  create?: Maybe<PagesDocAccessFields_Slug_Create>;
  delete?: Maybe<PagesDocAccessFields_Slug_Delete>;
  read?: Maybe<PagesDocAccessFields_Slug_Read>;
  update?: Maybe<PagesDocAccessFields_Slug_Update>;
};

export type PagesDocAccessFields_Slug_Create = {
  __typename?: 'PagesDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug_Delete = {
  __typename?: 'PagesDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug_Read = {
  __typename?: 'PagesDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug_Update = {
  __typename?: 'PagesDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title = {
  __typename?: 'PagesDocAccessFields_title';
  create?: Maybe<PagesDocAccessFields_Title_Create>;
  delete?: Maybe<PagesDocAccessFields_Title_Delete>;
  read?: Maybe<PagesDocAccessFields_Title_Read>;
  update?: Maybe<PagesDocAccessFields_Title_Update>;
};

export type PagesDocAccessFields_Title_Create = {
  __typename?: 'PagesDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title_Delete = {
  __typename?: 'PagesDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title_Read = {
  __typename?: 'PagesDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title_Update = {
  __typename?: 'PagesDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt = {
  __typename?: 'PagesDocAccessFields_updatedAt';
  create?: Maybe<PagesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PagesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PagesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PagesDocAccessFields_UpdatedAt_Update>;
};

export type PagesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PagesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PagesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PagesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PagesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields = {
  __typename?: 'PagesFields';
  _status?: Maybe<PagesFields__Status>;
  content?: Maybe<PagesFields_Content>;
  createdAt?: Maybe<PagesFields_CreatedAt>;
  image?: Maybe<PagesFields_Image>;
  slug?: Maybe<PagesFields_Slug>;
  title?: Maybe<PagesFields_Title>;
  updatedAt?: Maybe<PagesFields_UpdatedAt>;
};

export type PagesFields__Status = {
  __typename?: 'PagesFields__status';
  create?: Maybe<PagesFields__Status_Create>;
  delete?: Maybe<PagesFields__Status_Delete>;
  read?: Maybe<PagesFields__Status_Read>;
  update?: Maybe<PagesFields__Status_Update>;
};

export type PagesFields__Status_Create = {
  __typename?: 'PagesFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields__Status_Delete = {
  __typename?: 'PagesFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields__Status_Read = {
  __typename?: 'PagesFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields__Status_Update = {
  __typename?: 'PagesFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Content = {
  __typename?: 'PagesFields_content';
  create?: Maybe<PagesFields_Content_Create>;
  delete?: Maybe<PagesFields_Content_Delete>;
  read?: Maybe<PagesFields_Content_Read>;
  update?: Maybe<PagesFields_Content_Update>;
};

export type PagesFields_Content_Create = {
  __typename?: 'PagesFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Content_Delete = {
  __typename?: 'PagesFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Content_Read = {
  __typename?: 'PagesFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Content_Update = {
  __typename?: 'PagesFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt = {
  __typename?: 'PagesFields_createdAt';
  create?: Maybe<PagesFields_CreatedAt_Create>;
  delete?: Maybe<PagesFields_CreatedAt_Delete>;
  read?: Maybe<PagesFields_CreatedAt_Read>;
  update?: Maybe<PagesFields_CreatedAt_Update>;
};

export type PagesFields_CreatedAt_Create = {
  __typename?: 'PagesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Delete = {
  __typename?: 'PagesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Read = {
  __typename?: 'PagesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Update = {
  __typename?: 'PagesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Image = {
  __typename?: 'PagesFields_image';
  create?: Maybe<PagesFields_Image_Create>;
  delete?: Maybe<PagesFields_Image_Delete>;
  read?: Maybe<PagesFields_Image_Read>;
  update?: Maybe<PagesFields_Image_Update>;
};

export type PagesFields_Image_Create = {
  __typename?: 'PagesFields_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Image_Delete = {
  __typename?: 'PagesFields_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Image_Read = {
  __typename?: 'PagesFields_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Image_Update = {
  __typename?: 'PagesFields_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug = {
  __typename?: 'PagesFields_slug';
  create?: Maybe<PagesFields_Slug_Create>;
  delete?: Maybe<PagesFields_Slug_Delete>;
  read?: Maybe<PagesFields_Slug_Read>;
  update?: Maybe<PagesFields_Slug_Update>;
};

export type PagesFields_Slug_Create = {
  __typename?: 'PagesFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug_Delete = {
  __typename?: 'PagesFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug_Read = {
  __typename?: 'PagesFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug_Update = {
  __typename?: 'PagesFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title = {
  __typename?: 'PagesFields_title';
  create?: Maybe<PagesFields_Title_Create>;
  delete?: Maybe<PagesFields_Title_Delete>;
  read?: Maybe<PagesFields_Title_Read>;
  update?: Maybe<PagesFields_Title_Update>;
};

export type PagesFields_Title_Create = {
  __typename?: 'PagesFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title_Delete = {
  __typename?: 'PagesFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title_Read = {
  __typename?: 'PagesFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title_Update = {
  __typename?: 'PagesFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt = {
  __typename?: 'PagesFields_updatedAt';
  create?: Maybe<PagesFields_UpdatedAt_Create>;
  delete?: Maybe<PagesFields_UpdatedAt_Delete>;
  read?: Maybe<PagesFields_UpdatedAt_Read>;
  update?: Maybe<PagesFields_UpdatedAt_Update>;
};

export type PagesFields_UpdatedAt_Create = {
  __typename?: 'PagesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Delete = {
  __typename?: 'PagesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Read = {
  __typename?: 'PagesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Update = {
  __typename?: 'PagesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesReadAccess = {
  __typename?: 'PagesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesReadDocAccess = {
  __typename?: 'PagesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesReadVersionsAccess = {
  __typename?: 'PagesReadVersionsAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesReadVersionsDocAccess = {
  __typename?: 'PagesReadVersionsDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesUpdateAccess = {
  __typename?: 'PagesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesUpdateDocAccess = {
  __typename?: 'PagesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreference = {
  __typename?: 'PayloadPreference';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: PayloadPreference_User_Relationship;
  value?: Maybe<Scalars['JSON']['output']>;
};


export type PayloadPreferenceUserArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadPreference_User = User;

export type PayloadPreference_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadPreference_User_RelationTo {
  Users = 'users'
}

export type PayloadPreference_User_Relationship = {
  __typename?: 'PayloadPreference_User_Relationship';
  relationTo?: Maybe<PayloadPreference_User_RelationTo>;
  value?: Maybe<PayloadPreference_User>;
};

export type PayloadPreference_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_Key_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_User_Relation = {
  relationTo?: InputMaybe<PayloadPreference_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadPreference_Value_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadPreference_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreferences = {
  __typename?: 'PayloadPreferences';
  docs?: Maybe<Array<Maybe<PayloadPreference>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PayloadPreferencesCreateAccess = {
  __typename?: 'PayloadPreferencesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesCreateDocAccess = {
  __typename?: 'PayloadPreferencesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteAccess = {
  __typename?: 'PayloadPreferencesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  __typename?: 'PayloadPreferencesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDocAccessFields = {
  __typename?: 'PayloadPreferencesDocAccessFields';
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesDocAccessFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesDocAccessFields_User>;
  value?: Maybe<PayloadPreferencesDocAccessFields_Value>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key = {
  __typename?: 'PayloadPreferencesDocAccessFields_key';
  create?: Maybe<PayloadPreferencesDocAccessFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Key_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Key_Update>;
};

export type PayloadPreferencesDocAccessFields_Key_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User = {
  __typename?: 'PayloadPreferencesDocAccessFields_user';
  create?: Maybe<PayloadPreferencesDocAccessFields_User_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_User_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_User_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_User_Update>;
};

export type PayloadPreferencesDocAccessFields_User_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value = {
  __typename?: 'PayloadPreferencesDocAccessFields_value';
  create?: Maybe<PayloadPreferencesDocAccessFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Value_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Value_Update>;
};

export type PayloadPreferencesDocAccessFields_Value_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields = {
  __typename?: 'PayloadPreferencesFields';
  createdAt?: Maybe<PayloadPreferencesFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesFields_User>;
  value?: Maybe<PayloadPreferencesFields_Value>;
};

export type PayloadPreferencesFields_CreatedAt = {
  __typename?: 'PayloadPreferencesFields_createdAt';
  create?: Maybe<PayloadPreferencesFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_CreatedAt_Update>;
};

export type PayloadPreferencesFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key = {
  __typename?: 'PayloadPreferencesFields_key';
  create?: Maybe<PayloadPreferencesFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesFields_Key_Read>;
  update?: Maybe<PayloadPreferencesFields_Key_Update>;
};

export type PayloadPreferencesFields_Key_Create = {
  __typename?: 'PayloadPreferencesFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Delete = {
  __typename?: 'PayloadPreferencesFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Read = {
  __typename?: 'PayloadPreferencesFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Update = {
  __typename?: 'PayloadPreferencesFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesFields_updatedAt';
  create?: Maybe<PayloadPreferencesFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_UpdatedAt_Update>;
};

export type PayloadPreferencesFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User = {
  __typename?: 'PayloadPreferencesFields_user';
  create?: Maybe<PayloadPreferencesFields_User_Create>;
  delete?: Maybe<PayloadPreferencesFields_User_Delete>;
  read?: Maybe<PayloadPreferencesFields_User_Read>;
  update?: Maybe<PayloadPreferencesFields_User_Update>;
};

export type PayloadPreferencesFields_User_Create = {
  __typename?: 'PayloadPreferencesFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Delete = {
  __typename?: 'PayloadPreferencesFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Read = {
  __typename?: 'PayloadPreferencesFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Update = {
  __typename?: 'PayloadPreferencesFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value = {
  __typename?: 'PayloadPreferencesFields_value';
  create?: Maybe<PayloadPreferencesFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesFields_Value_Read>;
  update?: Maybe<PayloadPreferencesFields_Value_Update>;
};

export type PayloadPreferencesFields_Value_Create = {
  __typename?: 'PayloadPreferencesFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Delete = {
  __typename?: 'PayloadPreferencesFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Read = {
  __typename?: 'PayloadPreferencesFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Update = {
  __typename?: 'PayloadPreferencesFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesReadAccess = {
  __typename?: 'PayloadPreferencesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesReadDocAccess = {
  __typename?: 'PayloadPreferencesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateAccess = {
  __typename?: 'PayloadPreferencesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  __typename?: 'PayloadPreferencesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Query = {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  HomePage?: Maybe<HomePage>;
  MainNavigation?: Maybe<MainNavigation>;
  Media?: Maybe<Media>;
  Page?: Maybe<Page>;
  Pages?: Maybe<Pages>;
  PayloadPreference?: Maybe<PayloadPreference>;
  PayloadPreferences?: Maybe<PayloadPreferences>;
  Redirect?: Maybe<Redirect>;
  Redirects?: Maybe<Redirects>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  allMedia?: Maybe<AllMedia>;
  docAccessHomePage?: Maybe<HomePageDocAccess>;
  docAccessMainNavigation?: Maybe<MainNavigationDocAccess>;
  docAccessMedia?: Maybe<MediaDocAccess>;
  docAccessPage?: Maybe<PagesDocAccess>;
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>;
  docAccessRedirect?: Maybe<RedirectsDocAccess>;
  docAccessUser?: Maybe<UsersDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']['output']>;
  meUser?: Maybe<UsersMe>;
  versionHomePage?: Maybe<HomePageVersion>;
  versionMainNavigation?: Maybe<MainNavigationVersion>;
  versionPage?: Maybe<PageVersion>;
  versionsHomePage?: Maybe<VersionsHomePage>;
  versionsMainNavigation?: Maybe<VersionsMainNavigation>;
  versionsPages?: Maybe<VersionsPages>;
};


export type QueryHomePageArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryMainNavigationArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryPageArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryPagesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Page_Where>;
};


export type QueryPayloadPreferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryRedirectArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryRedirectsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Redirect_Where>;
};


export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<User_Where>;
};


export type QueryAllMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryDocAccessMediaArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessPageArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessRedirectArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryVersionHomePageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryVersionMainNavigationArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryVersionPageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryVersionsHomePageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<VersionsHomePage_Where>;
};


export type QueryVersionsMainNavigationArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<VersionsMainNavigation_Where>;
};


export type QueryVersionsPagesArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<VersionsPage_Where>;
};

export type Redirect = {
  __typename?: 'Redirect';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  from: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Redirect_To>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RedirectUpdate_To_ReferenceRelationshipInput = {
  relationTo?: InputMaybe<RedirectUpdate_To_ReferenceRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum RedirectUpdate_To_ReferenceRelationshipInputRelationTo {
  Pages = 'pages'
}

export type Redirect_To = {
  __typename?: 'Redirect_To';
  reference?: Maybe<Redirect_To_Reference_Relationship>;
  type?: Maybe<Redirect_To_Type>;
  url?: Maybe<Scalars['String']['output']>;
};


export type Redirect_ToReferenceArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type Redirect_To_Reference = Page;

export type Redirect_To_ReferenceRelationshipInput = {
  relationTo?: InputMaybe<Redirect_To_ReferenceRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum Redirect_To_ReferenceRelationshipInputRelationTo {
  Pages = 'pages'
}

export enum Redirect_To_Reference_RelationTo {
  Pages = 'pages'
}

export type Redirect_To_Reference_Relationship = {
  __typename?: 'Redirect_To_Reference_Relationship';
  relationTo?: Maybe<Redirect_To_Reference_RelationTo>;
  value?: Maybe<Redirect_To_Reference>;
};

export enum Redirect_To_Type {
  Custom = 'custom',
  Reference = 'reference'
}

export type Redirect_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Redirect_From_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Redirect_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Redirect_To__Reference_Relation = {
  relationTo?: InputMaybe<Redirect_To__Reference_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum Redirect_To__Reference_Relation_RelationTo {
  Pages = 'pages'
}

export enum Redirect_To__Type_Input {
  Custom = 'custom',
  Reference = 'reference'
}

export type Redirect_To__Type_Operator = {
  contains?: InputMaybe<Redirect_To__Type_Input>;
  equals?: InputMaybe<Redirect_To__Type_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Redirect_To__Type_Input>;
  not_equals?: InputMaybe<Redirect_To__Type_Input>;
};

export type Redirect_To__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Redirect_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Redirect_Where = {
  AND?: InputMaybe<Array<InputMaybe<Redirect_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Redirect_Where_Or>>>;
  createdAt?: InputMaybe<Redirect_CreatedAt_Operator>;
  from?: InputMaybe<Redirect_From_Operator>;
  id?: InputMaybe<Redirect_Id_Operator>;
  to__reference?: InputMaybe<Redirect_To__Reference_Relation>;
  to__type?: InputMaybe<Redirect_To__Type_Operator>;
  to__url?: InputMaybe<Redirect_To__Url_Operator>;
  updatedAt?: InputMaybe<Redirect_UpdatedAt_Operator>;
};

export type Redirect_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Redirect_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Redirect_Where_Or>>>;
  createdAt?: InputMaybe<Redirect_CreatedAt_Operator>;
  from?: InputMaybe<Redirect_From_Operator>;
  id?: InputMaybe<Redirect_Id_Operator>;
  to__reference?: InputMaybe<Redirect_To__Reference_Relation>;
  to__type?: InputMaybe<Redirect_To__Type_Operator>;
  to__url?: InputMaybe<Redirect_To__Url_Operator>;
  updatedAt?: InputMaybe<Redirect_UpdatedAt_Operator>;
};

export type Redirect_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Redirect_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Redirect_Where_Or>>>;
  createdAt?: InputMaybe<Redirect_CreatedAt_Operator>;
  from?: InputMaybe<Redirect_From_Operator>;
  id?: InputMaybe<Redirect_Id_Operator>;
  to__reference?: InputMaybe<Redirect_To__Reference_Relation>;
  to__type?: InputMaybe<Redirect_To__Type_Operator>;
  to__url?: InputMaybe<Redirect_To__Url_Operator>;
  updatedAt?: InputMaybe<Redirect_UpdatedAt_Operator>;
};

export type Redirects = {
  __typename?: 'Redirects';
  docs?: Maybe<Array<Maybe<Redirect>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type RedirectsCreateAccess = {
  __typename?: 'RedirectsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type RedirectsCreateDocAccess = {
  __typename?: 'RedirectsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type RedirectsDeleteAccess = {
  __typename?: 'RedirectsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type RedirectsDeleteDocAccess = {
  __typename?: 'RedirectsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type RedirectsDocAccessFields = {
  __typename?: 'RedirectsDocAccessFields';
  createdAt?: Maybe<RedirectsDocAccessFields_CreatedAt>;
  from?: Maybe<RedirectsDocAccessFields_From>;
  to?: Maybe<RedirectsDocAccessFields_To>;
  updatedAt?: Maybe<RedirectsDocAccessFields_UpdatedAt>;
};

export type RedirectsDocAccessFields_CreatedAt = {
  __typename?: 'RedirectsDocAccessFields_createdAt';
  create?: Maybe<RedirectsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<RedirectsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<RedirectsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<RedirectsDocAccessFields_CreatedAt_Update>;
};

export type RedirectsDocAccessFields_CreatedAt_Create = {
  __typename?: 'RedirectsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'RedirectsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_CreatedAt_Read = {
  __typename?: 'RedirectsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_CreatedAt_Update = {
  __typename?: 'RedirectsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_From = {
  __typename?: 'RedirectsDocAccessFields_from';
  create?: Maybe<RedirectsDocAccessFields_From_Create>;
  delete?: Maybe<RedirectsDocAccessFields_From_Delete>;
  read?: Maybe<RedirectsDocAccessFields_From_Read>;
  update?: Maybe<RedirectsDocAccessFields_From_Update>;
};

export type RedirectsDocAccessFields_From_Create = {
  __typename?: 'RedirectsDocAccessFields_from_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_From_Delete = {
  __typename?: 'RedirectsDocAccessFields_from_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_From_Read = {
  __typename?: 'RedirectsDocAccessFields_from_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_From_Update = {
  __typename?: 'RedirectsDocAccessFields_from_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To = {
  __typename?: 'RedirectsDocAccessFields_to';
  create?: Maybe<RedirectsDocAccessFields_To_Create>;
  delete?: Maybe<RedirectsDocAccessFields_To_Delete>;
  fields?: Maybe<RedirectsDocAccessFields_To_Fields>;
  read?: Maybe<RedirectsDocAccessFields_To_Read>;
  update?: Maybe<RedirectsDocAccessFields_To_Update>;
};

export type RedirectsDocAccessFields_To_Create = {
  __typename?: 'RedirectsDocAccessFields_to_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Delete = {
  __typename?: 'RedirectsDocAccessFields_to_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Fields = {
  __typename?: 'RedirectsDocAccessFields_to_Fields';
  reference?: Maybe<RedirectsDocAccessFields_To_Reference>;
  type?: Maybe<RedirectsDocAccessFields_To_Type>;
  url?: Maybe<RedirectsDocAccessFields_To_Url>;
};

export type RedirectsDocAccessFields_To_Read = {
  __typename?: 'RedirectsDocAccessFields_to_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Update = {
  __typename?: 'RedirectsDocAccessFields_to_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Reference = {
  __typename?: 'RedirectsDocAccessFields_to_reference';
  create?: Maybe<RedirectsDocAccessFields_To_Reference_Create>;
  delete?: Maybe<RedirectsDocAccessFields_To_Reference_Delete>;
  read?: Maybe<RedirectsDocAccessFields_To_Reference_Read>;
  update?: Maybe<RedirectsDocAccessFields_To_Reference_Update>;
};

export type RedirectsDocAccessFields_To_Reference_Create = {
  __typename?: 'RedirectsDocAccessFields_to_reference_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Reference_Delete = {
  __typename?: 'RedirectsDocAccessFields_to_reference_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Reference_Read = {
  __typename?: 'RedirectsDocAccessFields_to_reference_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Reference_Update = {
  __typename?: 'RedirectsDocAccessFields_to_reference_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Type = {
  __typename?: 'RedirectsDocAccessFields_to_type';
  create?: Maybe<RedirectsDocAccessFields_To_Type_Create>;
  delete?: Maybe<RedirectsDocAccessFields_To_Type_Delete>;
  read?: Maybe<RedirectsDocAccessFields_To_Type_Read>;
  update?: Maybe<RedirectsDocAccessFields_To_Type_Update>;
};

export type RedirectsDocAccessFields_To_Type_Create = {
  __typename?: 'RedirectsDocAccessFields_to_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Type_Delete = {
  __typename?: 'RedirectsDocAccessFields_to_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Type_Read = {
  __typename?: 'RedirectsDocAccessFields_to_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Type_Update = {
  __typename?: 'RedirectsDocAccessFields_to_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Url = {
  __typename?: 'RedirectsDocAccessFields_to_url';
  create?: Maybe<RedirectsDocAccessFields_To_Url_Create>;
  delete?: Maybe<RedirectsDocAccessFields_To_Url_Delete>;
  read?: Maybe<RedirectsDocAccessFields_To_Url_Read>;
  update?: Maybe<RedirectsDocAccessFields_To_Url_Update>;
};

export type RedirectsDocAccessFields_To_Url_Create = {
  __typename?: 'RedirectsDocAccessFields_to_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Url_Delete = {
  __typename?: 'RedirectsDocAccessFields_to_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Url_Read = {
  __typename?: 'RedirectsDocAccessFields_to_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Url_Update = {
  __typename?: 'RedirectsDocAccessFields_to_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_UpdatedAt = {
  __typename?: 'RedirectsDocAccessFields_updatedAt';
  create?: Maybe<RedirectsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<RedirectsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<RedirectsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<RedirectsDocAccessFields_UpdatedAt_Update>;
};

export type RedirectsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'RedirectsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'RedirectsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'RedirectsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'RedirectsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields = {
  __typename?: 'RedirectsFields';
  createdAt?: Maybe<RedirectsFields_CreatedAt>;
  from?: Maybe<RedirectsFields_From>;
  to?: Maybe<RedirectsFields_To>;
  updatedAt?: Maybe<RedirectsFields_UpdatedAt>;
};

export type RedirectsFields_CreatedAt = {
  __typename?: 'RedirectsFields_createdAt';
  create?: Maybe<RedirectsFields_CreatedAt_Create>;
  delete?: Maybe<RedirectsFields_CreatedAt_Delete>;
  read?: Maybe<RedirectsFields_CreatedAt_Read>;
  update?: Maybe<RedirectsFields_CreatedAt_Update>;
};

export type RedirectsFields_CreatedAt_Create = {
  __typename?: 'RedirectsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_CreatedAt_Delete = {
  __typename?: 'RedirectsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_CreatedAt_Read = {
  __typename?: 'RedirectsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_CreatedAt_Update = {
  __typename?: 'RedirectsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_From = {
  __typename?: 'RedirectsFields_from';
  create?: Maybe<RedirectsFields_From_Create>;
  delete?: Maybe<RedirectsFields_From_Delete>;
  read?: Maybe<RedirectsFields_From_Read>;
  update?: Maybe<RedirectsFields_From_Update>;
};

export type RedirectsFields_From_Create = {
  __typename?: 'RedirectsFields_from_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_From_Delete = {
  __typename?: 'RedirectsFields_from_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_From_Read = {
  __typename?: 'RedirectsFields_from_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_From_Update = {
  __typename?: 'RedirectsFields_from_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To = {
  __typename?: 'RedirectsFields_to';
  create?: Maybe<RedirectsFields_To_Create>;
  delete?: Maybe<RedirectsFields_To_Delete>;
  fields?: Maybe<RedirectsFields_To_Fields>;
  read?: Maybe<RedirectsFields_To_Read>;
  update?: Maybe<RedirectsFields_To_Update>;
};

export type RedirectsFields_To_Create = {
  __typename?: 'RedirectsFields_to_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Delete = {
  __typename?: 'RedirectsFields_to_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Fields = {
  __typename?: 'RedirectsFields_to_Fields';
  reference?: Maybe<RedirectsFields_To_Reference>;
  type?: Maybe<RedirectsFields_To_Type>;
  url?: Maybe<RedirectsFields_To_Url>;
};

export type RedirectsFields_To_Read = {
  __typename?: 'RedirectsFields_to_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Update = {
  __typename?: 'RedirectsFields_to_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Reference = {
  __typename?: 'RedirectsFields_to_reference';
  create?: Maybe<RedirectsFields_To_Reference_Create>;
  delete?: Maybe<RedirectsFields_To_Reference_Delete>;
  read?: Maybe<RedirectsFields_To_Reference_Read>;
  update?: Maybe<RedirectsFields_To_Reference_Update>;
};

export type RedirectsFields_To_Reference_Create = {
  __typename?: 'RedirectsFields_to_reference_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Reference_Delete = {
  __typename?: 'RedirectsFields_to_reference_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Reference_Read = {
  __typename?: 'RedirectsFields_to_reference_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Reference_Update = {
  __typename?: 'RedirectsFields_to_reference_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Type = {
  __typename?: 'RedirectsFields_to_type';
  create?: Maybe<RedirectsFields_To_Type_Create>;
  delete?: Maybe<RedirectsFields_To_Type_Delete>;
  read?: Maybe<RedirectsFields_To_Type_Read>;
  update?: Maybe<RedirectsFields_To_Type_Update>;
};

export type RedirectsFields_To_Type_Create = {
  __typename?: 'RedirectsFields_to_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Type_Delete = {
  __typename?: 'RedirectsFields_to_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Type_Read = {
  __typename?: 'RedirectsFields_to_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Type_Update = {
  __typename?: 'RedirectsFields_to_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Url = {
  __typename?: 'RedirectsFields_to_url';
  create?: Maybe<RedirectsFields_To_Url_Create>;
  delete?: Maybe<RedirectsFields_To_Url_Delete>;
  read?: Maybe<RedirectsFields_To_Url_Read>;
  update?: Maybe<RedirectsFields_To_Url_Update>;
};

export type RedirectsFields_To_Url_Create = {
  __typename?: 'RedirectsFields_to_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Url_Delete = {
  __typename?: 'RedirectsFields_to_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Url_Read = {
  __typename?: 'RedirectsFields_to_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Url_Update = {
  __typename?: 'RedirectsFields_to_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_UpdatedAt = {
  __typename?: 'RedirectsFields_updatedAt';
  create?: Maybe<RedirectsFields_UpdatedAt_Create>;
  delete?: Maybe<RedirectsFields_UpdatedAt_Delete>;
  read?: Maybe<RedirectsFields_UpdatedAt_Read>;
  update?: Maybe<RedirectsFields_UpdatedAt_Update>;
};

export type RedirectsFields_UpdatedAt_Create = {
  __typename?: 'RedirectsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_UpdatedAt_Delete = {
  __typename?: 'RedirectsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_UpdatedAt_Read = {
  __typename?: 'RedirectsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_UpdatedAt_Update = {
  __typename?: 'RedirectsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsReadAccess = {
  __typename?: 'RedirectsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type RedirectsReadDocAccess = {
  __typename?: 'RedirectsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type RedirectsUpdateAccess = {
  __typename?: 'RedirectsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type RedirectsUpdateDocAccess = {
  __typename?: 'RedirectsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lockUntil?: Maybe<Scalars['DateTime']['output']>;
  loginAttempts?: Maybe<Scalars['Float']['output']>;
  password: Scalars['String']['output'];
  resetPasswordExpiration?: Maybe<Scalars['DateTime']['output']>;
  resetPasswordToken?: Maybe<Scalars['String']['output']>;
  salt?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type User_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs?: Maybe<Array<Maybe<User>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  createdAt?: Maybe<UsersDocAccessFields_CreatedAt>;
  email?: Maybe<UsersDocAccessFields_Email>;
  password?: Maybe<UsersDocAccessFields_Password>;
  updatedAt?: Maybe<UsersDocAccessFields_UpdatedAt>;
};

export type UsersDocAccessFields_CreatedAt = {
  __typename?: 'UsersDocAccessFields_createdAt';
  create?: Maybe<UsersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email = {
  __typename?: 'UsersDocAccessFields_email';
  create?: Maybe<UsersDocAccessFields_Email_Create>;
  delete?: Maybe<UsersDocAccessFields_Email_Delete>;
  read?: Maybe<UsersDocAccessFields_Email_Read>;
  update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password = {
  __typename?: 'UsersDocAccessFields_password';
  create?: Maybe<UsersDocAccessFields_Password_Create>;
  delete?: Maybe<UsersDocAccessFields_Password_Delete>;
  read?: Maybe<UsersDocAccessFields_Password_Read>;
  update?: Maybe<UsersDocAccessFields_Password_Update>;
};

export type UsersDocAccessFields_Password_Create = {
  __typename?: 'UsersDocAccessFields_password_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Delete = {
  __typename?: 'UsersDocAccessFields_password_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Read = {
  __typename?: 'UsersDocAccessFields_password_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Update = {
  __typename?: 'UsersDocAccessFields_password_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt = {
  __typename?: 'UsersDocAccessFields_updatedAt';
  create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UsersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UsersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UsersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields = {
  __typename?: 'UsersFields';
  createdAt?: Maybe<UsersFields_CreatedAt>;
  email?: Maybe<UsersFields_Email>;
  password?: Maybe<UsersFields_Password>;
  updatedAt?: Maybe<UsersFields_UpdatedAt>;
};

export type UsersFields_CreatedAt = {
  __typename?: 'UsersFields_createdAt';
  create?: Maybe<UsersFields_CreatedAt_Create>;
  delete?: Maybe<UsersFields_CreatedAt_Delete>;
  read?: Maybe<UsersFields_CreatedAt_Read>;
  update?: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
  __typename?: 'UsersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Delete = {
  __typename?: 'UsersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Read = {
  __typename?: 'UsersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Update = {
  __typename?: 'UsersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email = {
  __typename?: 'UsersFields_email';
  create?: Maybe<UsersFields_Email_Create>;
  delete?: Maybe<UsersFields_Email_Delete>;
  read?: Maybe<UsersFields_Email_Read>;
  update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password = {
  __typename?: 'UsersFields_password';
  create?: Maybe<UsersFields_Password_Create>;
  delete?: Maybe<UsersFields_Password_Delete>;
  read?: Maybe<UsersFields_Password_Read>;
  update?: Maybe<UsersFields_Password_Update>;
};

export type UsersFields_Password_Create = {
  __typename?: 'UsersFields_password_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Delete = {
  __typename?: 'UsersFields_password_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Read = {
  __typename?: 'UsersFields_password_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Update = {
  __typename?: 'UsersFields_password_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt = {
  __typename?: 'UsersFields_updatedAt';
  create?: Maybe<UsersFields_UpdatedAt_Create>;
  delete?: Maybe<UsersFields_UpdatedAt_Delete>;
  read?: Maybe<UsersFields_UpdatedAt_Read>;
  update?: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
  __typename?: 'UsersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Delete = {
  __typename?: 'UsersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Read = {
  __typename?: 'UsersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Update = {
  __typename?: 'UsersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AllMedia = {
  __typename?: 'allMedia';
  docs?: Maybe<Array<Maybe<Media>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type HomePageAccess = {
  __typename?: 'homePageAccess';
  fields?: Maybe<HomePageFields>;
  read?: Maybe<HomePageReadAccess>;
  readVersions?: Maybe<HomePageReadVersionsAccess>;
  update?: Maybe<HomePageUpdateAccess>;
};

export type HomePageDocAccess = {
  __typename?: 'homePageDocAccess';
  fields?: Maybe<HomePageDocAccessFields>;
  read?: Maybe<HomePageReadDocAccess>;
  readVersions?: Maybe<HomePageReadVersionsDocAccess>;
  update?: Maybe<HomePageUpdateDocAccess>;
};

export type MainNavigationAccess = {
  __typename?: 'mainNavigationAccess';
  fields?: Maybe<MainNavigationFields>;
  read?: Maybe<MainNavigationReadAccess>;
  readVersions?: Maybe<MainNavigationReadVersionsAccess>;
  update?: Maybe<MainNavigationUpdateAccess>;
};

export type MainNavigationDocAccess = {
  __typename?: 'mainNavigationDocAccess';
  fields?: Maybe<MainNavigationDocAccessFields>;
  read?: Maybe<MainNavigationReadDocAccess>;
  readVersions?: Maybe<MainNavigationReadVersionsDocAccess>;
  update?: Maybe<MainNavigationUpdateDocAccess>;
};

export type MediaAccess = {
  __typename?: 'mediaAccess';
  create?: Maybe<MediaCreateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
  fields?: Maybe<MediaFields>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
  __typename?: 'mediaDocAccess';
  create?: Maybe<MediaCreateDocAccess>;
  delete?: Maybe<MediaDeleteDocAccess>;
  fields?: Maybe<MediaDocAccessFields>;
  read?: Maybe<MediaReadDocAccess>;
  update?: Maybe<MediaUpdateDocAccess>;
};

export type MutationHomePageInput = {
  _status?: InputMaybe<HomePage__Status_MutationInput>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationMainNavigationInput = {
  _status?: InputMaybe<MainNavigation__Status_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<MutationMainNavigation_ItemsInput>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationMainNavigation_ItemsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type MutationMediaInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationPageInput = {
  _status?: InputMaybe<Page__Status_MutationInput>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPageUpdateInput = {
  _status?: InputMaybe<PageUpdate__Status_MutationInput>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPayloadPreferenceInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationPayloadPreferenceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationRedirectInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  from: Scalars['String']['input'];
  to: MutationRedirect_ToInput;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRedirectUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  to: MutationRedirectUpdate_ToInput;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRedirectUpdate_ToInput = {
  reference?: InputMaybe<RedirectUpdate_To_ReferenceRelationshipInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRedirect_ToInput = {
  reference?: InputMaybe<Redirect_To_ReferenceRelationshipInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password: Scalars['String']['input'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type PagesAccess = {
  __typename?: 'pagesAccess';
  create?: Maybe<PagesCreateAccess>;
  delete?: Maybe<PagesDeleteAccess>;
  fields?: Maybe<PagesFields>;
  read?: Maybe<PagesReadAccess>;
  readVersions?: Maybe<PagesReadVersionsAccess>;
  update?: Maybe<PagesUpdateAccess>;
};

export type PagesDocAccess = {
  __typename?: 'pagesDocAccess';
  create?: Maybe<PagesCreateDocAccess>;
  delete?: Maybe<PagesDeleteDocAccess>;
  fields?: Maybe<PagesDocAccessFields>;
  read?: Maybe<PagesReadDocAccess>;
  readVersions?: Maybe<PagesReadVersionsDocAccess>;
  update?: Maybe<PagesUpdateDocAccess>;
};

export type Payload_PreferencesAccess = {
  __typename?: 'payload_preferencesAccess';
  create?: Maybe<PayloadPreferencesCreateAccess>;
  delete?: Maybe<PayloadPreferencesDeleteAccess>;
  fields?: Maybe<PayloadPreferencesFields>;
  read?: Maybe<PayloadPreferencesReadAccess>;
  update?: Maybe<PayloadPreferencesUpdateAccess>;
};

export type Payload_PreferencesDocAccess = {
  __typename?: 'payload_preferencesDocAccess';
  create?: Maybe<PayloadPreferencesCreateDocAccess>;
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
  fields?: Maybe<PayloadPreferencesDocAccessFields>;
  read?: Maybe<PayloadPreferencesReadDocAccess>;
  update?: Maybe<PayloadPreferencesUpdateDocAccess>;
};

export type RedirectsAccess = {
  __typename?: 'redirectsAccess';
  create?: Maybe<RedirectsCreateAccess>;
  delete?: Maybe<RedirectsDeleteAccess>;
  fields?: Maybe<RedirectsFields>;
  read?: Maybe<RedirectsReadAccess>;
  update?: Maybe<RedirectsUpdateAccess>;
};

export type RedirectsDocAccess = {
  __typename?: 'redirectsDocAccess';
  create?: Maybe<RedirectsCreateDocAccess>;
  delete?: Maybe<RedirectsDeleteDocAccess>;
  fields?: Maybe<RedirectsDocAccessFields>;
  read?: Maybe<RedirectsReadDocAccess>;
  update?: Maybe<RedirectsUpdateDocAccess>;
};

export type UsersAccess = {
  __typename?: 'usersAccess';
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  __typename?: 'usersDocAccess';
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  __typename?: 'usersJWT';
  collection: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
};

export type UsersLoginResult = {
  __typename?: 'usersLoginResult';
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersMe = {
  __typename?: 'usersMe';
  collection?: Maybe<Scalars['String']['output']>;
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<Scalars['Int']['output']>;
  refreshedToken?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  __typename?: 'usersResetPassword';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type VersionsHomePage = {
  __typename?: 'versionsHomePage';
  docs?: Maybe<Array<Maybe<HomePageVersion>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type VersionsHomePage_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsHomePage_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsHomePage_Latest_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsHomePage_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum VersionsHomePage_Version___Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export type VersionsHomePage_Version___Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsHomePage_Version___Status_Input>>>;
  equals?: InputMaybe<VersionsHomePage_Version___Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<VersionsHomePage_Version___Status_Input>>>;
  not_equals?: InputMaybe<VersionsHomePage_Version___Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsHomePage_Version___Status_Input>>>;
};

export type VersionsHomePage_Version__Content_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type VersionsHomePage_Version__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsHomePage_Version__Image_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type VersionsHomePage_Version__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsHomePage_Version__UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsHomePage_Where = {
  AND?: InputMaybe<Array<InputMaybe<VersionsHomePage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsHomePage_Where_Or>>>;
  createdAt?: InputMaybe<VersionsHomePage_CreatedAt_Operator>;
  id?: InputMaybe<VersionsHomePage_Id_Operator>;
  latest?: InputMaybe<VersionsHomePage_Latest_Operator>;
  updatedAt?: InputMaybe<VersionsHomePage_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsHomePage_Version___Status_Operator>;
  version__content?: InputMaybe<VersionsHomePage_Version__Content_Operator>;
  version__createdAt?: InputMaybe<VersionsHomePage_Version__CreatedAt_Operator>;
  version__image?: InputMaybe<VersionsHomePage_Version__Image_Operator>;
  version__title?: InputMaybe<VersionsHomePage_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsHomePage_Version__UpdatedAt_Operator>;
};

export type VersionsHomePage_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<VersionsHomePage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsHomePage_Where_Or>>>;
  createdAt?: InputMaybe<VersionsHomePage_CreatedAt_Operator>;
  id?: InputMaybe<VersionsHomePage_Id_Operator>;
  latest?: InputMaybe<VersionsHomePage_Latest_Operator>;
  updatedAt?: InputMaybe<VersionsHomePage_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsHomePage_Version___Status_Operator>;
  version__content?: InputMaybe<VersionsHomePage_Version__Content_Operator>;
  version__createdAt?: InputMaybe<VersionsHomePage_Version__CreatedAt_Operator>;
  version__image?: InputMaybe<VersionsHomePage_Version__Image_Operator>;
  version__title?: InputMaybe<VersionsHomePage_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsHomePage_Version__UpdatedAt_Operator>;
};

export type VersionsHomePage_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<VersionsHomePage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsHomePage_Where_Or>>>;
  createdAt?: InputMaybe<VersionsHomePage_CreatedAt_Operator>;
  id?: InputMaybe<VersionsHomePage_Id_Operator>;
  latest?: InputMaybe<VersionsHomePage_Latest_Operator>;
  updatedAt?: InputMaybe<VersionsHomePage_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsHomePage_Version___Status_Operator>;
  version__content?: InputMaybe<VersionsHomePage_Version__Content_Operator>;
  version__createdAt?: InputMaybe<VersionsHomePage_Version__CreatedAt_Operator>;
  version__image?: InputMaybe<VersionsHomePage_Version__Image_Operator>;
  version__title?: InputMaybe<VersionsHomePage_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsHomePage_Version__UpdatedAt_Operator>;
};

export type VersionsMainNavigation = {
  __typename?: 'versionsMainNavigation';
  docs?: Maybe<Array<Maybe<MainNavigationVersion>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type VersionsMainNavigation_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsMainNavigation_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsMainNavigation_Latest_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsMainNavigation_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum VersionsMainNavigation_Version___Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export type VersionsMainNavigation_Version___Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsMainNavigation_Version___Status_Input>>>;
  equals?: InputMaybe<VersionsMainNavigation_Version___Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<VersionsMainNavigation_Version___Status_Input>>>;
  not_equals?: InputMaybe<VersionsMainNavigation_Version___Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsMainNavigation_Version___Status_Input>>>;
};

export type VersionsMainNavigation_Version__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsMainNavigation_Version__Items__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsMainNavigation_Version__Items__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsMainNavigation_Version__Items__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsMainNavigation_Version__UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsMainNavigation_Where = {
  AND?: InputMaybe<Array<InputMaybe<VersionsMainNavigation_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsMainNavigation_Where_Or>>>;
  createdAt?: InputMaybe<VersionsMainNavigation_CreatedAt_Operator>;
  id?: InputMaybe<VersionsMainNavigation_Id_Operator>;
  latest?: InputMaybe<VersionsMainNavigation_Latest_Operator>;
  updatedAt?: InputMaybe<VersionsMainNavigation_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsMainNavigation_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsMainNavigation_Version__CreatedAt_Operator>;
  version__items__id?: InputMaybe<VersionsMainNavigation_Version__Items__Id_Operator>;
  version__items__title?: InputMaybe<VersionsMainNavigation_Version__Items__Title_Operator>;
  version__items__url?: InputMaybe<VersionsMainNavigation_Version__Items__Url_Operator>;
  version__updatedAt?: InputMaybe<VersionsMainNavigation_Version__UpdatedAt_Operator>;
};

export type VersionsMainNavigation_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<VersionsMainNavigation_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsMainNavigation_Where_Or>>>;
  createdAt?: InputMaybe<VersionsMainNavigation_CreatedAt_Operator>;
  id?: InputMaybe<VersionsMainNavigation_Id_Operator>;
  latest?: InputMaybe<VersionsMainNavigation_Latest_Operator>;
  updatedAt?: InputMaybe<VersionsMainNavigation_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsMainNavigation_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsMainNavigation_Version__CreatedAt_Operator>;
  version__items__id?: InputMaybe<VersionsMainNavigation_Version__Items__Id_Operator>;
  version__items__title?: InputMaybe<VersionsMainNavigation_Version__Items__Title_Operator>;
  version__items__url?: InputMaybe<VersionsMainNavigation_Version__Items__Url_Operator>;
  version__updatedAt?: InputMaybe<VersionsMainNavigation_Version__UpdatedAt_Operator>;
};

export type VersionsMainNavigation_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<VersionsMainNavigation_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsMainNavigation_Where_Or>>>;
  createdAt?: InputMaybe<VersionsMainNavigation_CreatedAt_Operator>;
  id?: InputMaybe<VersionsMainNavigation_Id_Operator>;
  latest?: InputMaybe<VersionsMainNavigation_Latest_Operator>;
  updatedAt?: InputMaybe<VersionsMainNavigation_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsMainNavigation_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsMainNavigation_Version__CreatedAt_Operator>;
  version__items__id?: InputMaybe<VersionsMainNavigation_Version__Items__Id_Operator>;
  version__items__title?: InputMaybe<VersionsMainNavigation_Version__Items__Title_Operator>;
  version__items__url?: InputMaybe<VersionsMainNavigation_Version__Items__Url_Operator>;
  version__updatedAt?: InputMaybe<VersionsMainNavigation_Version__UpdatedAt_Operator>;
};

export type VersionsPage_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPage_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPage_Latest_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsPage_Parent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type VersionsPage_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum VersionsPage_Version___Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export type VersionsPage_Version___Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsPage_Version___Status_Input>>>;
  equals?: InputMaybe<VersionsPage_Version___Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<VersionsPage_Version___Status_Input>>>;
  not_equals?: InputMaybe<VersionsPage_Version___Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsPage_Version___Status_Input>>>;
};

export type VersionsPage_Version__Content_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type VersionsPage_Version__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPage_Version__Image_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type VersionsPage_Version__Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPage_Version__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPage_Version__UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPage_Where = {
  AND?: InputMaybe<Array<InputMaybe<VersionsPage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsPage_Where_Or>>>;
  createdAt?: InputMaybe<VersionsPage_CreatedAt_Operator>;
  id?: InputMaybe<VersionsPage_Id_Operator>;
  latest?: InputMaybe<VersionsPage_Latest_Operator>;
  parent?: InputMaybe<VersionsPage_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsPage_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPage_Version___Status_Operator>;
  version__content?: InputMaybe<VersionsPage_Version__Content_Operator>;
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>;
  version__image?: InputMaybe<VersionsPage_Version__Image_Operator>;
  version__slug?: InputMaybe<VersionsPage_Version__Slug_Operator>;
  version__title?: InputMaybe<VersionsPage_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsPage_Version__UpdatedAt_Operator>;
};

export type VersionsPage_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<VersionsPage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsPage_Where_Or>>>;
  createdAt?: InputMaybe<VersionsPage_CreatedAt_Operator>;
  id?: InputMaybe<VersionsPage_Id_Operator>;
  latest?: InputMaybe<VersionsPage_Latest_Operator>;
  parent?: InputMaybe<VersionsPage_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsPage_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPage_Version___Status_Operator>;
  version__content?: InputMaybe<VersionsPage_Version__Content_Operator>;
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>;
  version__image?: InputMaybe<VersionsPage_Version__Image_Operator>;
  version__slug?: InputMaybe<VersionsPage_Version__Slug_Operator>;
  version__title?: InputMaybe<VersionsPage_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsPage_Version__UpdatedAt_Operator>;
};

export type VersionsPage_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<VersionsPage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsPage_Where_Or>>>;
  createdAt?: InputMaybe<VersionsPage_CreatedAt_Operator>;
  id?: InputMaybe<VersionsPage_Id_Operator>;
  latest?: InputMaybe<VersionsPage_Latest_Operator>;
  parent?: InputMaybe<VersionsPage_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsPage_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPage_Version___Status_Operator>;
  version__content?: InputMaybe<VersionsPage_Version__Content_Operator>;
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>;
  version__image?: InputMaybe<VersionsPage_Version__Image_Operator>;
  version__slug?: InputMaybe<VersionsPage_Version__Slug_Operator>;
  version__title?: InputMaybe<VersionsPage_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsPage_Version__UpdatedAt_Operator>;
};

export type VersionsPages = {
  __typename?: 'versionsPages';
  docs?: Maybe<Array<Maybe<PageVersion>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ImageFragment = { __typename?: 'Media', id?: string | null, title?: string | null, url?: string | null, alt?: string | null, mimeType?: string | null };

export type NavigationItemFragment = { __typename?: 'MainNavigation_Items', id?: string | null, title?: string | null, url: string };

export type HomePageQueryVariables = Exact<{
  locale: LocaleInputType;
}>;


export type HomePageQuery = { __typename?: 'Query', HomePage?: { __typename?: 'HomePage', title?: string | null, content?: any | null, updatedAt?: any | null, image?: { __typename?: 'Media', id?: string | null, title?: string | null, url?: string | null, alt?: string | null, mimeType?: string | null } | null } | null };

export type MainNavigationQueryVariables = Exact<{
  locale: LocaleInputType;
}>;


export type MainNavigationQuery = { __typename?: 'Query', MainNavigation?: { __typename?: 'MainNavigation', updatedAt?: any | null, items: Array<{ __typename?: 'MainNavigation_Items', id?: string | null, title?: string | null, url: string }> } | null };

export type PageQueryVariables = Exact<{
  locale: LocaleInputType;
  id: Scalars['String']['input'];
}>;


export type PageQuery = { __typename?: 'Query', Page?: { __typename?: 'Page', title?: string | null, slug?: string | null, content?: any | null, updatedAt?: any | null, image?: { __typename?: 'Media', id?: string | null, title?: string | null, url?: string | null, alt?: string | null, mimeType?: string | null } | null } | null };

export type RedirectQueryVariables = Exact<{
  path: Scalars['String']['input'];
}>;


export type RedirectQuery = { __typename?: 'Query', Redirects?: { __typename?: 'Redirects', docs?: Array<{ __typename?: 'Redirect', id?: string | null, from: string, createdAt?: any | null, updatedAt?: any | null, to?: { __typename: 'Redirect_To', url?: string | null, reference?: { __typename?: 'Redirect_To_Reference_Relationship', relationTo?: Redirect_To_Reference_RelationTo | null, value?: { __typename: 'Page', id?: string | null, slug?: string | null } | null } | null } | null } | null> | null } | null };

export const ImageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]} as unknown as DocumentNode<ImageFragment, unknown>;
export const NavigationItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MainNavigation_Items"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]} as unknown as DocumentNode<NavigationItemFragment, unknown>;
export const HomePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomePage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LocaleInputType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"HomePage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draft"},"value":{"kind":"BooleanValue","value":false}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]} as unknown as DocumentNode<HomePageQuery, HomePageQueryVariables>;
export const MainNavigationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MainNavigation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LocaleInputType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"MainNavigation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draft"},"value":{"kind":"BooleanValue","value":false}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationItem"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MainNavigation_Items"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]} as unknown as DocumentNode<MainNavigationQuery, MainNavigationQueryVariables>;
export const PageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Page"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LocaleInputType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draft"},"value":{"kind":"BooleanValue","value":false}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]} as unknown as DocumentNode<PageQuery, PageQueryVariables>;
export const RedirectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Redirect"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Redirects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"from"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"reference"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"relationTo"}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<RedirectQuery, RedirectQueryVariables>;