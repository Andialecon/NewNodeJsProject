const User = require('../models/User');
let nonce = Math.floor(Math.random() * (10000000 - 1));

// obtener la lista de todos los usuarios
const getUsers = async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.json( users );
    } catch (err) {
        next(err);
    }
}

// obtener un usuario por su publicAddress
const getUser = async (req, res, next) => {
    const { publicAddress } = req.params;
    try {
        let usuario = await User.findOne({ where: { address:publicAddress } });
        
        res.status(200).json( usuario );

    } catch (err) {
        next(err);
    }
}

//crear un usuario 
const createUser = async (req, res, next) => {
    try {

        const { address, role } = req.body;
     
        if ( !address || !role ){
            return res.status(400).json({
                error:"Uno o más campos vacios"
            });
        }

        await User.create({ address, role, nonce });
        res.json("usuario creado con exito");
     
    } catch (err) {
        console.log(err)
        return res.status(400).json(err.errors);
    }
}

//Actualizar un usuario
const updateUser = async (req, res, next) => {
    const { publicAddress } = req.params;
    const { username, email, role, activo } = req.body;
    try {
        const usuario = await User.update({ email, role, username, activo, nonce }, { where: { address:publicAddress }});
        if(usuario == 1){
            res.json( `usuario actualizado` );
        }else if (usuario==0){
            res.json( `No se encontró el usuario` )
        }
    } catch (err) {
        return res.status(404).json(err);
    }
}

//Eliminar un usuario 
const deleteUser = async (req, res, next) => {
    const { addressUser } = req.params;
    try {
        const usuario = await User.destroy({ where:{address:addressUser} });
        if(usuario){
            res.json( "Usuario eliminado" );
        }else{
            res.json("No se encontraron coincidencias")
        }
    } catch (err) {
        next(err);
    }
}

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser }