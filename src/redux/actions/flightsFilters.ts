import * as filterTypes from '../actionTypes';

export const setFilter = (filter: { name: string; value: string }) => ({ type: filterTypes.setFilter, payload: { ...filter } });

export const removeFilter = (filter: { name: string; value: string }) => ({ type: filterTypes.removeFilter, payload: { ...filter } });

export const resetFilters = (filter: { name: string; value: string }) => ({ type: filterTypes.resetFilters, payload: { ...filter } });
