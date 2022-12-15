
const {tracksModel} = require('../models');// importamos el trackModel creado dentro del archivo index que esta dentro de la carpeta models
const {matchedData} = require('express-validator')
const {handleHttpError}= require('../utils/handleError')


const getItems = async (req, res)=>{ 
    try {
        const user = req.user;
        const data = await tracksModel.findAllData({}); 
        res.send({data, user});        
    } catch (e) {
        console.log('ESTE ES EL ERROR')
        console.log(e)
        handleHttpError(res, 'ERROR_GET_ITEMS');
    }

}


const getItem = async (req, res)=>{
   try {
        req = matchedData(req);  
        const {id}= req;
        const data = await tracksModel.findOneData(id); 
        res.send({data}); 
   } catch (e) {
        handleHttpError(res, 'ERROR_GET_ITEM')
   }

}


const createItem = async (req, res)=>{

    try {         
        const body = matchedData(req);  
        console.log('Creando body')   
        console.log(body) 
        console.log('Termina body')   
        const data =await tracksModel.create(body);
        res.send({data});     
    } catch (e) {
        console.log(e)
        handleHttpError(res, 'ERROR_CREATE_ITEMS');
    }
}
const updateItem = async (req, res)=>{
    try {        
        const {id, ...body} = matchedData(req);
        const data =await tracksModel.findOneAndUpdate(
            id, body
        );
        res.send({data});     
    } catch (e) {
        handleHttpError(res, 'ERROR_UPDATE_ITEMS');
    }
}
const deleteItem = async (req, res)=>{
    try {
        req = matchedData(req);  
        const {id}= req;
        const data = await tracksModel.delete({_id:id}); 
        res.send({data}); 
   } catch (e) {
        handleHttpError(res, 'ERROR_DELETE_ITEM')
   }

}




module.exports = {getItems, getItem, createItem, updateItem, deleteItem };