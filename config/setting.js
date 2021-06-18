const { env } = process
export default {
  $meta: '测试项目',
  loglevel: 'debug',
  prefix: '/api/v2',
  host: '0.0.0.0',
  port: {
    $filter: 'mode',
    qa: 80,
    $default: env.port || 5000
  },
  secret: {
    $filter: 'mode',
    qa: 'qa_secret',
    $default: env.SECRET || 'AgS3rlWcs924VqeZm-FCwiq7T8f1DKl7raTHpcLAJQIbtrqu8OzSC-qThWFJYUS3mtFijDkYwkao02ro',
  }
    
}