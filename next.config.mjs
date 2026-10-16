/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/sign", destination: "/signup", permanent: true }]
  },
}

export default nextConfig
