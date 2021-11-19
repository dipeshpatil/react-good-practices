import PropTypes from "prop-types";

import { ListGroup } from "react-bootstrap";

const DispatchSubList = ({ text, subText }) => {
  return (
    <div className="ms-2 me-auto">
      <div className="fw-bold">{text}</div>
      {subText}
    </div>
  );
};

const SimpleListGroup = ({ listData = [], subList, ...props }) => {
  return (
    <ListGroup variant={props.variant}>
      {listData.map((listItem, listIdx) => (
        <ListGroup.Item key={listIdx}>
          {subList || false ? (
            <DispatchSubList text={listItem} subText={listItem} />
          ) : (
            <>{listItem}</>
          )}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

DispatchSubList.propTypes = {
  text: PropTypes.string,
  subText: PropTypes.string,
};

SimpleListGroup.propTypes = {
  listData: PropTypes.array,
  subList: PropTypes.bool,
};

export default SimpleListGroup;
