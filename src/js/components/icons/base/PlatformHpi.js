// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import CSSClassnames from '../../../utils/CSSClassnames';
import Intl from '../../../utils/Intl';
import Props from '../../../utils/Props';

const CLASS_ROOT = CSSClassnames.CONTROL_ICON;
const COLOR_INDEX = CSSClassnames.COLOR_INDEX;

export default class Icon extends Component {
  componentDidMount() {
    const { skipWarn } = this.props;
    if (!skipWarn) {
      console.warn(
        'Base icons are now deprecated, use raw svg with grommet-icon-loader'
      );
    }
  }
  render () {
    const { className, colorIndex } = this.props;
    let { a11yTitle, size, responsive } = this.props;
    let { intl } = this.context;

    const classes = classnames(
      CLASS_ROOT,
      `${CLASS_ROOT}-platform-hpi`,
      className,
      {
        [`${CLASS_ROOT}--${size}`]: size,
        [`${CLASS_ROOT}--responsive`]: responsive,
        [`${COLOR_INDEX}-${colorIndex}`]: colorIndex
      }
    );

    a11yTitle = a11yTitle || Intl.getMessage(intl, 'platform-hpi');

    const restProps = Props.omit(this.props, Object.keys(Icon.propTypes));
    return <svg {...restProps} version="1.1" viewBox="0 0 24 24" width="24px" height="24px" role="img" className={classes} aria-label={a11yTitle}><path stroke="none" fill="#0096D6" fillRule="evenodd" d="M15.7928421,15.3333704 C15.9768442,15.3333704 16.1755131,15.1915021 16.2349804,15.0183002 L18.4310048,8.64836276 C18.4908721,8.47529417 18.3902043,8.33315926 18.2063356,8.33315926 L17.2052578,8.33315926 C17.0219225,8.33315926 16.8228536,8.47529417 16.7629863,8.64836276 L14.5570951,15.0183002 C14.4973611,15.1915021 14.5981622,15.3333704 14.7821642,15.3333704 L15.7928421,15.3333704 Z M24.0002667,12 C24.0002667,18.627007 18.6267403,24 12,24 C11.8170646,24 11.6393293,23.9803998 11.4581273,23.9727997 L13.8777542,16.981922 C13.9382882,16.8085868 14.1365571,16.6668519 14.3205591,16.6668519 L16.0003111,16.6668519 C18.6083401,16.6668519 18.632207,15.8021756 18.9066101,15.0079001 C19.5488839,13.1445461 20.6560962,9.93424371 20.8714319,9.30583673 C21.1779686,8.40956011 21.2793031,7.00007778 19.0002111,7.00007778 L15.0000333,7.00007778 C14.816698,7.00007778 14.6177624,7.14194602 14.5570951,7.31528128 L8.92489917,23.5871954 C3.79030878,22.2271803 0,17.5617951 0,12 C0,6.69394104 3.44790498,2.20055778 8.22275803,0.615473505 L2.77589751,16.3513817 C2.71523017,16.5248503 2.81643129,16.6668519 3.00003333,16.6668519 L4.99965555,16.6668519 C5.1836576,16.6668519 5.38232647,16.5248503 5.44272714,16.3513817 L8.1092901,8.64836276 C8.16915744,8.47529417 8.36755964,8.33315926 8.55102834,8.33315926 L9.539706,8.33315926 C9.72330804,8.33315926 9.82410916,8.47529417 9.76424182,8.64836276 L7.10847898,16.3513817 C7.04914499,16.5248503 7.14994611,16.6668519 7.33328148,16.6668519 L9.33357037,16.6668519 C9.51690574,16.6668519 9.71570795,16.5248503 9.77544195,16.3513817 C9.77544195,16.3513817 11.6389293,10.9485217 12.2016022,9.3149035 C12.7649418,7.68155202 12.3125368,7.00007778 10.3462483,7.00007778 L9.01290014,7.00007778 C8.82956477,7.00007778 8.72889699,6.8580762 8.78916432,6.68514095 L11.0862565,0.0464005156 C11.3887932,0.0234669274 11.6913299,0 12,0 C18.6267403,0 24.0002667,5.37299303 24.0002667,12 L24.0002667,12 Z"/></svg>;
  }
};

Icon.contextTypes = {
  intl: PropTypes.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'PlatformHpi';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: PropTypes.string,
  colorIndex: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: PropTypes.bool,
  skipWarn: PropTypes.bool
};

