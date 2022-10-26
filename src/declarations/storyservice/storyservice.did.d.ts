import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export type AttributeKey = string;
export type AttributeValue = { 'int' : bigint } |
  { 'float' : number } |
  { 'tuple' : Array<AttributeValuePrimitive> } |
  { 'blob' : Array<number> } |
  { 'bool' : boolean } |
  { 'text' : string } |
  { 'tree' : Tree } |
  { 'arrayBool' : Array<boolean> } |
  { 'arrayText' : Array<string> } |
  { 'arrayInt' : Array<bigint> } |
  { 'arrayFloat' : Array<number> };
export type AttributeValuePrimitive = { 'int' : bigint } |
  { 'float' : number } |
  { 'bool' : boolean } |
  { 'text' : string };
export type AttributeValueRBTreeValue = { 'int' : bigint } |
  { 'float' : number } |
  { 'tuple' : Array<AttributeValuePrimitive> } |
  { 'blob' : Array<number> } |
  { 'bool' : boolean } |
  { 'text' : string } |
  { 'arrayBool' : Array<boolean> } |
  { 'arrayText' : Array<string> } |
  { 'arrayInt' : Array<bigint> } |
  { 'arrayFloat' : Array<number> };
export type AutoScalingCanisterSharedFunctionHook = ActorMethod<
  [string],
  string,
>;
export type Color = { 'B' : null } |
  { 'R' : null };
export interface ConsumableEntity {
  'pk' : PK,
  'sk' : SK,
  'attributes' : Array<[AttributeKey, AttributeValue]>,
}
export type PK = string;
export type Result = { 'ok' : [] | [ConsumableEntity] } |
  { 'err' : string };
export type Result_1 = { 'ok' : [] | [VotingProposal] } |
  { 'err' : string };
export type SK = string;
export type ScalingLimitType = { 'heapSize' : bigint } |
  { 'count' : bigint };
export interface ScalingOptions {
  'autoScalingHook' : AutoScalingCanisterSharedFunctionHook,
  'sizeLimit' : ScalingLimitType,
}
export interface ScanStoriesQuickElement {
  'sortKey' : string,
  'genre' : string,
  'groupName' : string,
}
export interface ScanStoriesQuickReturn {
  'stories' : Array<ScanStoriesQuickElement>,
  'nextKey' : [] | [string],
}
export interface SingleStory {
  'title' : string,
  'views' : bigint,
  'body' : string,
  'author' : string,
  'likes' : bigint,
  'genre' : string,
  'proposals' : bigint,
  'groupName' : string,
}
export interface StoryService {
  'checkIfVoted' : ActorMethod<[string], boolean>,
  'closeProposals' : ActorMethod<[string], string>,
  'getPK' : ActorMethod<[], string>,
  'getProposal' : ActorMethod<[string], Result_1>,
  'getStory' : ActorMethod<[string], [] | [SingleStory]>,
  'likeStory' : ActorMethod<[string], Result>,
  'putStory' : ActorMethod<[SingleStory, Array<VotingProposal>], string>,
  'scanAllStories' : ActorMethod<
    [string, string, bigint, [] | [boolean]],
    ScanStoriesQuickReturn,
  >,
  'skExists' : ActorMethod<[string], boolean>,
  'transferCycles' : ActorMethod<[], undefined>,
  'voteOnProposal' : ActorMethod<[string, string], Result>,
  'whoami' : ActorMethod<[], Principal>,
}
export type Tree = { 'leaf' : null } |
  { 'node' : [Color, Tree, [string, [] | [AttributeValueRBTreeValue]], Tree] };
export interface VotingProposal {
  'title' : string,
  'votes' : bigint,
  'body' : string,
  'open' : boolean,
  'proposalNumber' : bigint,
}
export interface _SERVICE extends StoryService {}
