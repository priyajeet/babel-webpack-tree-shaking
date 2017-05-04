import React, { PropTypes, Component } from 'react';

class UnusedComp extends Component {
    static propTypes = {
        foo: PropTypes.string
    };

    render() {
        const { foo } = this.props;
        return <span>{`${foo} is UnusedComp`}</span>;
    }
}

export default UnusedComp;


/* OR functional form

import React, { PropTypes } from 'react';

const ReactComp = ({ foo }) => <span>{`${foo} is UnusedComp`}</span>;

ReactComp.prototypes = {
    foo: PropTypes.string
};

export default ReactComp;

 */