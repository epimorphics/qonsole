// The README and licence live at the repository root, for GitHub, but npm
// only publishes the ones in the package directory. prepack copies them in
// and postpack removes the copies, which are git-ignored.
import { copyFileSync, rmSync } from 'node:fs'

const FILES = ['README.md', 'LICENSE.txt']
const root = new URL('../../../', import.meta.url)
const pkg = new URL('../', import.meta.url)

const action = process.argv[2]
for (const file of FILES) {
  const target = new URL(file, pkg)
  if (action === 'copy') copyFileSync(new URL(file, root), target)
  else if (action === 'remove') rmSync(target, { force: true })
  else throw new Error(`Usage: root-docs.js copy|remove, not ${action}`)
}
