import React from 'react';
import ReactDOM from 'react-dom';
import Photo from './photo';
import {create} from 'react-test-renderer';
// import { it } from 'date-fns/esm/locale';
// import renderer from 'react-test-renderer'

describe ('Photo component', () =>{
    it('matches the snapshot', () => {
        const tree = create(<Photo/>).toJSON()

        expectExport(tree).toMatchSnapshot()
    })
})