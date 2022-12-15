const customHeader = (req, res, next)=>{
    try{
        const apiKey = req.headers.api_key;
        if (apiKey ==='vero-01'){
            next()
        }else{
            res.status(403)
        res.send({error: 'Incorrect Api Key'})
        }

    }catch(e){
        res.status(403)
        res.send({error: 'Something is wrong with custom Header'})
    }
}

module.exports = customHeader;