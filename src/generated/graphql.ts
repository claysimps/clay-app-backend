import * as TypeGraphQL from 'type-graphql';
export { TypeGraphQL };
import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type FixDecorator<T> = T;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  getProjects: Array<PortfolioPayload>;
  getBooks: Array<BookPayload>;
};


@TypeGraphQL.ArgsType()
export class QueryGetProjectsArgs {

  @TypeGraphQL.Field(type => String)
  data!: Scalars['String'];
};


@TypeGraphQL.ArgsType()
export class QueryGetBooksArgs {

  @TypeGraphQL.Field(type => String)
  data!: Scalars['String'];
};

@TypeGraphQL.ObjectType({ description: 'This is the portfolio payload' })
export class PortfolioPayload {
  __typename?: 'PortfolioPayload';

  @TypeGraphQL.Field(type => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field(type => String, { nullable: true })
  queryType!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  projectName!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String)
  headerTitle!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  headerBody!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  headerFooter!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  cardBodyText!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  buttonOptionOne!: Scalars['String'];

  @TypeGraphQL.Field(type => String, { nullable: true })
  buttonOptionTwo!: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType({ description: 'This is the Book payload' })
export class BookPayload {
  __typename?: 'BookPayload';

  @TypeGraphQL.Field(type => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field(type => String, { nullable: true })
  queryType!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String)
  title!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  author!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  classification!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  bookUrl!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  synopsis!: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addProject: SuccessPayload;
  addBook: SuccessPayload;
};


@TypeGraphQL.ArgsType()
export class MutationAddProjectArgs {

  @TypeGraphQL.Field(type => PortfolioInput)
  data!: FixDecorator<PortfolioInput>;
};


@TypeGraphQL.ArgsType()
export class MutationAddBookArgs {

  @TypeGraphQL.Field(type => BookInput)
  data!: FixDecorator<BookInput>;
};

@TypeGraphQL.ObjectType({ description: 'confirms upload' })
export class SuccessPayload {
  __typename?: 'SuccessPayload';

  @TypeGraphQL.Field(type => String)
  successMessage!: Scalars['String'];
};

@TypeGraphQL.InputType({ description: 'Portfolio input' })
export class PortfolioInput {

  @TypeGraphQL.Field(type => String)
  queryType!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  projectName!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  headerTitle!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  headerBody!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  headerFooter!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  cardBodyText!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  buttonOptionOne!: Scalars['String'];

  @TypeGraphQL.Field(type => String, { nullable: true })
  buttonOptionTwo!: Maybe<Scalars['String']>;
};

@TypeGraphQL.InputType({ description: 'Portfolio input' })
export class BookInput {

  @TypeGraphQL.Field(type => String)
  queryType!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  title!: Scalars['String'];

  @TypeGraphQL.Field(type => String)
  author!: Scalars['String'];

  @TypeGraphQL.Field(type => String, { nullable: true })
  classification!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  bookUrl!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  synopsis!: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  PortfolioPayload: ResolverTypeWrapper<PortfolioPayload>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  BookPayload: ResolverTypeWrapper<BookPayload>;
  Mutation: ResolverTypeWrapper<{}>;
  SuccessPayload: ResolverTypeWrapper<SuccessPayload>;
  PortfolioInput: PortfolioInput;
  BookInput: BookInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  String: Scalars['String'];
  PortfolioPayload: PortfolioPayload;
  ID: Scalars['ID'];
  BookPayload: BookPayload;
  Mutation: {};
  SuccessPayload: SuccessPayload;
  PortfolioInput: PortfolioInput;
  BookInput: BookInput;
  Boolean: Scalars['Boolean'];
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getProjects?: Resolver<Array<ResolversTypes['PortfolioPayload']>, ParentType, ContextType, RequireFields<QueryGetProjectsArgs, 'data'>>;
  getBooks?: Resolver<Array<ResolversTypes['BookPayload']>, ParentType, ContextType, RequireFields<QueryGetBooksArgs, 'data'>>;
};

export type PortfolioPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['PortfolioPayload'] = ResolversParentTypes['PortfolioPayload']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  queryType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  projectName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  headerTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  headerBody?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  headerFooter?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cardBodyText?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  buttonOptionOne?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  buttonOptionTwo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookPayload'] = ResolversParentTypes['BookPayload']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  queryType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  author?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  classification?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bookUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  synopsis?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addProject?: Resolver<ResolversTypes['SuccessPayload'], ParentType, ContextType, RequireFields<MutationAddProjectArgs, 'data'>>;
  addBook?: Resolver<ResolversTypes['SuccessPayload'], ParentType, ContextType, RequireFields<MutationAddBookArgs, 'data'>>;
};

export type SuccessPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['SuccessPayload'] = ResolversParentTypes['SuccessPayload']> = {
  successMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  PortfolioPayload?: PortfolioPayloadResolvers<ContextType>;
  BookPayload?: BookPayloadResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  SuccessPayload?: SuccessPayloadResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
