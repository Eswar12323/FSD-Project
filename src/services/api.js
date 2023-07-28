import axios from "axios";

const URL = "localhost:8080"

const getProducts =()=> axios.get(`${URL}/product/getpro`)
const addProduct =(product)=> axios.get(`${URL}/product/addpro`,product)
const editProduct =(id,product)=> axios.get(`${URL}/product/editpro/${id}`,product)
const deleteProduct =(id)=> axios.get(`${URL}/product/deletepro/${id}`)



export {getProducts,addProduct,editProduct,deleteProduct} 