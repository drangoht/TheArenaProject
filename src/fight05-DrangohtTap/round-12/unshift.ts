type Link<T> = {
	data: T,
	next: Link<T> | null
}

type UnshiftFn = <T> (begin: Link<T>|null, data: T) => Link<T>

export const unshift : UnshiftFn = <T> (begin: Link<T>|null, data: T) : Link<T> => {
	return {data:data,next:begin};
}