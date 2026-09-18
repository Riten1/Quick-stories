export default interface IAccountFields {
  id: string | number;
  name: string;
  hasStories?: boolean;
  isStoryViewd?: boolean;
  stories?: string[];
}
