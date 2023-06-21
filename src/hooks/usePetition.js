const usePetition = () => {
    const [cripto, setCripto] = useState({})
    useEffect(() => {
        axios.get(`${API_URL}assets/${params.id}`)
            .then(data => {
                setCripto(data.data.data)
            })
            .catch(e => console.error(e))
        }, [])
    
    return
    
}

export default usePetition