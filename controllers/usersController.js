import UsersModel from "../models/usersModel.js";

export const getAlluser = async (req,res)=>{
    try {
        const users = await UsersModel.findAll()
        res.json(users)
    } catch (error) {
        res.json({message: error.message})
    }
};
//MOSTRAR UN REGISTRO
export const getUser = async (req,res)=>{
    try {
        const user = await UsersModel.findOne({
            where:{idUsuario:req.params.id}
        })
        res.json(user)
    } catch (error) {
        res.json({message: error.message})
    } 
};
export const getUserArray = async (req,res)=>{
    try {
        const user = await UsersModel.findAll({
            where:{idUsuario:req.params.id}
        })
        res.json(user)
    } catch (error) {
        res.json({message: error.message})
    } 
 };
//crear UN REGISTRO
export const createUser = async (req,res)=>{
    try {
        await UsersModel.create (req.body)
        res.json ({message: "Registro creado"})
    } catch (error) {
        res.json ({message:error.message})
    }
};
 //actualizar un registro
export const updateUser =async (req,res)=>{
    try {
        await UsersModel.update(req.body,{
            where:{idUsuario:req.params.id} 
        })
        res.json ({message: "Registro Actualizado"})
    } catch (error) {
        res.json ({message:error.message})
    }
};
//borrar un resgistro
export const deleteUser = async (req,res)=>{
    try {
        await UsersModel.destroy({
            where:{idUsuario:req.params.id} 
        })
        res.json ({message: "Registro eliminado"})
    } catch (error) {
        res.json ({message:error.message}) 
    }
};
//Traer usuario por user+pass
export const getUserByUserPass = async (req,res)=>{
    try {
        const user = await UsersModel.findOne({
            where:{usuario:req.params.usuario, pass:req.params.pass}
        })
        res.json(user)
    } catch (error) {
        res.json({message: error.message})
    } 
};

