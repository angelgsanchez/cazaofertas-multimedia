import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  const { email: emailInput, password: passwordInput } = await request.json();
  const filePath = path.join(process.cwd(), "data.txt");

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "No hay usuarios registrados" }, { status: 404 });
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const lines = fileContent.split("\n");

  // Buscamos línea por línea
  for (const line of lines) {
    if (!line.trim()) continue;
    
    const [email, password, name, isMerchant] = line.split(",");

    if (email === emailInput && password === passwordInput) {
      return NextResponse.json({
        user: {
          name,
          email,
          isMerchant: isMerchant === "true",
        }
      });
    }
  }

  return NextResponse.json({ error: "Credenciales incorrectas" }, { status: 401 });
}