import type { Schema, Struct } from '@strapi/strapi';

export interface PageBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_blocks';
  info: {
    description: 'Block component for page content';
    displayName: 'Block';
  };
  attributes: {
    config: Schema.Attribute.JSON & Schema.Attribute.Required;
    content: Schema.Attribute.JSON & Schema.Attribute.Required;
    type: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageColumn extends Struct.ComponentSchema {
  collectionName: 'components_page_columns';
  info: {
    description: 'Column component for page layout';
    displayName: 'Column';
  };
  attributes: {
    blocks: Schema.Attribute.Component<'page.block', true> &
      Schema.Attribute.Required;
    col: Schema.Attribute.Integer & Schema.Attribute.Required;
    columnId: Schema.Attribute.UID & Schema.Attribute.Required;
    config: Schema.Attribute.Component<'shared.background', false> &
      Schema.Attribute.Required;
    label: Schema.Attribute.String;
  };
}

export interface PageContainer extends Struct.ComponentSchema {
  collectionName: 'components_page_containers';
  info: {
    description: 'Container component for page layout';
    displayName: 'Container';
  };
  attributes: {
    column: Schema.Attribute.Component<'page.column', true> &
      Schema.Attribute.Required;
    columnDistribution: Schema.Attribute.String;
    config: Schema.Attribute.Component<'shared.background', false> &
      Schema.Attribute.Required;
    containerId: Schema.Attribute.UID & Schema.Attribute.Required;
    containerWidth: Schema.Attribute.Integer;
    layoutType: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageFacilitatorNote extends Struct.ComponentSchema {
  collectionName: 'components_page_facilitator_notes';
  info: {
    description: 'Facilitator notes for pages';
    displayName: 'Facilitator Note';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    noteId: Schema.Attribute.UID & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagePageConfig extends Struct.ComponentSchema {
  collectionName: 'components_page_page_configs';
  info: {
    description: 'Configuration for the page including background settings';
    displayName: 'Page Config';
  };
  attributes: {
    background: Schema.Attribute.Component<'shared.background', false> &
      Schema.Attribute.Required;
  };
}

export interface SharedBackground extends Struct.ComponentSchema {
  collectionName: 'components_shared_backgrounds';
  info: {
    description: 'Background configuration with image and color options';
    displayName: 'Background';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    backgroundImage: Schema.Attribute.Component<'shared.image', false>;
    opacity: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
  };
}

export interface SharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    description: 'Image component with metadata';
    displayName: 'Image';
  };
  attributes: {
    alt: Schema.Attribute.String;
    cmsImageUrl: Schema.Attribute.String;
    imageName: Schema.Attribute.String;
    meta: Schema.Attribute.JSON;
    s3FilePath: Schema.Attribute.String;
    src: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'page.block': PageBlock;
      'page.column': PageColumn;
      'page.container': PageContainer;
      'page.facilitator-note': PageFacilitatorNote;
      'page.page-config': PagePageConfig;
      'shared.background': SharedBackground;
      'shared.image': SharedImage;
    }
  }
}
