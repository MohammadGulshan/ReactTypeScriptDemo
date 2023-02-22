type OscarProps = {
    children: React.ReactNode
}

export const Oscar = (props: OscarProps) => {
    return (
        <h4>
            {props.children}
        </h4>
    )
}