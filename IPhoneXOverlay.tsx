import * as React from 'react'
import './IPhoneXOverlay.less'

const IPhoneXOverlay: React.FC<{ 
  w?: 375 | 750;
  style?: React.CSSProperties
}> = (props) =>{
  return (
    <div className={`iphonex-overlay w${props.w}`}>
      <div className="mask"></div>
      <div className="main-body" style={props.style}>
        {props.children}
      </div>
    </div>
  );
}
IPhoneXOverlay.displayName = 'IPhoneXOverlay';
IPhoneXOverlay.defaultProps = {
  w: 750,
  style: {},
};

export default IPhoneXOverlay;