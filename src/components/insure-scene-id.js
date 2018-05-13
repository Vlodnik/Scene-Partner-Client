import React from 'react';

import { changeScene, fetchUrl } from '../actions/scenes';

export default function insureSceneId(Component) {
  return class extends React.Component {
    componentDidMount() {
      if(this.props.sceneId === null || this.props.sceneId === undefined) {
        const sceneId = this.props.match.params.id;
        this.props.dispatch(changeScene(sceneId));
      }
      if(!(this.props.editing)) {
        this.props.lines.forEach((line, index) => {
          this.props.dispatch(fetchUrl(line.text, line.key, this.props.authToken, index));
        });
      }

      // if(!(this.props.editing)) {
      //   // dispatch action to send POST request to API for all audio files
      //   this.props.dispatch(fetchUrls(this.props.lines, this.props.authToken));
      // }
    }

    render() {
      return <Component {...this.props} />
    }
  }
}
