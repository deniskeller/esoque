export interface IPageData {
  blocks: { [key: string]: string | { [key: string]: string | number }[] }[];
}
