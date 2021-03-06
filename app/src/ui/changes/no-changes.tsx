import * as React from 'react'
import { Button } from '../lib/button'
import { Octicon, OcticonSymbol } from '../octicons'
import { LoadingOverlay } from '../lib/loading'
import { encodePathAsUrl } from '../../lib/path'

const BlankSlateImage = encodePathAsUrl(
  __dirname,
  'static/empty-no-file-selected.svg'
)

interface INoChangesProps {
  /** Called when the user chooses to open the repository. */
  readonly onOpenRepository: () => void

  /** Called when the user chooses to create a new sketch file */
  readonly onCreateSketchFile: () => void

  readonly loadingDiff: boolean
}

/** The component to display when there are no local changes. */
export class NoChanges extends React.Component<INoChangesProps, {}> {
  public render() {
    return (
      <div className="panel blankslate" id="blank-slate">
        <img src={BlankSlateImage} className="blankslate-image" />
        <div className="content">
          <div className="title">No local changes</div>

          <div className="callouts">
            <div className="callout half">
              <Octicon symbol={OcticonSymbol.ruby} />
              <div>Create a new Sketch File</div>
              <Button onClick={this.props.onCreateSketchFile}>
                Create File
              </Button>
            </div>

            <div className="callout half">
              <Octicon symbol={OcticonSymbol.fileDirectory} />
              <div>Open this repository in Finder</div>
              <Button onClick={this.props.onOpenRepository}>Open Finder</Button>
            </div>
          </div>
        </div>
        {this.props.loadingDiff && <LoadingOverlay />}
      </div>
    )
  }
}
