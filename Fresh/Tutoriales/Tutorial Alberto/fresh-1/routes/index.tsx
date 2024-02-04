function Suma(numero1:number,numero2:number){
  const l:number= numero1+numero2;
  return l
}

export default function Home() {

  const numero1:number =3
  const numero2:number =4
  const suma:number=Suma(numero1,numero2)

  //Server side rendering
  console.log("Esto se ejecuta en el Servidor")
  return (
    <div>
      <p1>Hola mundo , la suma de 3+4 es: {suma}</p1>
      <p1>¿Es el numero1 mayor que el numero2? {numero1>numero2?"Si":"No"}</p1>
    </div>
  );
}
