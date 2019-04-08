export interface gutterType {
  gutter: number | {
       xs?: number;
       sm?: number;
       md?: number;
       lg?: number;
       xl?: number;
       xxl?: number;
  }
} 

export interface IBaseColProps {
    offset?: number;
    order?: number;
    pull?: number;
    push?: number;
    span?: number;
}