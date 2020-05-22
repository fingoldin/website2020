import Link from 'next/link'
import React from 'react';
import Layout from '../../components/layout.js';
import styles from './people.module.css';

export default class PeopleItem extends React.Component {
    constructor(props) {
      super(props);
    }

    render () {
      return (
        <div className = {styles.container}>
            <div className = {styles.employeeswrapper}>
                <div className = {styles.employeelist}>
                  <ul>
                    <li>
                        <a className = {styles.name}>{this.props.name}<span className = {styles.jobtitle}>Marketing</span>
                        </a>
                        <a className = {styles.name}>{this.props.bio}<span className = {styles.jobtitle}>Bio</span>
                        </a>
                    </li>
                  </ul>
                </div>

                <div className = {styles.employeepics}>
                  <div className = {styles.picframe}>
                    <div>
                      <img src={this.props.pic} alt=''></img>
                    </div>
                    <p className = {styles.name}>{this.props.name}<span className = {styles.jobtitle}>Strategist</span>
                    </p>
                  </div>
                </div>
            </div>
          </div>
      )
    }
}
