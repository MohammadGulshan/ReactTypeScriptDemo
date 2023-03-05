import { useEffect, useRef } from "react"

export const DomRef = () => {
	const inputRef = useRef<HTMLInputElement>(null!);

	useEffect(() => {
		inputRef.current.focus(); // Add ! on null above to remove ? from before focus() here
	}, []);

	return (
		<div>
			<input type="text" ref={inputRef}/>
		</div>
	)
}