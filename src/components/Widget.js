import classnames from 'classnames'
import { connect } from 'react-redux'
import React, { Component } from 'react'

import { Loader } from 'components'
import * as widgetsComponents from 'components/widgets'
import { removeWidget } from 'actions/widgets'

@connect(
  state => ({
    widgets: state.layout.widgets,
    editMode: state.mode === 'edit'
  })
)
class Widget extends Component {

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    const { dispatch, type, widgets } = this.props

    const widget = widgets[type]
    widget.fetch(dispatch)
  }

  removeWidget (type) {
    this.props.dispatch(removeWidget(type))
    console.log(type)
  }

  render () {
    const { type, widgets, editMode } = this.props
    const widget = widgets[type]
    const { loading, loaded } = widget

    const W = widgetsComponents[type]

    const classes = classnames('Widget-container', {
      edit: editMode
    })

    return (
      <div className={classes}>

        {editMode && (
          <div className='ctx'>
            <div className='ctx-btn' onClick={this.removeWidget.bind(this, type)} tabIndex={0}>
              <i className='ion-close' />
            </div>
          </div>
        )}

        <div style={{ ...widget.style, position: 'relative' }}>

          {loading && (
            <div className='loading'>
              <Loader />
            </div>
          )}

          {(!loading && !loaded) && (
            <div className='loading'>
              {'Loading problem'}
            </div>
          )}

          {!loading && loaded && (
            <W data={widget} />
          )}

        </div>

      </div>
    )
  }

}

export default Widget
