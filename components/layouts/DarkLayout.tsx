const DarkLayout = ({ children }) => {
    return (
        <div style={{
            background: 'violet',
            borderRadius: '5px',
            padding: '10px'
        }}>
            <h1>Dark layout</h1>
            <div>

                {children}
            </div>
        </div>
    )
}
export default DarkLayout