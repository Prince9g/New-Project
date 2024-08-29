const Box = ({children}) => {
    return (
        <div className="box">
            <div key={children}>{children}</div>
        </div>
    )
}
export default Box;