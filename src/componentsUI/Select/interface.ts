import { JSXElement } from '@babel/types';

export interface ISelectProps<T> {
	name: string;
	id?: string;
	options?: T[];
	onChange: (value: any) => void;
	renderItem: React.FC<any>;
}

export interface ISelectValue {
	name: string;
	value: string;
}
