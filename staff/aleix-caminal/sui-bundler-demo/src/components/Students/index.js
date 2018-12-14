import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Input from '@s-ui/react-molecule-input-field'
import './index.scss'

class Students extends Component {
  state = {
    search: ''
  }

  static propTypes = {
    students: PropTypes.array,
    onSearch: PropTypes.function
  }

  handleChangeInput = ({target}) => {
    this.setState({[target.id]: target.value})
  }

  render() {
    return (
      <section className="students">
        <section className="students-header">
          <h2 className="students-header__title">Students List</h2>
          <Input
            id="search"
            type="search"
            placeholder="Search student..."
            label=""
            value={this.state.search}
            onChange={this.handleChangeInput}
            onBlur={this.props.onSearch}
          />
        </section>
        {this.props.students.length && (
          <ul className="students__list">
            {this.props.students.map((student, index) => (
              <li
                key={index}
                className={
                  'students__list__item' +
                  (index % 2
                    ? ' students__list__item--even'
                    : ' students__list__item--odd')
                }
              >
                {student.name}
              </li>
            ))}
          </ul>
        )}
      </section>
    )
  }
}

export default Students
