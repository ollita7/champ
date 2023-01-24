export interface IDispatch {
  type: string;
  payload: any;
}

export interface IStoreDispatchProps {
  dispatch: (d: IDispatch) => void;
}
