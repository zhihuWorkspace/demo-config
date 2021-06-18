const { env } = process
export default {
  host: {
    $filter: 'mode',
    qa: 'qa.xx',
    $default: env.DB_HOST || 'localhost'
  },
  port: env.DB_PORT || 3306,
  user: {
    $filter: 'mode',
    qa: 'qa-user',
    $default: env.DB_USER || 'default_user'
  },
  password: {
    $filter: 'mode',
    qa: 'qa_passwd',
    $default: env.DB_PASSWORD || 'default_passwd'
  },
  database: {
    $filter: 'mode',
    qa: 'qa_db_name',
    $default: env.DB_NAME || 'default_db_name'
  }
}