import { Controller, Get, Post, Body } from '@nestjs/common';
import { conexion } from '../db';

@Controller('docente')
export class DocenteController {
    @Get()
    async traerDocente(){
        let [datos]=await  conexion.query(
            "SELECT * FROM docente"
        )
        return{
            "docente": datos
        }   
    }

    @Post()
    async guardarDocente(@Body() dato:any){
        let res=await conexion.query(
            "INSERT INTO docente (nombres, apellidos, documento, correo, telefono) VALUES (?,?,?,?,?)",
            [dato.nombres,dato.apellidos,dato.documento,dato.correo,dato.telefono]
        )
        return{
            "mensaje":"Docente registrado correctamente",
            "dato": res
        }
    }
}
