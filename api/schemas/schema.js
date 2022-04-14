import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import tags from './project-tags';
import badges from './project-badges';
import projFile from './contents';
import projects from './projects';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([tags, badges, projects, projFile]),
})
