export default {
  '*.ts?(x)': ['pnpm eslint', () => 'pnpm typecheck'],
  '*.css': 'pnpm stylelint',
}
