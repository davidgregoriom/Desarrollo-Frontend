import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="page-404">
        <div class="">
          <img
            class="img-404"
            src="/logotipo-universidad-nebrija-rojo.webp"
            alt="Logo Universidad Nebrija"
          />
          <h1 class="text-4xl font-bold">Página no encontrada</h1>
          <p class="my-4">
            Lo sentimos, pero el servidor web no puede encontrar el archivo que ha solicitado.
          </p>
          <a href="/" class="underline">Go back home</a>
        </div>
      </div>
    </>
  );
}
