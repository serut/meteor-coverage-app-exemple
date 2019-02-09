import * as React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';

export interface InfoProps {
  links: string[];
}

class Info extends React.Component<InfoProps, {}> {
  public render() {
    const links = this.props.links.map(
      (link) => this.makeLink(link)
    );

    return (
      <div>
        <h2>Learn Meteor!</h2>
        <ul>{links}</ul>
      </div>
    );
  }

  private makeLink(link: any) {
    return (
      <li key={link._id}>
        <a href={link.url} target="_blank">{link.title}</a>
      </li>
    );
  }
}

const InfoContainer = withTracker(() => {
  return {
    links: Links.find().fetch(),
  };
})(Info);

export default InfoContainer;
