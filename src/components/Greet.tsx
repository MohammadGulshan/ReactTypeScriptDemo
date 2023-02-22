type GreetProps = {
    name: string,
    isLoggedIn: boolean,
    messageCount?: number
}

export const Greet = (props: GreetProps) => {
    const {messageCount = 0} = props
    return (
        <div>
            <h2>
                { props.isLoggedIn ? `Hello ${props.name}, Welcome!` : `Welcome Guest` }
            </h2>
            <h4>
                { `You have ${messageCount} unread messages.` }
            </h4>
            <h5>
                Note: Use 'type' for applications and 'interface' for libraries.
            </h5>
        </div>
    );
}