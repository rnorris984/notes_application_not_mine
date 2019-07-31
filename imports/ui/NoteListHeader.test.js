import React from 'react';
import expect from 'expect';
import { Meteor } from 'meteor/meteor';
import { mount } from 'enzyme';

import { NoteListHeader } from './NoteListHeader.js';

if(Meteor.isClient){
    describe('NoteListHeader', function(){
        it('should call meteorCall on click', function(){
            // create spy
            const spy = expect.createSpy();
            const wrapper = mount( <NoteListHeader meteorCall={spy}/> );
            wrapper.find('button').simulate('click');
            expect(spy).toHaveBeenCalledWith('notes.insert');
            // render component with spy
            // imulate a button click
            // assert spy was called correctly - make sure that the argument is the string 'notes.insert'
        }); 
    });
};