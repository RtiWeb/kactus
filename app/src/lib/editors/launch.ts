import { spawn } from 'child_process'
import { pathExists } from '../file-system'
import { ExternalEditorError, FoundEditor } from './utils'

/**
 * Open a given file or folder in the desired external editor.
 *
 * @param fullPath A folder or file path to pass as an argument when launching the editor.
 * @param editor The external editor to launch.
 */
export async function launchExternalEditor(
  fullPath: string,
  editor: FoundEditor
): Promise<void> {
  const editorPath = editor.path
  const exists = await pathExists(editorPath)
  if (!exists) {
    const label = 'Preferences'
    throw new ExternalEditorError(
      `Could not find executable for '${editor.editor}' at path '${
        editor.path
      }'.  Please open ${label} and select an available editor.`,
      { openPreferences: true }
    )
  }

  spawn(editorPath, [fullPath])
}
