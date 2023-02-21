import aderogyl from '../../assets/productos/Aderogyl.JPG';
import probioticos from '../../assets/productos/Probioticos.JPG';
import vitaminas from '../../assets/productos/Vitaminas.JPG';
import treda from '../../assets/productos/Treda.JPG';
import fosfocil from '../../assets/productos/Fosfocil.JPG';
import amoxiclav from '../../assets/productos/Amoxiclav.JPG';
import presion from '../../assets/productos/Presion.JPG';
import oximetro from '../../assets/productos/Oximetro.JPG';
import termometro from '../../assets/productos/Termometro.JPG';

export const arregloProductos = [
    {id:1, title: "ADEROGYL 5 AMPOLLETAS DE 3 ML", price: 130, pictureUrl: aderogyl, categoria:"vitaminas", stock: 10},
    {id:2, title: "PROBIOTICOS UFC+INULINA 30 TABLETAS", price: 200, pictureUrl: probioticos, categoria:"vitaminas", stock: 5},
    {id:3, title: "MULTIVITAMÍNICO 30 CÁPSULAS DE 40 MG", price: 169, pictureUrl: vitaminas, categoria:"vitaminas", stock: 4},
    {id:4, title: "TREDA ORAL 10 TABLETAS", price: 131, pictureUrl: treda,categoria:"antibioticos", stock: 7},
    {id:5, title: "FOSFOCIL 1 G SOLUCIÓN INYECTABLE", price: 251, pictureUrl: fosfocil, categoria:"antibioticos", stock: 22},
    {id:6, title: "AMOXICLAV 125 MG ORAL 15 TABLETAS", price: 458, pictureUrl: amoxiclav, categoria:"antibioticos", stock: 3},
    {id:7, title: "MONITOR DE PRESIÓN ARTERIAL", price: 658, pictureUrl: presion, categoria:"accesorios", stock: 2},
    {id:8, title: "OXIMETRO DIGITAL", price: 253, pictureUrl: oximetro,categoria:"accesorios", stock: 11},
    {id:9, title: "TERMÓMETRO DIGITAL", price: 76, pictureUrl: termometro,categoria:"accesorios", stock: 11}
]