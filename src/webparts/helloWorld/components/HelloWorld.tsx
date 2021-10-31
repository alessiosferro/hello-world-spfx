import * as React from 'react';
import styles from './HelloWorld.module.scss';
import {IHelloWorldProps} from './IHelloWorldProps';
import {escape} from '@microsoft/sp-lodash-subset';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div className={styles.helloWorld}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              <p className={styles.description}>{escape(this.props.test)}</p>
              <p className={styles.description}>{this.props.test1}</p>
              <p className={styles.description}>{escape(this.props.test2)}</p>
              <p className={styles.description}>{this.props.test3}</p>
              <p className={styles.description}>{this.props.context.web.title}</p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
          <ul className={styles.list}>
            {this.props.ispList.map(ispItem => <li key={ispItem.Id}
                                                   className={styles.listItem}>
              <span className="ms-font-l">{ispItem.Title}</span>
            </li>)}
          </ul>
        </div>
      </div>
    );
  }
}
