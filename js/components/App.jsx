import React, {Component} from 'react'
import {connect} from 'react-redux'
import Radium, {Style} from 'radium'
import {} from '../actionCreators'
import Header from './Header'
import {Sections} from './Sections'
import {Footer} from './Footer'
import {accentColor, body, bodyText} from '../styles/colors'

@Radium
class App extends Component {
  render () {
    return (
      <div>
        <Style rules={{
          html: {
            fontSize: '16px'
          },
          body: {
            background: body,
            boxSizing: 'border-box',
            color: bodyText,
            fontFamily: 'Lato, Arial, serif',
            fontWeight: 200
          },
          'body *': {
            boxSizing: 'inherit',
            color: 'inherit',
            fontFamily: 'inherit',
            fontWeight: 'inherit'
          },
          a: {
            color: accentColor,
            textDecoration: 'none',
            transition: 'color .25s'
          },
          'a:hover': {
            color: Color(accentColor).lighten(0.2).hslString()
          },
          h1: {
            fontSize: '3rem',
            margin: '0 0 1em 0'
          },
          '::selection': {
            background: accentColor,
            color: body
          }
        }} />
        <Header />
        <Sections />
        <Footer />
      </div>
    )
  }
}

export default connect()(App)