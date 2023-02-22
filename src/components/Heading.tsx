type HeadingProps = {
    children: string
}

export const Heading = (props: HeadingProps) => {
    return (
        <h3>
            {props.children}
        </h3>
    )
}