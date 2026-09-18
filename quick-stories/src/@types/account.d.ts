export default interface IAccountFields {
  id: string | number;
  name: string;
  hasStories?: boolean;
  isStoryViewed?: boolean;
  stories?: string[];
}
