import type { Schema, Attribute } from '@strapi/strapi';

export interface TagsTags extends Schema.Component {
  collectionName: 'components_tags_tags';
  info: {
    displayName: 'Tags';
  };
  attributes: {
    TagName: Attribute.String;
  };
}

export interface AuthorDetailsAuthor extends Schema.Component {
  collectionName: 'components_author_details_authors';
  info: {
    displayName: 'Author';
    icon: 'write';
  };
  attributes: {
    AuthorName: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
    AuthorBrief: Attribute.Text;
    AuthorLink: Attribute.String;
    AuthorUsername: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'tags.tags': TagsTags;
      'author-details.author': AuthorDetailsAuthor;
    }
  }
}
