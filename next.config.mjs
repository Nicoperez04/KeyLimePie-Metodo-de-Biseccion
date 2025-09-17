/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                 // genera /out
  basePath: 'KeyLimePie-Metodo-de-Biseccion',         // ej: '/KeyLimePie_Errores'
  assetPrefix: 'KeyLimePie-Metodo-de-Biseccion',     // mismo subpath para assets
  images: { unoptimized: true },    // requerido con export
  trailingSlash: true               // opcional, ayuda en Pages
};
export default nextConfig;

