// .env에서 API_KEY 가져오기
const API_KEY = process.env.API_KEY;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/form',
        permanent: false,
      },
      {
        source: '/old-blog/:path*',
        destination: '/new-blog/:path*',
        permanent: false,
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      },
      // id 가져오는 rewrite
      {
        // :id로 변수 설정
        source: '/api/movies/:id',
        // 위 destination 링크에서 popular만 :id로 변경
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      }
    ]
  }
}
