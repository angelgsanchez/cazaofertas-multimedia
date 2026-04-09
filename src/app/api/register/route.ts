import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  const data = await request.json();
  
  // Definimos la ruta del archivo (en la raíz del proyecto)
  const filePath = path.join(process.cwd(), "data.txt");

  // Creamos una línea con formato: Correo | Password | Nombre | EsComerciante
  const userLine = `${data.email},${data.password},${data.name},${data.isMerchant}\n`;

  try {
    // 'a' significa "append" (añadir al final sin borrar lo anterior)
    fs.appendFileSync(filePath, userLine);
    return NextResponse.json({ message: "Guardado" });
  } catch (error) {
    return NextResponse.json({ error: "Error al escribir" }, { status: 500 });
  }
}