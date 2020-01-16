import * as React from 'react'
import './IPhoneXOverlay.less'

const IPhoneXOverlay: React.FC<{ 
  width?: 375 | 750;
  style?: React.CSSProperties
}> = (props) =>{
  return (
    <div className={`iphonex-overlay w${props.width}`}>
      <div className="mask"></div>
      <div className="main-body" style={props.style}>

      </div>
    </div>
  );
}
IPhoneXOverlay.displayName = 'IPhoneXOverlay';
IPhoneXOverlay.defaultProps = {
  width: 750,
  style: {},
};

export default IPhoneXOverlay;