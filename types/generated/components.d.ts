import type { Schema, Struct } from '@strapi/strapi';

export interface PageBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_blocks';
  info: {
    displayName: 'Block';
  };
  attributes: {
    config: Schema.Attribute.JSON;
    content: Schema.Attribute.JSON;
    type: Schema.Attribute.String;
  };
}

export interface PageColumn extends Struct.ComponentSchema {
  collectionName: 'components_page_columns';
  info: {
    displayName: 'Column';
  };
  attributes: {
    blocks: Schema.Attribute.Component<'page.block', true>;
    col: Schema.Attribute.Integer;
    columnId: Schema.Attribute.String;
    config: Schema.Attribute.Component<'page.column-config', false>;
    label: Schema.Attribute.String;
  };
}

export interface PageColumnConfig extends Struct.ComponentSchema {
  collectionName: 'components_page_column_configs';
  info: {
    displayName: 'Column Config';
  };
  attributes: {
    background: Schema.Attribute.JSON;
    componentsWidth: Schema.Attribute.String;
  };
}

export interface PageContainer extends Struct.ComponentSchema {
  collectionName: 'components_page_containers';
  info: {
    displayName: 'Container';
  };
  attributes: {
    column: Schema.Attribute.Component<'page.column', true>;
    columnDistribution: Schema.Attribute.String;
    config: Schema.Attribute.Component<'page.container-config', false>;
    containerId: Schema.Attribute.String;
    containerWidth: Schema.Attribute.Integer;
    layoutType: Schema.Attribute.String;
  };
}

export interface PageContainerConfig extends Struct.ComponentSchema {
  collectionName: 'components_page_container_configs';
  info: {
    displayName: 'Container Config';
  };
  attributes: {
    background: Schema.Attribute.JSON;
    columnAlignment: Schema.Attribute.String;
    componentsWidth: Schema.Attribute.String;
  };
}

export interface PageFacilitatorNote extends Struct.ComponentSchema {
  collectionName: 'components_page_facilitator_notes';
  info: {
    displayName: 'Facilitator Note';
  };
  attributes: {
    description: Schema.Attribute.String;
    noteId: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PagePageConfig extends Struct.ComponentSchema {
  collectionName: 'components_page_page_configs';
  info: {
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
    displayName: 'Background';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Component<'shared.image', false> &
      Schema.Attribute.Required;
  };
}

export interface SharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
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
      'page.column-config': PageColumnConfig;
      'page.container': PageContainer;
      'page.container-config': PageContainerConfig;
      'page.facilitator-note': PageFacilitatorNote;
      'page.page-config': PagePageConfig;
      'shared.background': SharedBackground;
      'shared.image': SharedImage;
    }
  }
}
