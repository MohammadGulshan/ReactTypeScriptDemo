type ContainerProps = {
    styles: React.CSSProperties
}

export const Container = ({styles}: ContainerProps) => {
    return (
        <div style={styles}>
            Styled Text content goes here
        </div>
    )
}