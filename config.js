export default {
  // 测试网站（必须能绕过 Cloudflare）
  TEST_URL: 'https://cf-clearance.pages.dev',

  // 默认测试端口（所有 IP 都使用这个端口进行验证）
  DEFAULT_PORT: 443,

  // 输出结果文件路径
  OUTPUT_FILE: 'pyip.txt',

  // 并发数量（建议 5~10）
  CONCURRENCY: 30,

  // 单次请求超时时间（毫秒）
  TIMEOUT: 30000,

  // 是否开启调试模式（显示浏览器界面）
  DEBUG: false
};
