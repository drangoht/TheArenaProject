type Link<T> = {
	data: T,
	next: Link<T> | null
}
