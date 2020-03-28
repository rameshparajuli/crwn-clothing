import React from "react";
import "./directory.styles.scss";
import directorySection from "../../API/CustomJson/directorySection";
import MenuItem from "../menu-item/menu-item.components";
class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      section: directorySection
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.section.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
