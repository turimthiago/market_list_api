export interface Convert<F, T> {
  fromEntity(entity: F): T;
  fromList(entityList: Array<F>): Array<T>;
}
