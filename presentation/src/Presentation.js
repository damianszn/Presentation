import React from 'react';

import Display from './Display';

class Presentation extends React.Component{
    render(){
        return(
            <div>
                <p>Header</p>
                <Display />
                <p>Footer</p>
            </div>
        )
    }
}

export default Presentation;