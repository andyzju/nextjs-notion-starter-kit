// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  staticPageGenerationTimeout: 300,
  rootNotionPageId:'a5270c2b80ed4f4ba809a605009e7d04',
  rootNotionSpaceId:null,
  name:'阿拉丁禅意花园',
  domain:'https://decorous-feverfew-513.notion.site/Teamspace-Home-a5270c2b80ed4f4ba809a605009e7d04?pvs=4',
  author:'阿拉丁',
  douyin:'阿拉丁神灯能量',
  xiaohongshu:'阿拉丁神灯能量',
  images: {
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      'pbs.twimg.com',
      'abs.twimg.com',
      's3.us-west-2.amazonaws.com',
      'transitivebullsh.it'
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
})
