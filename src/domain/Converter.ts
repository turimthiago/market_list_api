export interface Convert<F, T> {
  convert(entity: F): T;
}
