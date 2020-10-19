export interface INDICATORS {
  id: string;
  name: string;
  unit: string;
  source: TopicsEntityOrSource;
  sourceNote: string;
  sourceOrganization: string;
  topics?: (TopicsEntity | null)[] | null;
}
export interface TopicsEntityOrSource {
  id: string;
  value: string;
}
export interface TopicsEntity {
  id?: string | null;
  value?: string | null;
}
export interface INDICATORSEntity2 {
  id: string;
  value: string;
}
export interface INDICATORSEntity3 {
  id?: string | null;
  value?: string | null;
}
