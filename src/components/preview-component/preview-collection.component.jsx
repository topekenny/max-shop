import React from 'react';
import CollectionItem from '../collection-item/collection-item.component'
import './preview-collection.component.styles.scss';

const PreviewCollection = ({title, items}) => (
    <div className= 'preview-collection'> 
        <h1 className= 'title'> {title.toUpperCase()} </h1>
        <div className= 'preview'>
            {items 
            .filter((item, idx) => idx < 4) 
            .map(({id, ...itemsProps }) => (
                <CollectionItem key={id} {...itemsProps} />
            ))}
        </div>
    </div>
);

export default PreviewCollection;