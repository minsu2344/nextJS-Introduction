// .env에서 API_KEY 가져오기
const API_KEY = process.env.API_KEY;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  // redirect 하는 방법
  async redirects() {
    return [
      {
        // 입력 주소
        source: '/contact',
        // 이동할 주소. 일반 주소를 원하면 http부터 시작
        destination: '/form',
        // true면 영구적으로 cache, false면 일시적이고 cache 없음
        permanent: false,
      },
      {
        // :path는 url파라미터, *는 뒤에 어떤 문자열이든 catch함
        source: '/old-blog/:path*',
        // 위 주소에서 old-blog만 new로 바뀌고 뒤는 같음
        destination: '/new-blog/:path*',
        permanent: false,
      }
    ]
  },
  // 숨기고 싶은 정보(API KEY 등) 가리기
  async rewrites() {
    return [
      {
        // 덮어줄 url
        // 아래 주소로 접속 시 destination에 있는 정보 그대로 보여줌
        source: '/api/movies',
        // 숨기고 싶은 url
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      }
    ]
  }
}
