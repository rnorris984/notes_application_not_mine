import React from 'react';
import moment from 'moment'; 
import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';

export const NoteListItem = (props) => {
    const className = props.note.selected ? 'item item--selected' : 'item';

    return (
        <div className={className} onClick={() => {
            props.Session.set('selectedNoteId', props.note._id);
        }}>
            <h5 className="item__title">{ props.note.title || 'Unnamed output' }</h5>
            <p className="item__subtitle">{ moment(props.note.updatedAt).format('DD/M/YYYY') }</p>
        </div>
    );
};

NoteListItem.propTypes = {
    note: React.PropTypes.object.isRequired,
    Session: React.PropTypes.object.isRequired
};

export default createContainer(() => {
    return { Session };
}, NoteListItem);