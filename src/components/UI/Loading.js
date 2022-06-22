import React from 'react'
import classes from './Loading.module.css'

const Loading = () => {
  return (
    <div className={classes.loadingWrapper}>
    <div className={classes.loadingSpinner}></div>
    </div>
  )
}

export default Loading