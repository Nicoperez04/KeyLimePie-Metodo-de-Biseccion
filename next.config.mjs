/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                 // genera /out
  basePath: '/<REPO_NAME>',         // ej: '/KeyLimePie_Errores'
  assetPrefix: '/<REPO_NAME>/',     // mismo subpath para assets
  images: { unoptimized: true },    // requerido con export
  trailingSlash: true               // opcional, ayuda en Pages
};
export default nextConfig;

