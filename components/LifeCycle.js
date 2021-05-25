import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class LifeCycle extends Component {
    /* this constructore call when App is MOUNT */
  constructor(props) {
    console.log("Constructor")
    super(props);
    this.state = {
    };
  }

  /* this method call when App is MOUNT */
  static getDerivedStateFromProps() {
      console.log('getDerivedStateFromProps')
      return null;
  }
 
  /* this method call when App is MOUNT */
    componentDidMount() {
        console.log("componentDidMount")
    }


    /* this render method call when App is UPDATE */
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate method')
        return true;
    }

    /* this render method call when App is UPDATE */
    getSnapshotBeforeUpdate() {
        console.log('getSnapShotBeforUpdate')
        return null;
    }
  
    /* this render method call when App is UNMOUNT */
    componentWillUnmount() {
         console.log('componentWillUnmount')
    }

    /* this render method call when  Error comming */
    static getDrivedStateFromError() {
        console.log(' getDrivedStateFromError')
    }

    /* this render method call when  Error comming */
    componentDidCatch() {
        console.log('componentDidCatch')
    }

    /* this render method call when App is MOUNT */
  render() {
      console.log("render")
      return (
          <View>
        <Text> LifeCycle </Text>
      </View>
    );
}
}

