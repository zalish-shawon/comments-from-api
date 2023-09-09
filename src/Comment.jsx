export default function Comment({comment}) {  
    const commentStyle = {
        border: '2px solid tomato',
        borderRadius: '25px',
        marginBottom: '50px',
    
    }

    const {name, email, body} = comment || {};
    

    return (
        <div style={commentStyle}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <h4>Comment: {body}</h4>
            
        </div>
    )
}


