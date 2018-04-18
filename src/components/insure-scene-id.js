import React from 'react';

import { changeScene } from '../actions';

export default function insureSceneId(Component) {
  // return a component that, when it mounts, checks the state
  // for a sceneid (in its props). If it has one, just render
  // the component. It it doesn't, dispatch an action that
  // correctly sets the sceneid and render nothing. The Component
  // will need all the props passed through by this higher order
  // component.
  // render() {
  // return <component {...props} />

  return class extends React.Component {
    componentDidMount() {
      if(typeof this.props.sceneId !== 'number') {
        const sceneId = Number(this.props.match.params.id);
        this.props.dispatch(changeScene(sceneId));
      }
    }

    render() {
      return <Component {...this.props} />
    }
  }
}
