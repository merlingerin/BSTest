import { get } from "lodash";

export const getIsLoading = (state: any, pathToReducer: string) =>
	get(state, `${pathToReducer}.isLoading`, false);
export const getListData = (state: any, pathToReducer: string) =>
	get(state, `${pathToReducer}.data`, []);
export const getError = (state: any, pathToReducer: string) =>
	get(state, `${pathToReducer}.error`, {});
