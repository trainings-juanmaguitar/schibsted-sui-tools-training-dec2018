import React, {Component} from 'react'
import PropTypes from 'prop-types'

// import Link from 'react-router/lib/Link'

import AtomInput from '@s-ui/react-atom-input'
import AtomButton from '@schibstedspain/sui-atom-button'

import SearchIcon from '@material-ui/icons/Search'
import './index.scss'

const BASE_CLASS = `sui-MoviesApp`
const CLASS_FORM_SEARCH = `${BASE_CLASS}-formSearch`

class FormSearch extends Component {
  state = {
    query: ''
  }

  handleChange = (ev, {value: query}) => {
    this.setState({query})
  }

  doSearch = ev => {
    ev.preventDefault()
    const {query} = this.state
    const {router} = this.context
    router.push(`/s/${query}`)
  }

  render() {
    const {i18n} = this.context
    const {handleChange, doSearch} = this
    return (
      <form onSubmit={doSearch} className={CLASS_FORM_SEARCH}>
        <AtomInput
          onChange={handleChange}
          name="second"
          placeholder={i18n.t('SEARCH_MOVIES_PLACEHOLDER')}
          leftIcon={SearchIcon}
        />

        <AtomButton onClick={doSearch}>{i18n.t('SEARCH_MOVIES')}</AtomButton>
      </form>
    )
  }
}

FormSearch.contextTypes = {i18n: PropTypes.object, router: PropTypes.object}

export default FormSearch
