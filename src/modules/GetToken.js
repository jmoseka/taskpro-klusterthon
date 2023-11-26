const GetToken = () => {
    const token = localStorage.getItem('bizToken');
    if(token) {
        return token
    }
}

export default GetToken