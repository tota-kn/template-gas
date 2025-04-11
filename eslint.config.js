// @ts-check
import { includeIgnoreFile } from '@eslint/compat'
import eslint from '@eslint/js'
import path from 'path'
import { fileURLToPath } from 'url'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

const gitIgnoreFileConfig = () => {
  const fileName = fileURLToPath(import.meta.url)
  const dirName = path.dirname(fileName)
  const gitignorePath = path.resolve(dirName, '.gitignore')
  return includeIgnoreFile(gitignorePath)
}

export default tseslint.config(
  gitIgnoreFileConfig(),
  eslint.configs.recommended,
  tseslint.configs.recommended,
  stylistic.configs.recommended,
)
