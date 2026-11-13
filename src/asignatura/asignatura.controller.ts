import { Controller, Get, Post, Body } from '@nestjs/common';
import { conexion } from '../db';

@Controller('asignatura')
export class AsignaturaController {
@Get()
    async traerAsignatura(){
        let [datos]=await  conexion.query(
            "SELECT * FROM asignatura"
        )
        return{
            "asignatura": datos
        }   
    }

    @Post()
        async guardarAsignatura(@Body() dato:any){
            let res=await conexion.query(
                "INSERT INTO docente_asignatura (idDocente, idAsignatura, anio, periodo, horas_asignadas) VALUES (?,?,?,?,?)",
                [dato.idDocente,dato.idAsignatura,dato.anio,dato.periodo,dato.horas_asignadas]
            )
            return{
                "mensaje":"Asignatura registrado correctamente",
                "dato": res
            }
        }
}