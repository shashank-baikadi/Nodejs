const home =async (req, res) => {
    try {
        res.send('home ')
    } catch (error) {
        console.log(error);
    }   
}  


const register =async (req, res) => {
    try {
        res.send('welcome to registration page using controllers ')
    } catch (error) {
   res.status(400).send({message:'page not found'})
    }
}

module.exports={home,register}